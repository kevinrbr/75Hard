import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { exportBackupJson } from '@/services/backupService'
import { loadInitialState, saveState, type PersistedState } from '@/services/challengeService'
import type {
  BackupPayload,
  Challenge,
  ChallengeStats,
  DailyLog,
  Goal,
  GoalCompletion,
  GoalType,
  NewGoalPayload,
  UserSettings,
  WeeklyLog
} from '@/types/challenge'
import { addDays, diffInDays, startOfWeek, todayISO } from '@/utils/date'
import { buildCalendar, computeStats, computeWeeklyHistory } from '@/utils/stats'

function createId(prefix: string): string {
  return `${prefix}_${crypto.randomUUID()}`
}

export const useChallengeStore = defineStore('challenge', () => {
  const isLoading = ref(true)
  const challenge = ref<Challenge | null>(null)
  const goals = ref<Goal[]>([])
  const completions = ref<GoalCompletion[]>([])
  const dailyLogs = ref<DailyLog[]>([])
  const weeklyLogs = ref<WeeklyLog[]>([])
  const settings = ref<UserSettings | null>(null)
  const loadError = ref<string | null>(null)

  const today = computed(() => todayISO())
  const weekStart = computed(() => startOfWeek(today.value))

  const activeGoals = computed(() => goals.value.filter((goal) => goal.status === 'active'))
  const dailyGoals = computed(() => activeGoals.value.filter((goal) => goal.type === 'daily'))
  const weeklyGoals = computed(() => activeGoals.value.filter((goal) => goal.type === 'weekly'))

  const todayDailyCompletions = computed(() =>
    completions.value.filter(
      (completion) => completion.type === 'daily' && completion.completionDate === today.value
    )
  )

  const weekCompletions = computed(() =>
    completions.value.filter(
      (completion) => completion.type === 'weekly' && completion.completionDate === weekStart.value
    )
  )

  const dailyCompletionCount = computed(
    () => todayDailyCompletions.value.filter((completion) => completion.completed).length
  )

  const dailyProgress = computed(() => {
    if (dailyGoals.value.length === 0) return 0
    return Math.round((dailyCompletionCount.value / dailyGoals.value.length) * 100)
  })

  const weeklyCompletionCount = computed(
    () => weekCompletions.value.filter((completion) => completion.completed).length
  )

  const weeklyProgress = computed(() => {
    if (weeklyGoals.value.length === 0) return 0
    return Math.round((weeklyCompletionCount.value / weeklyGoals.value.length) * 100)
  })

  const activeDay = computed(() => {
    if (!challenge.value) return 1
    const elapsed = diffInDays(challenge.value.startDate, today.value)
    return Math.min(Math.max(elapsed + 1, 1), challenge.value.durationDays)
  })

  const globalProgress = computed(() => {
    if (!challenge.value) return 0
    return Math.round((activeDay.value / challenge.value.durationDays) * 100)
  })

  const calendar = computed(() => {
    if (!challenge.value) return []
    return buildCalendar(challenge.value, dailyLogs.value)
  })

  const stats = computed<ChallengeStats>(() => {
    if (!challenge.value) {
      return {
        completedDays: 0,
        bestStreak: 0,
        totalCompletedTasks: 0,
        successRate: 0,
        dailyCompletionRate: 0,
        weeklyCompletionRate: 0,
        mostSuccessfulGoals: [],
        mostMissedGoals: []
      }
    }

    return computeStats(
      challenge.value,
      goals.value,
      completions.value,
      dailyLogs.value,
      weeklyLogs.value
    )
  })

  const weeklyTrend = computed(() => computeWeeklyHistory(dailyLogs.value))

  function completionFor(goalId: string, date: string, type: GoalType): GoalCompletion | undefined {
    return completions.value.find(
      (completion) =>
        completion.goalId === goalId &&
        completion.completionDate === date &&
        completion.type === type
    )
  }

  function ensureCompletion(goalId: string, date: string, type: GoalType): GoalCompletion {
    const existing = completionFor(goalId, date, type)
    if (existing) return existing

    const stamp = new Date().toISOString()
    const created: GoalCompletion = {
      id: createId('completion'),
      challengeId: challenge.value?.id ?? 'local',
      goalId,
      completionDate: date,
      completed: false,
      type,
      createdAt: stamp,
      updatedAt: stamp
    }
    completions.value.push(created)
    return created
  }

  function recalculateDailyLog(date: string): void {
    const totalGoals = dailyGoals.value.length
    if (totalGoals === 0) {
      dailyLogs.value = dailyLogs.value.filter((log) => log.date !== date)
      return
    }

    const matches = completions.value.filter(
      (completion) => completion.type === 'daily' && completion.completionDate === date
    )
    const completedGoals = matches.filter((match) => match.completed).length
    const status = completedGoals === totalGoals ? 'complete' : completedGoals === 0 ? 'missed' : 'partial'

    const existing = dailyLogs.value.find((log) => log.date === date)
    const stamp = new Date().toISOString()

    if (existing) {
      existing.completedGoals = completedGoals
      existing.totalGoals = totalGoals
      existing.status = status
      existing.updatedAt = stamp
      return
    }

    dailyLogs.value.push({
      id: createId('daily-log'),
      challengeId: challenge.value?.id ?? 'local',
      date,
      completedGoals,
      totalGoals,
      status,
      createdAt: stamp,
      updatedAt: stamp
    })
  }

  function recalculateWeeklyLog(week: string): void {
    const totalGoals = weeklyGoals.value.length
    if (totalGoals === 0) {
      weeklyLogs.value = weeklyLogs.value.filter((log) => log.weekStartDate !== week)
      return
    }

    const matches = completions.value.filter(
      (completion) => completion.type === 'weekly' && completion.completionDate === week
    )
    const completedGoals = matches.filter((match) => match.completed).length
    const status = completedGoals === totalGoals ? 'complete' : completedGoals === 0 ? 'missed' : 'partial'

    const existing = weeklyLogs.value.find((log) => log.weekStartDate === week)
    const stamp = new Date().toISOString()

    if (existing) {
      existing.completedGoals = completedGoals
      existing.totalGoals = totalGoals
      existing.status = status
      existing.updatedAt = stamp
      return
    }

    weeklyLogs.value.push({
      id: createId('weekly-log'),
      challengeId: challenge.value?.id ?? 'local',
      weekStartDate: week,
      completedGoals,
      totalGoals,
      status,
      createdAt: stamp,
      updatedAt: stamp
    })
  }

  async function persist(): Promise<void> {
    if (!challenge.value || !settings.value) return

    const payload: PersistedState = {
      challenge: challenge.value,
      goals: goals.value,
      completions: completions.value,
      dailyLogs: dailyLogs.value,
      weeklyLogs: weeklyLogs.value,
      settings: settings.value
    }

    try {
      await saveState(payload)
      loadError.value = null
    } catch (error) {
      loadError.value =
        error instanceof Error
          ? error.message
          : 'Erreur de synchronisation Supabase.'
      throw error
    }
  }

  async function init(): Promise<void> {
    isLoading.value = true
    loadError.value = null

    try {
      const state = await loadInitialState()
      challenge.value = state.challenge
      goals.value = state.goals
      completions.value = state.completions
      dailyLogs.value = state.dailyLogs
      weeklyLogs.value = state.weeklyLogs
      settings.value = state.settings

      challenge.value.activeDay = activeDay.value
    } catch (error) {
      loadError.value =
        error instanceof Error
          ? error.message
          : 'Erreur inconnue lors du chargement depuis Supabase.'
    } finally {
      isLoading.value = false
    }
  }

  async function addGoal(payload: NewGoalPayload): Promise<void> {
    if (!challenge.value) return

    const stamp = new Date().toISOString()
    goals.value.unshift({
      id: createId('goal'),
      challengeId: challenge.value.id,
      title: payload.title,
      description: payload.description,
      type: payload.type,
      unit: payload.unit,
      targetValue: payload.targetValue,
      icon: payload.icon,
      status: 'active',
      createdAt: stamp,
      updatedAt: stamp
    })

    if (payload.type === 'daily') {
      const dayDate = today.value
      ensureCompletion(goals.value[0].id, dayDate, 'daily')
      recalculateDailyLog(dayDate)
    } else {
      ensureCompletion(goals.value[0].id, weekStart.value, 'weekly')
      recalculateWeeklyLog(weekStart.value)
    }

    await persist()
  }

  async function updateGoal(goalId: string, patch: Partial<Goal>): Promise<void> {
    const goal = goals.value.find((entry) => entry.id === goalId)
    if (!goal) return

    Object.assign(goal, patch, { updatedAt: new Date().toISOString() })
    await persist()
  }

  async function deleteGoal(goalId: string): Promise<void> {
    const goal = goals.value.find((entry) => entry.id === goalId)
    if (!goal) return

    goals.value = goals.value.filter((entry) => entry.id !== goalId)
    completions.value = completions.value.filter((entry) => entry.goalId !== goalId)

    recalculateDailyLog(today.value)
    recalculateWeeklyLog(weekStart.value)
    await persist()
  }

  async function setStartDate(startDate: string): Promise<void> {
    if (!challenge.value) return
    if (!/^\d{4}-\d{2}-\d{2}$/.test(startDate)) return

    challenge.value.startDate = startDate
    challenge.value.updatedAt = new Date().toISOString()
    challenge.value.activeDay = activeDay.value

    ensureChallengeHistory()
    recalculateDailyLog(today.value)
    recalculateWeeklyLog(weekStart.value)
    await persist()
  }

  async function toggleDailyTask(goalId: string): Promise<void> {
    const completion = ensureCompletion(goalId, today.value, 'daily')
    completion.completed = !completion.completed
    completion.updatedAt = new Date().toISOString()
    recalculateDailyLog(today.value)
    await persist()
  }

  async function toggleWeeklyTask(goalId: string): Promise<void> {
    const completion = ensureCompletion(goalId, weekStart.value, 'weekly')
    completion.completed = !completion.completed
    completion.updatedAt = new Date().toISOString()
    recalculateWeeklyLog(weekStart.value)
    await persist()
  }

  function isGoalCompleted(goalId: string, type: GoalType): boolean {
    const date = type === 'daily' ? today.value : weekStart.value
    return completionFor(goalId, date, type)?.completed ?? false
  }

  function completionRateForGoal(goalId: string): number {
    const rows = completions.value.filter((completion) => completion.goalId === goalId)
    if (rows.length === 0) return 0
    const done = rows.filter((row) => row.completed).length
    return Math.round((done / rows.length) * 100)
  }

  function mainGoal(): Goal | null {
    return dailyGoals.value.find((goal) => !isGoalCompleted(goal.id, 'daily')) ?? dailyGoals.value[0] ?? null
  }

  function buildBackupPayload(): BackupPayload | null {
    if (!challenge.value || !settings.value) return null

    return {
      exportedAt: new Date().toISOString(),
      appVersion: '0.0.1',
      challenge: challenge.value,
      goals: goals.value,
      completions: completions.value,
      dailyLogs: dailyLogs.value,
      weeklyLogs: weeklyLogs.value,
      stats: stats.value,
      settings: settings.value
    }
  }

  function exportData(): string | null {
    const payload = buildBackupPayload()
    if (!payload) return null
    return exportBackupJson(payload)
  }

  function ensureChallengeHistory(): void {
    if (!challenge.value) return
    if (dailyGoals.value.length === 0) {
      challenge.value.activeDay = activeDay.value
      return
    }

    const days = activeDay.value

    for (let index = 0; index < days; index += 1) {
      const date = addDays(challenge.value.startDate, index)
      const exists = dailyLogs.value.some((log) => log.date === date)
      if (!exists) {
        recalculateDailyLog(date)
      }
    }

    challenge.value.activeDay = activeDay.value
  }

  return {
    isLoading,
    loadError,
    challenge,
    goals,
    completions,
    dailyLogs,
    weeklyLogs,
    settings,
    today,
    weekStart,
    activeGoals,
    dailyGoals,
    weeklyGoals,
    dailyProgress,
    weeklyProgress,
    dailyCompletionCount,
    weeklyCompletionCount,
    globalProgress,
    activeDay,
    calendar,
    stats,
    weeklyTrend,
    init,
    addGoal,
    updateGoal,
    deleteGoal,
    setStartDate,
    toggleDailyTask,
    toggleWeeklyTask,
    isGoalCompleted,
    completionRateForGoal,
    mainGoal,
    exportData,
    ensureChallengeHistory,
    recalculateDailyLog,
    recalculateWeeklyLog,
    persist
  }
})
