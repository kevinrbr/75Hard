<template>
  <section class="space-y-4">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="font-display text-3xl text-ink">Mes objectifs</h2>
        <p class="text-sm text-ink/60">Gérez vos objectifs journaliers et hebdomadaires.</p>
      </div>
      <PrimaryButton @click="openCreate">Ajouter</PrimaryButton>
    </div>

    <div class="flex gap-2 rounded-3xl bg-white p-1 shadow-soft">
      <button
        v-for="item in tabs"
        :key="item.value"
        class="flex-1 rounded-2xl px-3 py-2 text-xs font-semibold transition"
        :class="selected === item.value ? 'bg-blush-100 text-blush-500' : 'text-ink/60'"
        @click="selected = item.value"
      >
        {{ item.label }}
      </button>
    </div>

    <div class="space-y-3">
      <GoalCard
        v-for="goal in filteredGoals"
        :key="goal.id"
        :goal="goal"
        :completion-rate="store.completionRateForGoal(goal.id)"
        @edit="openEdit"
        @delete="removeGoal"
        @toggle="toggleStatus"
      />
    </div>

    <AddGoalModal
      :open="isModalOpen"
      :mode="modalMode"
      :initial-goal="editingGoal"
      @close="closeModal"
      @save="saveGoal"
    />
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import AddGoalModal from '@/components/AddGoalModal.vue'
import GoalCard from '@/components/GoalCard.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import { useChallengeStore } from '@/stores/challenge'
import type { Goal, NewGoalPayload } from '@/types/challenge'

const store = useChallengeStore()

const tabs = [
  { label: 'Tous', value: 'all' },
  { label: 'Journaliers', value: 'daily' },
  { label: 'Hebdomadaires', value: 'weekly' }
] as const

const selected = ref<(typeof tabs)[number]['value']>('all')
const isModalOpen = ref(false)
const modalMode = ref<'create' | 'edit'>('create')
const editingGoal = ref<Goal | null>(null)

const filteredGoals = computed(() => {
  if (selected.value === 'all') return store.goals
  return store.goals.filter((goal) => goal.type === selected.value)
})

function openCreate(): void {
  modalMode.value = 'create'
  editingGoal.value = null
  isModalOpen.value = true
}

function openEdit(goalId: string): void {
  modalMode.value = 'edit'
  editingGoal.value = store.goals.find((goal) => goal.id === goalId) ?? null
  isModalOpen.value = true
}

async function saveGoal(payload: NewGoalPayload): Promise<void> {
  if (modalMode.value === 'create') {
    await store.addGoal(payload)
  } else if (editingGoal.value) {
    await store.updateGoal(editingGoal.value.id, payload)
  }
  closeModal()
}

async function removeGoal(goalId: string): Promise<void> {
  await store.deleteGoal(goalId)
}

async function toggleStatus(goalId: string): Promise<void> {
  const goal = store.goals.find((entry) => entry.id === goalId)
  if (!goal) return
  await store.updateGoal(goalId, { status: goal.status === 'active' ? 'inactive' : 'active' })
}

function closeModal(): void {
  isModalOpen.value = false
}
</script>
