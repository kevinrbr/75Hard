const DAY_MS = 24 * 60 * 60 * 1000;
export function todayISO() {
    return new Date().toISOString().slice(0, 10);
}
export function toISO(date) {
    return date.toISOString().slice(0, 10);
}
export function addDays(isoDate, amount) {
    const date = new Date(`${isoDate}T00:00:00`);
    date.setDate(date.getDate() + amount);
    return toISO(date);
}
export function diffInDays(fromISO, toISODate) {
    const from = new Date(`${fromISO}T00:00:00`).getTime();
    const to = new Date(`${toISODate}T00:00:00`).getTime();
    return Math.floor((to - from) / DAY_MS);
}
export function startOfWeek(isoDate) {
    const date = new Date(`${isoDate}T00:00:00`);
    const day = date.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    date.setDate(date.getDate() + diff);
    return toISO(date);
}
export function formatDayLabel(isoDate) {
    return new Date(`${isoDate}T00:00:00`).toLocaleDateString('fr-FR', {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
    });
}
