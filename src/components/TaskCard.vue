<template>
  <article
    class="rounded-4xl border border-blush-100 bg-white p-4 shadow-card transition"
    :class="completed ? 'border-blush-300' : ''"
  >
    <div class="flex items-center gap-3">
      <button
        class="grid size-8 place-items-center rounded-full border-2 transition"
        :class="completed ? 'border-blush-400 bg-blush-400 text-white animate-pop' : 'border-blush-200 bg-white'"
        @click="$emit('toggle')"
      >
        <svg v-if="completed" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <div class="min-w-0 flex-1">
        <p class="text-sm font-semibold text-ink" :class="completed ? 'line-through text-ink/50' : ''">
          {{ icon }} {{ title }}
        </p>
        <p v-if="targetLabel" class="text-xs text-ink/60">{{ targetLabel }}</p>
      </div>

      <span
        class="rounded-full px-2 py-1 text-xs font-medium"
        :class="completed ? 'bg-emerald-50 text-emerald-600' : 'bg-blush-50 text-blush-500'"
      >
        {{ completed ? 'Validé' : 'À faire' }}
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  icon: string
  completed: boolean
  targetLabel?: string
}>()

defineEmits<{
  toggle: []
}>()
</script>
