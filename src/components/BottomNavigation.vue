<template>
  <nav class="fixed inset-x-0 bottom-0 z-40 border-t border-blush-100 bg-white/90 px-4 pb-4 pt-2 backdrop-blur">
    <div class="mx-auto grid max-w-md grid-cols-5 gap-2">
      <RouterLink
        v-for="item in items"
        :key="item.path"
        :to="item.path"
        class="grid place-items-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-medium transition"
        :class="route.path === item.path ? 'bg-blush-100 text-blush-500' : 'text-ink/50 hover:text-ink'"
      >
        <component :is="item.icon" class="size-5" />
        <span>{{ item.label }}</span>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { h } from 'vue'

const route = useRoute()

const iconClass = 'size-5'

const HomeIcon = () =>
  h(
    'svg',
    { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.7', class: iconClass },
    [h('path', { d: 'M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5.5v-6h-5v6H4a1 1 0 0 1-1-1V10.5Z' })]
  )

const ChartIcon = () =>
  h(
    'svg',
    { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.7', class: iconClass },
    [
      h('path', { d: 'M4 20V10m8 10V4m8 16v-7', 'stroke-linecap': 'round' }),
      h('path', { d: 'M2 20h20', 'stroke-linecap': 'round' })
    ]
  )

const AddIcon = () =>
  h(
    'svg',
    { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.9', class: iconClass },
    [h('path', { d: 'M12 5v14M5 12h14', 'stroke-linecap': 'round' })]
  )

const GoalIcon = () =>
  h(
    'svg',
    { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.7', class: iconClass },
    [
      h('circle', { cx: '12', cy: '12', r: '8' }),
      h('circle', { cx: '12', cy: '12', r: '3' })
    ]
  )

const UserIcon = () =>
  h(
    'svg',
    { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.7', class: iconClass },
    [
      h('circle', { cx: '12', cy: '8', r: '4' }),
      h('path', { d: 'M4 20c1.5-3.2 4.1-4.8 8-4.8s6.5 1.6 8 4.8', 'stroke-linecap': 'round' })
    ]
  )

const items = [
  { label: 'Accueil', path: '/', icon: HomeIcon },
  { label: 'Progression', path: '/progress', icon: ChartIcon },
  { label: 'Ajouter', path: '/add', icon: AddIcon },
  { label: 'Objectifs', path: '/goals', icon: GoalIcon },
  { label: 'Profil', path: '/profile', icon: UserIcon }
]
</script>
