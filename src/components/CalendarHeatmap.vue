<template>
  <section class="rounded-4xl bg-white p-4 shadow-card">
    <div class="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-ink/60">
      <p class="font-semibold text-ink">Calendrier du challenge</p>
      <div class="flex items-center gap-2">
        <span class="inline-flex items-center gap-1"><i class="size-2 rounded-full bg-blush-400" />Complet</span>
        <span class="inline-flex items-center gap-1"><i class="size-2 rounded-full bg-blush-200" />Partiel</span>
        <span class="inline-flex items-center gap-1"><i class="size-2 rounded-full bg-zinc-200" />Manqué</span>
      </div>
    </div>

    <div class="grid grid-cols-7 gap-2">
      <button
        v-for="day in days"
        :key="day.date"
        class="grid aspect-square place-items-center rounded-2xl text-[10px] font-semibold"
        :class="statusClass(day.status)"
        :title="`${day.date} - ${day.status}`"
      >
        {{ day.dayNumber }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { CalendarDay, DayStatus } from '@/types/challenge'

defineProps<{
  days: CalendarDay[]
}>()

function statusClass(status: DayStatus): string {
  if (status === 'complete') return 'bg-blush-400 text-white'
  if (status === 'partial') return 'bg-blush-200 text-ink'
  if (status === 'future') return 'bg-blush-50 text-ink/40'
  return 'bg-zinc-200 text-zinc-500'
}
</script>
