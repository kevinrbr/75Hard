<template>
  <section v-if="store.challenge" class="space-y-4">
    <article class="rounded-4xl bg-white p-5 shadow-card">
      <p class="text-xs uppercase tracking-wider text-ink/50">Progression du challenge</p>
      <div class="mt-4 flex items-center justify-between gap-3">
        <div>
          <h2 class="font-display text-3xl text-ink">Jour {{ store.activeDay }} / 75</h2>
          <p class="mt-1 text-sm text-ink/60">{{ store.globalProgress }}% complété</p>
        </div>
        <ProgressCircle :progress="store.globalProgress" :size="120">Global</ProgressCircle>
      </div>
    </article>

    <article class="rounded-4xl bg-white p-5 shadow-card">
      <p class="text-xs uppercase tracking-wider text-ink/50">Objectif principal du jour</p>
      <div class="mt-3 flex items-center gap-3">
        <div class="grid size-12 place-items-center rounded-2xl bg-blush-100 text-xl">
          {{ store.mainGoal()?.icon ?? '🎯' }}
        </div>
        <div>
          <h3 class="text-sm font-semibold text-ink">{{ store.mainGoal()?.title ?? 'Tout est complété 🎉' }}</h3>
          <p class="text-xs text-ink/60">Focus prioritaire pour avancer aujourd'hui</p>
        </div>
      </div>

      <RouterLink
        to="/tasks"
        class="mt-4 inline-flex rounded-3xl bg-blush-400 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-blush-500"
      >
        Aller aux tâches du jour
      </RouterLink>
    </article>

    <div class="grid grid-cols-2 gap-3">
      <StatsCard title="Daily" :value="`${store.dailyProgress}%`" :subtitle="`${store.dailyCompletionCount}/${store.dailyGoals.length} tâches`" />
      <StatsCard title="Weekly" :value="`${store.weeklyProgress}%`" :subtitle="`${store.weeklyCompletionCount}/${store.weeklyGoals.length} objectifs`" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProgressCircle from '@/components/ProgressCircle.vue'
import StatsCard from '@/components/StatsCard.vue'
import { useChallengeStore } from '@/stores/challenge'

const store = useChallengeStore()
</script>
