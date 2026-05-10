<template>
  <section class="space-y-4">
    <div class="rounded-4xl bg-white p-5 shadow-card">
      <div class="flex items-start justify-between gap-3">
        <div>
          <h2 class="font-display text-3xl text-ink">Tâches du jour</h2>
          <p class="text-sm text-ink/60">{{ store.today }}</p>
        </div>
        <span class="rounded-full bg-blush-50 px-3 py-1 text-xs font-semibold text-blush-500">
          {{ store.dailyCompletionCount }}/{{ store.dailyGoals.length }}
        </span>
      </div>

      <div class="mt-4 h-2 overflow-hidden rounded-full bg-blush-100">
        <div class="h-full rounded-full bg-blush-400 transition-all duration-500" :style="{ width: `${store.dailyProgress}%` }" />
      </div>
    </div>

    <div class="space-y-3">
      <TaskCard
        v-for="goal in store.dailyGoals"
        :key="goal.id"
        :title="goal.title"
        :icon="goal.icon"
        :completed="store.isGoalCompleted(goal.id, 'daily')"
        :target-label="goal.targetValue ? `${goal.targetValue} ${goal.unit ?? ''}` : undefined"
        @toggle="store.toggleDailyTask(goal.id)"
      />
    </div>

    <Transition name="fade-slide">
      <article
        v-if="store.dailyProgress === 100 && store.dailyGoals.length > 0"
        class="rounded-4xl bg-gradient-to-r from-blush-100 to-white p-5 shadow-card"
      >
        <p class="text-xs uppercase tracking-wider text-ink/50">Bravo</p>
        <h3 class="mt-1 font-display text-2xl text-ink">Toutes les tâches sont validées 🎉</h3>
        <p class="mt-1 text-sm text-ink/60">Votre discipline aujourd'hui construit votre série de demain.</p>
      </article>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import TaskCard from '@/components/TaskCard.vue'
import { useChallengeStore } from '@/stores/challenge'

const store = useChallengeStore()
</script>
