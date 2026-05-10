import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { hasSupabaseConfig, supabase } from '@/lib/supabase';
export const useAuthStore = defineStore('auth', () => {
    const isLoading = ref(true);
    const session = ref(null);
    const error = ref(null);
    const magicLinkSentTo = ref('');
    const unsubscribe = ref(null);
    const user = computed(() => session.value?.user ?? null);
    async function init() {
        isLoading.value = true;
        if (!hasSupabaseConfig || !supabase) {
            error.value = 'Supabase non configuré. Renseigne VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY.';
            isLoading.value = false;
            return;
        }
        const { data, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) {
            error.value = 'Erreur de session Supabase: ' + sessionError.message;
        }
        session.value = data.session;
        const listener = supabase.auth.onAuthStateChange((_event, nextSession) => {
            session.value = nextSession;
        });
        unsubscribe.value = () => {
            listener.data.subscription.unsubscribe();
        };
        isLoading.value = false;
    }
    async function sendMagicLink(email) {
        if (!supabase) {
            error.value = 'Supabase non initialisé.';
            return;
        }
        const { error: signInError } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: window.location.origin
            }
        });
        if (signInError) {
            error.value = 'Envoi du magic link impossible: ' + signInError.message;
            return;
        }
        error.value = null;
        magicLinkSentTo.value = email;
    }
    async function signOut() {
        if (!supabase)
            return;
        const { error: signOutError } = await supabase.auth.signOut();
        if (signOutError) {
            error.value = 'Déconnexion impossible: ' + signOutError.message;
            return;
        }
        magicLinkSentTo.value = '';
    }
    function destroy() {
        unsubscribe.value?.();
        unsubscribe.value = null;
    }
    return {
        isLoading,
        session,
        user,
        error,
        magicLinkSentTo,
        init,
        sendMagicLink,
        signOut,
        destroy
    };
});
