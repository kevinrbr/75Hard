import type { BackupPayload } from '@/types/challenge'

export function exportBackupJson(payload: BackupPayload): string {
  const json = JSON.stringify(payload, null, 2)
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  const stamp = new Date().toISOString().replaceAll(':', '-')
  anchor.href = url
  anchor.download = `75-hard-backup-${stamp}.json`
  anchor.click()
  URL.revokeObjectURL(url)
  return json
}

export function scheduleDailyBackup(runBackup: () => void): () => void {
  const now = new Date()
  const nextMidnight = new Date(now)
  nextMidnight.setHours(24, 0, 0, 0)

  const initialDelay = nextMidnight.getTime() - now.getTime()
  let intervalId = 0

  const timeoutId = window.setTimeout(() => {
    runBackup()
    intervalId = window.setInterval(runBackup, 24 * 60 * 60 * 1000)
  }, initialDelay)

  return () => {
    clearTimeout(timeoutId)
    clearInterval(intervalId)
  }
}

export const backupArchitectureNote =
  'Le déclenchement quotidien coté front dépend de l\'ouverture du navigateur. Pour une vraie fiabilité minuit, utilisez une Edge Function Supabase déclenchée par cron et stockez le JSON dans un bucket Storage.'
