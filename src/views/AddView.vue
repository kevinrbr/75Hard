<template>
  <section class="space-y-4">
    <article class="rounded-4xl bg-white p-5 shadow-card">
      <h2 class="font-display text-3xl text-ink">Ajouter un objectif</h2>
      <p class="mt-1 text-sm text-ink/60">Créez rapidement un objectif daily ou weekly.</p>
      <PrimaryButton class="mt-4" @click="isModalOpen = true">Nouveau</PrimaryButton>
    </article>

    <article class="rounded-4xl bg-white p-5 shadow-card">
      <h3 class="text-sm font-semibold text-ink">Raccourcis</h3>
      <div class="mt-3 grid gap-2 sm:grid-cols-2">
        <button class="rounded-2xl bg-blush-50 px-3 py-3 text-left text-sm font-medium text-ink" @click="quickAdd('daily')">
          + Objectif journalier
        </button>
        <button class="rounded-2xl bg-blush-50 px-3 py-3 text-left text-sm font-medium text-ink" @click="quickAdd('weekly')">
          + Objectif hebdomadaire
        </button>
      </div>
    </article>

    <AddGoalModal :open="isModalOpen" @close="isModalOpen = false" @save="saveGoal" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddGoalModal from '@/components/AddGoalModal.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import { useChallengeStore } from '@/stores/challenge'
import type { GoalType, NewGoalPayload } from '@/types/challenge'

const store = useChallengeStore()
const isModalOpen = ref(false)

async function saveGoal(payload: NewGoalPayload): Promise<void> {
  await store.addGoal(payload)
  isModalOpen.value = false
}

async function quickAdd(type: GoalType): Promise<void> {
  await store.addGoal({
    title: type === 'daily' ? 'Nouvelle routine daily' : 'Nouvelle mission hebdo',
    type,
    icon: type === 'daily' ? '🌸' : '🗓️'
  })
}
</script>
