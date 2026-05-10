<template>
  <div class="relative grid place-items-center" :style="{ width: `${size}px`, height: `${size}px` }">
    <svg :width="size" :height="size" class="-rotate-90">
      <circle
        :r="radius"
        :cx="size / 2"
        :cy="size / 2"
        class="stroke-blush-100"
        :stroke-width="stroke"
        fill="none"
      />
      <circle
        :r="radius"
        :cx="size / 2"
        :cy="size / 2"
        class="stroke-blush-400 transition-all duration-500"
        :stroke-width="stroke"
        fill="none"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
      />
    </svg>
    <div class="absolute text-center">
      <p class="font-display text-2xl text-ink">{{ progress }}%</p>
      <p class="text-xs text-ink/60"><slot /></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    progress: number
    size?: number
    stroke?: number
  }>(),
  {
    size: 150,
    stroke: 10
  }
)

const radius = computed(() => (props.size - props.stroke) / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)
const dashOffset = computed(() => circumference.value - (props.progress / 100) * circumference.value)
</script>
