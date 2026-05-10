export type GoalType = 'daily' | 'weekly'
export type GoalStatus = 'active' | 'inactive'
export type DayStatus = 'complete' | 'partial' | 'missed' | 'future'
export type ProgressTab = 'overview' | 'calendar' | 'stats'

export interface Challenge {
  id: string
  userId: string
  name: string
  startDate: string
  durationDays: number
  activeDay: number
  status: 'active' | 'completed' | 'paused'
  createdAt: string
  updatedAt: string
}

export interface Goal {
  id: string
  challengeId: string
  title: string
  description?: string
  type: GoalType
  unit?: string
  targetValue?: number
  icon: string
  status: GoalStatus
  createdAt: string
  updatedAt: string
}

export interface GoalCompletion {
  id: string
  challengeId: string
  goalId: string
  completionDate: string
  value?: number
  completed: boolean
  type: GoalType
  createdAt: string
  updatedAt: string
}

export interface DailyLog {
  id: string
  challengeId: string
  date: string
  completedGoals: number
  totalGoals: number
  status: DayStatus
  notes?: string
  createdAt: string
  updatedAt: string
}

export interface WeeklyLog {
  id: string
  challengeId: string
  weekStartDate: string
  completedGoals: number
  totalGoals: number
  status: 'complete' | 'partial' | 'missed'
  createdAt: string
  updatedAt: string
}

export interface UserSettings {
  id: string
  userId: string
  timezone: string
  notificationsEnabled: boolean
  backupEnabled: boolean
  preferredTheme: 'light' | 'dark' | 'system'
  createdAt: string
  updatedAt: string
}

export interface ChallengeStats {
  completedDays: number
  bestStreak: number
  totalCompletedTasks: number
  successRate: number
  weeklyCompletionRate: number
  dailyCompletionRate: number
  mostSuccessfulGoals: GoalPerformance[]
  mostMissedGoals: GoalPerformance[]
}

export interface GoalPerformance {
  goalId: string
  title: string
  completionCount: number
  missCount: number
  completionRate: number
}

export interface CalendarDay {
  date: string
  dayNumber: number
  status: DayStatus
}

export interface BackupPayload {
  exportedAt: string
  appVersion: string
  challenge: Challenge
  goals: Goal[]
  completions: GoalCompletion[]
  dailyLogs: DailyLog[]
  weeklyLogs: WeeklyLog[]
  stats: ChallengeStats
  settings: UserSettings
}

export interface NewGoalPayload {
  title: string
  description?: string
  type: GoalType
  unit?: string
  targetValue?: number
  icon: string
}
