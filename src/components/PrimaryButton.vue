<template>
  <button
    :type="type"
    :disabled="disabled"
    class="inline-flex items-center justify-center rounded-3xl px-5 py-3 text-sm font-semibold transition-all"
    :class="[
      variant === 'solid'
        ? 'bg-blush-400 text-white shadow-soft hover:bg-blush-500 disabled:bg-blush-200'
        : 'bg-white text-ink border border-blush-200 hover:border-blush-300',
      disabled ? 'cursor-not-allowed opacity-70' : 'active:scale-[0.98]'
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'button' | 'submit'
    variant?: 'solid' | 'ghost'
    disabled?: boolean
  }>(),
  {
    type: 'button',
    variant: 'solid',
    disabled: false
  }
)
</script>
