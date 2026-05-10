import { hasSupabaseConfig, supabase } from '@/lib/supabase'
import type {
  Challenge,
  DailyLog,
  Goal,
  GoalCompletion,
  UserSettings,
  WeeklyLog
} from '@/types/challenge'

export interface PersistedState {
  challenge: Challenge
  goals: Goal[]
  completions: GoalCompletion[]
  dailyLogs: DailyLog[]
  weeklyLogs: WeeklyLog[]
  settings: UserSettings
}

interface ChallengeRow {
  id: string
  user_id: string
  name: string
  start_date: string
  duration_days: number
  active_day: number
  status: 'active' | 'completed' | 'paused'
  created_at: string
  updated_at: string
}

interface GoalRow {
  id: string
  challenge_id: string
  title: string
  description: string | null
  type: 'daily' | 'weekly'
  unit: string | null
  target_value: number | string | null
  icon: string
  status: 'active' | 'inactive'
  created_at: string
  updated_at: string
}

interface CompletionRow {
  id: string
  challenge_id: string
  goal_id: string
  completion_date: string
  value: number | string | null
  completed: boolean
  type: 'daily' | 'weekly'
  created_at: string
  updated_at: string
}

interface DailyLogRow {
  id: string
  challenge_id: string
  date: string
  completed_goals: number
  total_goals: number
  status: 'complete' | 'partial' | 'missed' | 'future'
  notes: string | null
  created_at: string
  updated_at: string
}

interface WeeklyLogRow {
  id: string
  challenge_id: string
  week_start_date: string
  completed_goals: number
  total_goals: number
  status: 'complete' | 'partial' | 'missed'
  created_at: string
  updated_at: string
}

interface UserSettingsRow {
  id: string
  user_id: string
  timezone: string
  notifications_enabled: boolean
  backup_enabled: boolean
  preferred_theme: 'light' | 'dark' | 'system'
  created_at: string
  updated_at: string
}

function createEmptyInitialState(userId: string): PersistedState {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString().slice(0, 10)
  const stamp = now.toISOString()
  const challengeId = `challenge_${crypto.randomUUID()}`

  return {
    challenge: {
      id: challengeId,
      userId,
      name: '75 Hard Challenge',
      startDate: today,
      durationDays: 75,
      activeDay: 1,
      status: 'active',
      createdAt: stamp,
      updatedAt: stamp
    },
    goals: [],
    completions: [],
    dailyLogs: [],
    weeklyLogs: [],
    settings: {
      id: `settings_${crypto.randomUUID()}`,
      userId,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      notificationsEnabled: true,
      backupEnabled: false,
      preferredTheme: 'light',
      createdAt: stamp,
      updatedAt: stamp
    }
  }
}

function requireSupabase() {
  if (!hasSupabaseConfig || !supabase) {
    throw new Error('Supabase non configuré. Renseigne VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY.')
  }
  return supabase
}

async function ensureUserSessionId(): Promise<string> {
  const client = requireSupabase()
  const { data: sessionData, error: sessionError } = await client.auth.getSession()

  if (sessionError) {
    throw new Error('Erreur session Supabase: ' + sessionError.message)
  }

  const existingUserId = sessionData.session?.user.id
  if (!existingUserId) {
    throw new Error('Aucune session active. Connectez-vous avec votre magic link.')
  }

  return existingUserId
}

function toChallengeRow(challenge: Challenge): ChallengeRow {
  return {
    id: challenge.id,
    user_id: challenge.userId,
    name: challenge.name,
    start_date: challenge.startDate,
    duration_days: challenge.durationDays,
    active_day: challenge.activeDay,
    status: challenge.status,
    created_at: challenge.createdAt,
    updated_at: challenge.updatedAt
  }
}

function fromChallengeRow(row: ChallengeRow): Challenge {
  return {
    id: row.id,
    userId: row.user_id,
    name: row.name,
    startDate: row.start_date,
    durationDays: row.duration_days,
    activeDay: row.active_day,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  }
}

function toGoalRow(goal: Goal): GoalRow {
  return {
    id: goal.id,
    challenge_id: goal.challengeId,
    title: goal.title,
    description: goal.description ?? null,
    type: goal.type,
    unit: goal.unit ?? null,
    target_value: goal.targetValue ?? null,
    icon: goal.icon,
    status: goal.status,
    created_at: goal.createdAt,
    updated_at: goal.updatedAt
  }
}

