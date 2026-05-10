<template>
  <section class="mx-auto max-w-md space-y-4 pt-6">
    <article class="rounded-4xl bg-white p-6 shadow-card">
      <p class="text-xs uppercase tracking-wide text-ink/50">Connexion sécurisée</p>
      <h2 class="mt-1 font-display text-3xl text-ink">Magic Link</h2>
      <p class="mt-2 text-sm text-ink/65">
        Connectez-vous avec votre email. Utilisez le même email pour partager les données.
      </p>

      <form class="mt-5 space-y-3" @submit.prevent="onSubmit">
        <label class="block">
          <span class="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink/55">Email</span>
          <input
            v-model="email"
            type="email"
            required
            placeholder="vous@email.com"
            class="w-full rounded-2xl border-blush-200 text-sm focus:border-blush-300 focus:ring-blush-200"
          />
        </label>

        <PrimaryButton type="submit" class="w-full" :disabled="isSending">
          {{ isSending ? 'Envoi en cours...' : 'Envoyer le magic link' }}
        </PrimaryButton>
      </form>

      <p v-if="auth.magicLinkSentTo" class="mt-3 text-xs text-emerald-600">
        Email envoyé à {{ auth.magicLinkSentTo }}. Ouvrez le lien reçu pour vous connecter.
      </p>
      <p v-if="auth.error" class="mt-3 text-xs text-rose-600">{{ auth.error }}</p>

      <p class="mt-4 text-[11px] text-ink/45">
        Pensez à ajouter votre URL locale et URL Vercel dans Supabase Auth > URL Configuration.
      </p>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const email = ref('')
const isSending = ref(false)

async function onSubmit(): Promise<void> {
  if (!email.value) return
  isSending.value = true
  await auth.sendMagicLink(email.value.trim())
  isSending.value = false
}
</script>
