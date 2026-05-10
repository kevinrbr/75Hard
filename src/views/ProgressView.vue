<template>
  <section class="space-y-4">
    <div class="rounded-4xl bg-white p-1 shadow-soft">
      <div class="grid grid-cols-3 gap-1">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          class="rounded-2xl px-3 py-2 text-xs font-semibold transition"
          :class="activeTab === tab.value ? 'bg-blush-100 text-blush-500' : 'text-ink/60'"
          @click="activeTab = tab.value"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <div v-if="activeTab === 'overview'" class="space-y-3">
      <div class="grid grid-cols-2 gap-3">
        <StatsCard title="Jours complétés" :value="`${store.stats.completedDays}/75`" />
        <StatsCard title="Meilleure série" :value="store.stats.bestStreak" />
      </div>
      <div class="grid grid-cols-2 gap-3">
        <StatsCard title="Tâches validées" :value="store.stats.totalCompletedTasks" />
        <StatsCard title="Taux réussite" :value="`${store.stats.successRate}%`" />
      </div>
      <article class="rounded-4xl bg-white p-4 shadow-card">
        <h3 class="text-sm font-semibold text-ink">Taux daily / weekly</h3>
        <div class="mt-3 space-y-2 text-sm text-ink/70">
          <p>Daily: {{ store.stats.dailyCompletionRate }}%</p>
          <p>Weekly: {{ store.stats.weeklyCompletionRate }}%</p>
        </div>
      </article>
    </div>

    <CalendarHeatmap v-else-if="activeTab === 'calendar'" :days="store.calendar" />

    <div v-else class="space-y-3">
      <article class="rounded-4xl bg-white p-4 shadow-card">
        <h3 class="mb-4 text-sm font-semibold text-ink">Évolution par semaine</h3>
        <div class="space-y-3">
          <div v-for="week in store.weeklyTrend" :key="week.weekLabel" class="space-y-1">
            <div class="flex justify-between text-xs text-ink/60">
              <span>{{ week.weekLabel }}</span>
              <span>{{ week.completionRate }}%</span>
            </div>
            <div class="h-2 rounded-full bg-blush-100">
              <div class="h-full rounded-full bg-blush-400" :style="{ width: `${week.completionRate}%` }" />
            </div>
          </div>
        </div>
      </article>

      <article class="rounded-4xl bg-white p-4 shadow-card">
        <h3 class="text-sm font-semibold text-ink">Objectifs les plus réussis</h3>
        <ul class="mt-3 space-y-2 text-sm text-ink/70">
          <li v-for="goal in store.stats.mostSuccessfulGoals" :key="goal.goalId" class="flex justify-between">
            <span>{{ goal.title }}</span>
            <span>{{ goal.completionRate }}%</span>
          </li>
        </ul>
      </article>

      <article class="rounded-4xl bg-white p-4 shadow-card">
        <h3 class="text-sm font-semibold text-ink">Objectifs les plus manqués</h3>
        <ul class="mt-3 space-y-2 text-sm text-ink/70">
          <li v-for="goal in store.stats.mostMissedGoals" :key="goal.goalId" class="flex justify-between">
            <span>{{ goal.title }}</span>
            <span>{{ goal.missCount }} manqués</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CalendarHeatmap from '@/components/CalendarHeatmap.vue'
import StatsCard from '@/components/StatsCard.vue'
import { useChallengeStore } from '@/stores/challenge'
import type { ProgressTab } from '@/types/challenge'

const store = useChallengeStore()

const tabs: { label: string; value: ProgressTab }[] = [
  { label: 'Aperçu', value: 'overview' },
  { label: 'Calendrier', value: 'calendar' },
  { label: 'Stats', value: 'stats' }
]

const activeTab = ref<ProgressTab>('overview')
</script>
