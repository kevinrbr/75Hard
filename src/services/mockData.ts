import type {
  Challenge,
  DailyLog,
  Goal,
  GoalCompletion,
  UserSettings,
  WeeklyLog
} from '@/types/challenge'
import { addDays, startOfWeek, todayISO } from '@/utils/date'

export interface SeedState {
  challenge: Challenge
  goals: Goal[]
  completions: GoalCompletion[]
  dailyLogs: DailyLog[]
  weeklyLogs: WeeklyLog[]
  settings: UserSettings
}

function randomId(prefix: string): string {
  return `${prefix}_${crypto.randomUUID()}`
}

export function createSeedState(): SeedState {
  const today = todayISO()
  const startDate = addDays(today, -22)
  const createdAt = new Date().toISOString()

  const challenge: Challenge = {
    id: randomId('challenge'),
    userId: 'local-user',
    name: '75 Hard Challenge',
    startDate,
    durationDays: 75,
    activeDay: 23,
    status: 'active',
    createdAt,
    updatedAt: createdAt
  }

  const goals: Goal[] = [
    {
      id: randomId('goal'),
      challengeId: challenge.id,
      title: 'Boire de l\'eau',
      description: 'Hydratation quotidienne',
      type: 'daily',
      unit: 'L',
      targetValue: 3.8,
      icon: '💧',
      status: 'active',
      createdAt,
      updatedAt: createdAt
    },
    {
      id: randomId('goal'),
      challengeId: challenge.id,
      title: 'Entraînement 1',
      description: 'Séance principale',
      type: 'daily',
      unit: 'min',
      targetValue: 45,
      icon: '🏋️',
      status: 'active',
      createdAt,
      updatedAt: createdAt
    },
    {
      id: randomId('goal'),
      challengeId: challenge.id,
      title: 'Entraînement 2',
      description: 'Marche ou mobilité',
      type: 'daily',
      unit: 'min',
      targetValue: 30,
      icon: '🚶',
      status: 'active',
      createdAt,
      updatedAt: createdAt
    },
    {
      id: randomId('goal'),
      challengeId: challenge.id,
      title: 'Lire',
      description: 'Lecture de développement personnel',
      type: 'daily',
      unit: 'pages',
      targetValue: 10,
      icon: '📖',
      status: 'active',
      createdAt,
      updatedAt: createdAt
    },
    {
      id: randomId('goal'),
      challengeId: challenge.id,
      title: 'Manger sainement',
      type: 'daily',
      icon: '🥗',
      status: 'active',
      createdAt,
      updatedAt: createdAt
    },
    {
      id: randomId('goal'),
      challengeId: challenge.id,
      title: 'Photo du jour',
      type: 'daily',
      icon: '📷',
      status: 'active',
      createdAt,
      updatedAt: createdAt
    },
    {
      id: randomId('goal'),
      challengeId: challenge.id,
      title: 'Journal gratitude',
      type: 'daily',
      unit: 'entrée',
      targetValue: 1,
      icon: '📝',
      status: 'active',
      createdAt,
      updatedAt: createdAt
    },
    {
      id: randomId('goal'),
      challengeId: challenge.id,
      title: 'Pesée hebdomadaire',
      type: 'weekly',
      unit: 'kg',
      icon: '⚖️',
      status: 'active',
      createdAt,
      updatedAt: createdAt
    },
    {
      id: randomId('goal'),
      challengeId: challenge.id,
      title: 'Meal prep semaine',
      type: 'weekly',
      icon: '🍱',
      status: 'active',
      createdAt,
      updatedAt: createdAt
    }
  ]

  const completions: GoalCompletion[] = []
  const dailyLogs: DailyLog[] = []

  for (let dayIndex = 0; dayIndex < challenge.activeDay; dayIndex += 1) {
    const date = addDays(challenge.startDate, dayIndex)
    const dailyGoals = goals.filter((goal) => goal.type === 'daily' && goal.status === 'active')
    const completedCount = dailyGoals.reduce((count, goal) => {
      const isDone = Math.random() > 0.22 || dayIndex === challenge.activeDay - 1
      completions.push({
        id: randomId('completion'),
        challengeId: challenge.id,
        goalId: goal.id,
        completionDate: date,
        value: goal.targetValue,
        completed: isDone,
        type: 'daily',
        createdAt,
        updatedAt: createdAt
      })
      return count + Number(isDone)
    }, 0)

    dailyLogs.push({
      id: randomId('daily'),
      challengeId: challenge.id,
      date,
      completedGoals: completedCount,
      totalGoals: dailyGoals.length,
      status:
        completedCount === dailyGoals.length ? 'complete' : completedCount === 0 ? 'missed' : 'partial',
      createdAt,
      updatedAt: createdAt
    })
  }

  const weeklyLogs: WeeklyLog[] = []
  const weeklyGoals = goals.filter((goal) => goal.type === 'weekly' && goal.status === 'active')
  const seenWeek = new Set<string>()

  dailyLogs.forEach((dailyLog) => {
    const week = startOfWeek(dailyLog.date)
    if (seenWeek.has(week)) return
    seenWeek.add(week)

    let completedGoals = 0
    weeklyGoals.forEach((goal) => {
      const done = Math.random() > 0.35
      completions.push({
        id: randomId('completion'),
        challengeId: challenge.id,
        goalId: goal.id,
        completionDate: week,
        completed: done,
        type: 'weekly',
        createdAt,
        updatedAt: createdAt
      })
      completedGoals += Number(done)
    })

    weeklyLogs.push({
      id: randomId('weekly'),
      challengeId: challenge.id,
      weekStartDate: week,
      completedGoals,
      totalGoals: weeklyGoals.length,
      status:
        completedGoals === weeklyGoals.length
          ? 'complete'
          : completedGoals === 0
            ? 'missed'
            : 'partial',
      createdAt,
      updatedAt: createdAt
    })
  })

  const settings: UserSettings = {
    id: randomId('settings'),
    userId: challenge.userId,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    notificationsEnabled: true,
    backupEnabled: false,
    preferredTheme: 'light',
    createdAt,
    updatedAt: createdAt
  }

  return {
    challenge,
    goals,
    completions,
    dailyLogs,
    weeklyLogs,
    settings
  }
}
