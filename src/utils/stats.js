import { addDays, diffInDays, startOfWeek, todayISO } from '@/utils/date';
export function buildCalendar(challenge, dailyLogs) {
    const current = todayISO();
    return Array.from({ length: challenge.durationDays }, (_, index) => {
        const date = addDays(challenge.startDate, index);
        const log = dailyLogs.find((entry) => entry.date === date);
        const isFuture = diffInDays(current, date) > 0;
        return {
            date,
            dayNumber: index + 1,
            status: isFuture ? 'future' : (log?.status ?? 'missed')
        };
    });
}
export function computeBestStreak(calendar) {
    let best = 0;
    let current = 0;
    calendar.forEach((day) => {
        if (day.status === 'complete') {
            current += 1;
            best = Math.max(best, current);
            return;
        }
        current = 0;
    });
    return best;
}
export function computeGoalPerformance(goals, completions, type) {
    return goals
        .filter((goal) => goal.type === type)
        .map((goal) => {
        const rows = completions.filter((completion) => completion.goalId === goal.id);
        const completionCount = rows.filter((row) => row.completed).length;
        const total = rows.length;
        const missCount = total - completionCount;
        return {
            goalId: goal.id,
            title: goal.title,
            completionCount,
            missCount,
            completionRate: total === 0 ? 0 : Math.round((completionCount / total) * 100)
        };
    });
}
export function computeWeeklyHistory(dailyLogs) {
    const buckets = new Map();
    dailyLogs.forEach((log) => {
        const key = startOfWeek(log.date);
        if (!buckets.has(key))
            buckets.set(key, []);
        buckets.get(key)?.push(log);
    });
    return [...buckets.entries()]
        .map(([week, logs]) => {
        const completed = logs.filter((log) => log.status === 'complete').length;
        const rate = logs.length === 0 ? 0 : Math.round((completed / logs.length) * 100);
        return { weekLabel: week, completionRate: rate };
    })
        .sort((a, b) => a.weekLabel.localeCompare(b.weekLabel));
}
export function computeStats(challenge, goals, completions, dailyLogs, weeklyLogs) {
    const calendar = buildCalendar(challenge, dailyLogs);
    const completedDays = dailyLogs.filter((log) => log.status === 'complete').length;
    const bestStreak = computeBestStreak(calendar);
    const totalCompletedTasks = completions.filter((completion) => completion.completed).length;
    const totalTasks = completions.length;
    const successRate = totalTasks === 0 ? 0 : Math.round((totalCompletedTasks / totalTasks) * 100);
    const dailyCompletions = completions.filter((completion) => completion.type === 'daily');
    const weeklyCompletions = completions.filter((completion) => completion.type === 'weekly');
    const dailyDone = dailyCompletions.filter((completion) => completion.completed).length;
    const weeklyDone = weeklyCompletions.filter((completion) => completion.completed).length;
    const dailyCompletionRate = dailyCompletions.length === 0 ? 0 : Math.round((dailyDone / dailyCompletions.length) * 100);
    const weeklyCompletionRate = weeklyCompletions.length === 0 ? 0 : Math.round((weeklyDone / weeklyCompletions.length) * 100);
    const performance = computeGoalPerformance(goals, completions, 'daily');
    const weeklyPerformance = computeGoalPerformance(goals, completions, 'weekly');
    const allPerformance = [...performance, ...weeklyPerformance];
    return {
        completedDays,
        bestStreak,
        totalCompletedTasks,
        successRate,
        dailyCompletionRate,
        weeklyCompletionRate,
        mostSuccessfulGoals: [...allPerformance]
            .sort((a, b) => b.completionRate - a.completionRate)
            .slice(0, 3),
        mostMissedGoals: [...allPerformance]
            .sort((a, b) => b.missCount - a.missCount)
            .slice(0, 3)
    };
}
