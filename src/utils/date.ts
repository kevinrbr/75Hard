const DAY_MS = 24 * 60 * 60 * 1000

export function todayISO(): string {
  return new Date().toISOString().slice(0, 10)
}

export function toISO(date: Date): string {
  return date.toISOString().slice(0, 10)
}

export function addDays(isoDate: string, amount: number): string {
  const date = new Date(`${isoDate}T00:00:00`)
  date.setDate(date.getDate() + amount)
  return toISO(date)
}

export function diffInDays(fromISO: string, toISODate: string): number {
  const from = new Date(`${fromISO}T00:00:00`).getTime()
  const to = new Date(`${toISODate}T00:00:00`).getTime()
  return Math.floor((to - from) / DAY_MS)
}

export function startOfWeek(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00`)
  const day = date.getDay()
  const diff = day === 0 ? -6 : 1 - day
  date.setDate(date.getDate() + diff)
  return toISO(date)
}

export function formatDayLabel(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString('fr-FR', {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  })
}
