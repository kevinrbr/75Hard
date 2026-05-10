<template>
  <Transition name="fade-slide">
    <div v-if="open" class="fixed inset-0 z-50 grid place-items-end bg-black/20 p-4 sm:place-items-center">
      <div class="w-full max-w-md rounded-4xl bg-white p-5 shadow-card">
        <div class="mb-4 flex items-center justify-between">
          <h3 class="font-display text-2xl text-ink">{{ mode === 'edit' ? 'Modifier' : 'Nouvel objectif' }}</h3>
          <button class="text-ink/40 hover:text-ink" @click="$emit('close')">✕</button>
        </div>

        <form class="space-y-3" @submit.prevent="submitForm">
          <label class="block">
            <span class="mb-1 block text-xs font-medium text-ink/60">Titre</span>
            <input v-model="form.title" required class="w-full rounded-2xl border-blush-200 text-sm focus:border-blush-300 focus:ring-blush-200" />
          </label>

          <label class="block">
            <span class="mb-1 block text-xs font-medium text-ink/60">Description (optionnelle)</span>
            <textarea
              v-model="form.description"
              rows="2"
              class="w-full rounded-2xl border-blush-200 text-sm focus:border-blush-300 focus:ring-blush-200"
            />
          </label>

          <div class="grid grid-cols-2 gap-3">
            <label class="block">
              <span class="mb-1 block text-xs font-medium text-ink/60">Type</span>
              <select v-model="form.type" class="w-full rounded-2xl border-blush-200 text-sm focus:border-blush-300 focus:ring-blush-200">
                <option value="daily">Journalier</option>
                <option value="weekly">Hebdomadaire</option>
              </select>
            </label>
            <label class="block">
              <span class="mb-1 block text-xs font-medium text-ink/60">Icône</span>
              <select v-model="form.icon" class="w-full rounded-2xl border-blush-200 text-sm focus:border-blush-300 focus:ring-blush-200">
                <option v-for="emoji in iconOptions" :key="emoji" :value="emoji">{{ emoji }}</option>
              </select>
            </label>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <label class="block">
              <span class="mb-1 block text-xs font-medium text-ink/60">Valeur cible</span>
              <input
                v-model.number="form.targetValue"
                type="number"
                min="0"
                step="0.1"
                class="w-full rounded-2xl border-blush-200 text-sm focus:border-blush-300 focus:ring-blush-200"
              />
            </label>
            <label class="block">
              <span class="mb-1 block text-xs font-medium text-ink/60">Unité</span>
              <input v-model="form.unit" placeholder="pages, L, kg..." class="w-full rounded-2xl border-blush-200 text-sm focus:border-blush-300 focus:ring-blush-200" />
            </label>
          </div>

          <div class="mt-4 flex gap-2">
            <PrimaryButton type="button" variant="ghost" class="flex-1" @click="$emit('close')">Annuler</PrimaryButton>
            <PrimaryButton type="submit" class="flex-1">{{ mode === 'edit' ? 'Enregistrer' : 'Ajouter' }}</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import type { Goal, GoalType, NewGoalPayload } from '@/types/challenge'

const props = withDefaults(
  defineProps<{
    open: boolean
    mode?: 'create' | 'edit'
    initialGoal?: Goal | null
  }>(),
  {
    mode: 'create',
    initialGoal: null
  }
)

const emit = defineEmits<{
  close: []
  save: [payload: NewGoalPayload]
}>()

const iconOptions = ['💧', '🏋️', '🚶', '📖', '🥗', '📷', '📝', '🍎', '⚖️', '🧘']

const form = reactive<NewGoalPayload>({
  title: '',
  description: '',
  type: 'daily',
  unit: '',
  targetValue: undefined,
  icon: '💧'
})

watch(
  () => props.initialGoal,
  (goal) => {
    if (!goal) return
    form.title = goal.title
    form.description = goal.description
    form.type = goal.type as GoalType
    form.unit = goal.unit
    form.targetValue = goal.targetValue
    form.icon = goal.icon
  },
  { immediate: true }
)

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen && props.mode === 'create') {
      form.title = ''
      form.description = ''
      form.type = 'daily'
      form.unit = ''
      form.targetValue = undefined
      form.icon = '💧'
    }
  }
)

function submitForm(): void {
  emit('save', {
    title: form.title,
    description: form.description || undefined,
    type: form.type,
    unit: form.unit || undefined,
    targetValue: form.targetValue,
    icon: form.icon
  })
}
</script>