function fromGoalRow(row: GoalRow): Goal {
  return {
    id: row.id,
    challengeId: row.challenge_id,
    title: row.title,
    description: row.description ?? undefined,
    type: row.type,
    unit: row.unit ?? undefined,
    targetValue: row.target_value === null ? undefined : Number(row.target_value),
    icon: row.icon,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  }
}

function toCompletionRow(completion: GoalCompletion): CompletionRow {
  return {
    id: completion.id,
    challenge_id: completion.challengeId,
    goal_id: completion.goalId,
    completion_date: completion.completionDate,
    value: completion.value ?? null,
    completed: completion.completed,
    type: completion.type,
    created_at: completion.createdAt,
    updated_at: completion.updatedAt
  }
}

function fromCompletionRow(row: CompletionRow): GoalCompletion {
  return {
    id: row.id,
    challengeId: row.challenge_id,
    goalId: row.goal_id,
    completionDate: row.completion_date,
    value: row.value === null ? undefined : Number(row.value),
    completed: row.completed,
    type: row.type,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  }
}

function toDailyLogRow(log: DailyLog): DailyLogRow {
  return {
    id: log.id,
    challenge_id: log.challengeId,
    date: log.date,
    completed_goals: log.completedGoals,
    total_goals: log.totalGoals,
    status: log.status,
    notes: log.notes ?? null,
    created_at: log.createdAt,
    updated_at: log.updatedAt
  }
}

function fromDailyLogRow(row: DailyLogRow): DailyLog {
  return {
    id: row.id,
    challengeId: row.challenge_id,
    date: row.date,
    completedGoals: row.completed_goals,
    totalGoals: row.total_goals,
    status: row.status,
    notes: row.notes ?? undefined,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  }
}

function toWeeklyLogRow(log: WeeklyLog): WeeklyLogRow {
  return {
    id: log.id,
    challenge_id: log.challengeId,
    week_start_date: log.weekStartDate,
    completed_goals: log.completedGoals,
    total_goals: log.totalGoals,
    status: log.status,
    created_at: log.createdAt,
    updated_at: log.updatedAt
  }
}

function fromWeeklyLogRow(row: WeeklyLogRow): WeeklyLog {
  return {
    id: row.id,
    challengeId: row.challenge_id,
    weekStartDate: row.week_start_date,
    completedGoals: row.completed_goals,
    totalGoals: row.total_goals,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  }
}

function toSettingsRow(settings: UserSettings): UserSettingsRow {
  return {
    id: settings.id,
    user_id: settings.userId,
    timezone: settings.timezone,
    notifications_enabled: settings.notificationsEnabled,
    backup_enabled: settings.backupEnabled,
    preferred_theme: settings.preferredTheme,
    created_at: settings.createdAt,
    updated_at: settings.updatedAt
  }
}

function fromSettingsRow(row: UserSettingsRow): UserSettings {
  return {
    id: row.id,
    userId: row.user_id,
    timezone: row.timezone,
    notificationsEnabled: row.notifications_enabled,
    backupEnabled: row.backup_enabled,
    preferredTheme: row.preferred_theme,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  }
}

