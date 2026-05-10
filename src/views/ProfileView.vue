<template>
  <section class="space-y-4">
    <article class="rounded-4xl bg-white p-5 shadow-card">
      <h2 class="font-display text-3xl text-ink">Profil</h2>
      <p class="mt-1 text-sm text-ink/60">Configuration de votre challenge et sauvegarde.</p>

      <div class="mt-4 grid gap-3 text-sm text-ink/70">
        <p>Email: {{ auth.user?.email ?? 'Non connecté' }}</p>
        <p>Timezone: {{ store.settings?.timezone }}</p>
        <p>Supabase: {{ hasSupabaseConfig ? 'configuré' : 'non configuré' }}</p>
      </div>

      <div class="mt-5 rounded-3xl border border-blush-100 bg-blush-50/40 p-4">
        <p class="text-xs font-semibold uppercase tracking-wide text-ink/55">Date de début du challenge</p>
        <div class="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            v-model="startDateInput"
            type="date"
            class="w-full rounded-2xl border-blush-200 text-sm focus:border-blush-300 focus:ring-blush-200"
          />
          <PrimaryButton :disabled="!startDateInput" @click="onSaveStartDate">Enregistrer</PrimaryButton>
        </div>
        <p class="mt-2 text-xs text-ink/50">Le jour affiché (ex: jour 24/75) est recalculé depuis cette date.</p>
        <p v-if="startDateMessage" class="mt-2 text-xs text-blush-500">{{ startDateMessage }}</p>
      </div>

      <div class="mt-5 flex flex-wrap gap-2">
        <PrimaryButton @click="onExport">Exporter mes données</PrimaryButton>
        <PrimaryButton variant="ghost" @click="onSignOut">Se déconnecter</PrimaryButton>
        <RouterLink
          to="/weekly"
          class="inline-flex items-center justify-center rounded-3xl border border-blush-200 px-4 py-3 text-sm font-semibold text-ink"
        >
          Objectifs hebdo
        </RouterLink>
      </div>

      <p v-if="lastExportedAt" class="mt-3 text-xs text-ink/50">Dernier export: {{ lastExportedAt }}</p>
    </article>

    <article class="rounded-4xl bg-white p-5 shadow-card">
      <h3 class="text-sm font-semibold text-ink">Backup automatique quotidien</h3>
      <p class="mt-2 text-sm text-ink/70">{{ backupArchitectureNote }}</p>
      <p class="mt-2 text-xs text-ink/50">
        Option front disponible: appel de <code>scheduleDailyBackup()</code>, actif seulement si l'app reste ouverte.
      </p>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import PrimaryButton from '@/components/PrimaryButton.vue'
import { backupArchitectureNote } from '@/services/backupService'
import { useAuthStore } from '@/stores/auth'
import { useChallengeStore } from '@/stores/challenge'
import { hasSupabaseConfig } from '@/lib/supabase'

const auth = useAuthStore()
const store = useChallengeStore()
const lastExportedAt = ref('')
const startDateInput = ref('')
const startDateMessage = ref('')

watch(
  () => store.challenge?.startDate,
  (value) => {
    if (value) startDateInput.value = value
  },
  { immediate: true }
)

async function onSaveStartDate(): Promise<void> {
  if (!startDateInput.value) return
  await store.setStartDate(startDateInput.value)
  startDateMessage.value = `Date enregistrée: ${startDateInput.value}`
}

function onExport(): void {
  const result = store.exportData()
  if (!result) return
  lastExportedAt.value = new Date().toLocaleString('fr-FR')
}

async function onSignOut(): Promise<void> {
  await auth.signOut()
}
</script>
