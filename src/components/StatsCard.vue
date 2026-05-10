<template>
  <article class="rounded-4xl bg-white p-4 shadow-card">
    <p class="text-xs font-medium uppercase tracking-wide text-ink/50">{{ title }}</p>
    <p class="mt-2 font-display text-3xl text-ink">{{ value }}</p>
    <p v-if="subtitle" class="mt-1 text-sm text-ink/60">{{ subtitle }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  subtitle?: string
}>()
</script>
