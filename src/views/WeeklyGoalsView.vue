<template>
  <section class="space-y-4">
    <article class="rounded-4xl bg-white p-5 shadow-card">
      <h2 class="font-display text-3xl text-ink">Objectifs hebdomadaires</h2>
      <p class="text-sm text-ink/60">Semaine du {{ store.weekStart }}</p>
      <div class="mt-4 h-2 overflow-hidden rounded-full bg-blush-100">
        <div class="h-full rounded-full bg-blush-400 transition-all duration-500" :style="{ width: `${store.weeklyProgress}%` }" />
      </div>
      <p class="mt-2 text-xs text-ink/60">{{ store.weeklyCompletionCount }}/{{ store.weeklyGoals.length }} validés</p>
    </article>

    <div class="space-y-3">
      <TaskCard
        v-for="goal in store.weeklyGoals"
        :key="goal.id"
        :title="goal.title"
        :icon="goal.icon"
        :completed="store.isGoalCompleted(goal.id, 'weekly')"
        :target-label="goal.targetValue ? `${goal.targetValue} ${goal.unit ?? ''}` : undefined"
        @toggle="store.toggleWeeklyTask(goal.id)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import TaskCard from '@/components/TaskCard.vue'
import { useChallengeStore } from '@/stores/challenge'

const store = useChallengeStore()
</script>