export async function saveState(state: PersistedState): Promise<void> {
  const client = requireSupabase()

  const challengeResult = await client.from('challenge').upsert(toChallengeRow(state.challenge))
  if (challengeResult.error) {
    throw new Error('Erreur sauvegarde challenge: ' + challengeResult.error.message)
  }

  const settingsResult = await client.from('user_settings').upsert(toSettingsRow(state.settings))
  if (settingsResult.error) {
    throw new Error('Erreur sauvegarde user_settings: ' + settingsResult.error.message)
  }

  const deleteGoalsResult = await client.from('goals').delete().eq('challenge_id', state.challenge.id)
  if (deleteGoalsResult.error) {
    throw new Error('Erreur suppression goals: ' + deleteGoalsResult.error.message)
  }
  if (state.goals.length > 0) {
    const insertGoalsResult = await client
      .from('goals')
      .upsert(state.goals.map(toGoalRow), { onConflict: 'id' })
    if (insertGoalsResult.error) {
      throw new Error('Erreur sauvegarde goals: ' + insertGoalsResult.error.message)
    }
  }

  const deleteCompletionsResult = await client
    .from('goal_completions')
    .delete()
    .eq('challenge_id', state.challenge.id)
  if (deleteCompletionsResult.error) {
    throw new Error('Erreur suppression completions: ' + deleteCompletionsResult.error.message)
  }
  if (state.completions.length > 0) {
    const insertCompletionsResult = await client
      .from('goal_completions')
      .upsert(state.completions.map(toCompletionRow), { onConflict: 'id' })
    if (insertCompletionsResult.error) {
      throw new Error('Erreur sauvegarde completions: ' + insertCompletionsResult.error.message)
    }
  }

  const deleteDailyLogsResult = await client
    .from('daily_logs')
    .delete()
    .eq('challenge_id', state.challenge.id)
  if (deleteDailyLogsResult.error) {
    throw new Error('Erreur suppression daily_logs: ' + deleteDailyLogsResult.error.message)
  }
  if (state.dailyLogs.length > 0) {
    const insertDailyLogsResult = await client
      .from('daily_logs')
      .upsert(state.dailyLogs.map(toDailyLogRow), { onConflict: 'id' })
    if (insertDailyLogsResult.error) {
      throw new Error('Erreur sauvegarde daily_logs: ' + insertDailyLogsResult.error.message)
    }
  }

  const deleteWeeklyLogsResult = await client
    .from('weekly_logs')
    .delete()
    .eq('challenge_id', state.challenge.id)
  if (deleteWeeklyLogsResult.error) {
    throw new Error('Erreur suppression weekly_logs: ' + deleteWeeklyLogsResult.error.message)
  }
  if (state.weeklyLogs.length > 0) {
    const insertWeeklyLogsResult = await client
      .from('weekly_logs')
      .upsert(state.weeklyLogs.map(toWeeklyLogRow), { onConflict: 'id' })
    if (insertWeeklyLogsResult.error) {
      throw new Error('Erreur sauvegarde weekly_logs: ' + insertWeeklyLogsResult.error.message)
    }
  }
}

export async function loadInitialState(): Promise<PersistedState> {
  const client = requireSupabase()
  const userId = await ensureUserSessionId()

  const challengeQuery = await client
    .from('challenge')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle<ChallengeRow>()

  if (challengeQuery.error) {
    throw new Error('Erreur chargement challenge: ' + challengeQuery.error.message)
  }

  if (!challengeQuery.data) {
    const initialState = createEmptyInitialState(userId)
    await saveState(initialState)
    return initialState
  }

  const challenge = fromChallengeRow(challengeQuery.data)

  const [goalsResult, completionsResult, dailyLogsResult, weeklyLogsResult, settingsResult] = await Promise.all([
    client.from('goals').select('*').eq('challenge_id', challenge.id),
    client.from('goal_completions').select('*').eq('challenge_id', challenge.id),
    client.from('daily_logs').select('*').eq('challenge_id', challenge.id),
    client.from('weekly_logs').select('*').eq('challenge_id', challenge.id),
    client.from('user_settings').select('*').eq('user_id', userId).maybeSingle<UserSettingsRow>()
  ])

  if (goalsResult.error) throw new Error('Erreur goals: ' + goalsResult.error.message)
  if (completionsResult.error) throw new Error('Erreur completions: ' + completionsResult.error.message)
  if (dailyLogsResult.error) throw new Error('Erreur daily_logs: ' + dailyLogsResult.error.message)
  if (weeklyLogsResult.error) throw new Error('Erreur weekly_logs: ' + weeklyLogsResult.error.message)
  if (settingsResult.error) throw new Error('Erreur user_settings: ' + settingsResult.error.message)

  const settings = settingsResult.data
    ? fromSettingsRow(settingsResult.data)
    : {
        id: `settings_${crypto.randomUUID()}`,
        userId,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        notificationsEnabled: true,
        backupEnabled: false,
        preferredTheme: 'light' as const,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

  const state: PersistedState = {
    challenge,
    goals: ((goalsResult.data ?? []) as GoalRow[]).map(fromGoalRow),
    completions: ((completionsResult.data ?? []) as CompletionRow[]).map(fromCompletionRow),
    dailyLogs: ((dailyLogsResult.data ?? []) as DailyLogRow[]).map(fromDailyLogRow),
    weeklyLogs: ((weeklyLogsResult.data ?? []) as WeeklyLogRow[]).map(fromWeeklyLogRow),
    settings
  }

  if (!settingsResult.data) {
    await saveState(state)
  }

  return state
}
