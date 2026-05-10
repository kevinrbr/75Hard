<template>
  <article class="animate-rise rounded-4xl bg-white p-4 shadow-card">
    <div class="flex items-start gap-3">
      <div class="grid size-12 place-items-center rounded-2xl bg-blush-100 text-xl">{{ goal.icon }}</div>

      <div class="min-w-0 flex-1">
        <div class="flex items-start justify-between gap-2">
          <div>
            <h3 class="text-sm font-semibold text-ink">{{ goal.title }}</h3>
            <p v-if="goal.description" class="mt-1 text-xs text-ink/60">{{ goal.description }}</p>
          </div>
          <span class="rounded-full bg-blush-50 px-2 py-1 text-xs font-medium text-blush-500">
            {{ completionRate }}%
          </span>
        </div>

        <div class="mt-3 flex items-center justify-between text-xs text-ink/60">
          <p>{{ goal.type === 'daily' ? 'Journalier' : 'Hebdomadaire' }}</p>
          <p v-if="goal.targetValue">{{ goal.targetValue }} {{ goal.unit }}</p>
        </div>

        <div class="mt-3 flex items-center gap-2">
          <button
            class="rounded-2xl bg-blush-50 px-3 py-1 text-xs font-medium text-ink transition hover:bg-blush-100"
            @click="$emit('edit', goal.id)"
          >
            Modifier
          </button>
          <button
            class="rounded-2xl bg-rose-50 px-3 py-1 text-xs font-medium text-rose-500 transition hover:bg-rose-100"
            @click="$emit('delete', goal.id)"
          >
            Supprimer
          </button>
          <button
            class="ml-auto text-ink/40 transition hover:text-ink/70"
            :title="goal.status === 'active' ? 'Désactiver' : 'Activer'"
            @click="$emit('toggle', goal.id)"
          >
            <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Goal } from '@/types/challenge'

defineProps<{
  goal: Goal
  completionRate: number
}>()

defineEmits<{
  edit: [goalId: string]
  delete: [goalId: string]
  toggle: [goalId: string]
}>()
</script>
