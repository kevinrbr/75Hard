<template>
  <div class="mx-auto min-h-screen max-w-2xl px-4 pb-28 pt-4 text-ink sm:px-6">
    <header class="mb-4 flex items-center justify-between rounded-4xl bg-white/70 px-4 py-3 shadow-soft backdrop-blur">
      <div>
        <p class="text-xs uppercase tracking-wider text-ink/50">75 Hard Challenge</p>
        <h1 class="font-display text-2xl">Mind & Body</h1>
      </div>
      <RouterLink
        v-if="auth.user"
        to="/tasks"
        class="rounded-2xl bg-blush-400 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-blush-500"
      >
        Tâches du jour
      </RouterLink>
    </header>

    <main>
      <article v-if="auth.error" class="mb-4 rounded-3xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
        {{ auth.error }}
      </article>
      <article
        v-if="store.loadError && auth.user"
        class="mb-4 rounded-3xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700"
      >
        {{ store.loadError }}
      </article>

      <AuthGate v-if="!auth.isLoading && !auth.user" />

      <Transition name="fade-slide" mode="out-in">
        <RouterView v-if="!store.isLoading && auth.user" />
      </Transition>

      <div v-if="auth.isLoading || (auth.user && store.isLoading)" class="grid min-h-[45vh] place-items-center">
        <div class="text-center">
          <div class="mx-auto mb-3 size-10 animate-spin rounded-full border-4 border-blush-200 border-t-blush-400" />
          <p class="text-sm text-ink/60">Chargement...</p>
        </div>
      </div>
    </main>

    <BottomNavigation v-if="auth.user" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import AuthGate from '@/components/AuthGate.vue'
import BottomNavigation from '@/components/BottomNavigation.vue'
import { scheduleDailyBackup } from '@/services/backupService'
import { useAuthStore } from '@/stores/auth'
import { useChallengeStore } from '@/stores/challenge'

const auth = useAuthStore()
const store = useChallengeStore()
let cleanupBackupScheduler: (() => void) | null = null

watch(
  () => auth.user?.id,
  async (userId) => {
    cleanupBackupScheduler?.()
    cleanupBackupScheduler = null

    if (!userId) {
      return
    }

    await store.init()

    if (!store.loadError) {
      store.ensureChallengeHistory()
    }

    if (store.settings?.backupEnabled) {
      cleanupBackupScheduler = scheduleDailyBackup(() => {
        store.exportData()
      })
    }
  },
  { immediate: false }
)

onMounted(async () => {
  await auth.init()

  if (auth.user) {
    await store.init()
    if (!store.loadError) {
      store.ensureChallengeHistory()
    }

    if (store.settings?.backupEnabled) {
      cleanupBackupScheduler = scheduleDailyBackup(() => {
        store.exportData()
      })
    }
  }
})

onBeforeUnmount(() => {
  cleanupBackupScheduler?.()
  auth.destroy()
})
</script>
