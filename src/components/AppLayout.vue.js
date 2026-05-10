import { onBeforeUnmount, onMounted, watch } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import AuthGate from '@/components/AuthGate.vue';
import BottomNavigation from '@/components/BottomNavigation.vue';
import { scheduleDailyBackup } from '@/services/backupService';
import { useAuthStore } from '@/stores/auth';
import { useChallengeStore } from '@/stores/challenge';
const auth = useAuthStore();
const store = useChallengeStore();
let cleanupBackupScheduler = null;
watch(() => auth.user?.id, async (userId) => {
    cleanupBackupScheduler?.();
    cleanupBackupScheduler = null;
    if (!userId) {
        return;
    }
    await store.init();
    if (!store.loadError) {
        store.ensureChallengeHistory();
    }
    if (store.settings?.backupEnabled) {
        cleanupBackupScheduler = scheduleDailyBackup(() => {
            store.exportData();
        });
    }
}, { immediate: false });
onMounted(async () => {
    await auth.init();
    if (auth.user) {
        await store.init();
        if (!store.loadError) {
            store.ensureChallengeHistory();
        }
        if (store.settings?.backupEnabled) {
            cleanupBackupScheduler = scheduleDailyBackup(() => {
                store.exportData();
            });
        }
    }
});
onBeforeUnmount(() => {
    cleanupBackupScheduler?.();
    auth.destroy();
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mx-auto min-h-screen max-w-2xl px-4 pb-28 pt-4 text-ink sm:px-6" },
});
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-28']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:px-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({
    ...{ class: "mb-4 flex items-center justify-between rounded-4xl bg-white/70 px-4 py-3 shadow-soft backdrop-blur" },
});
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white/70']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-soft']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "text-xs uppercase tracking-wider text-ink/50" },
});
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-wider']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink/50']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "font-display text-2xl" },
});
/** @type {__VLS_StyleScopedClasses['font-display']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
if (__VLS_ctx.auth.user) {
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        to: "/tasks",
        ...{ class: "rounded-2xl bg-blush-400 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-blush-500" },
    }));
    const __VLS_2 = __VLS_1({
        to: "/tasks",
        ...{ class: "rounded-2xl bg-blush-400 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-blush-500" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    /** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-blush-400']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
    /** @type {__VLS_StyleScopedClasses['shadow-soft']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:bg-blush-500']} */ ;
    const { default: __VLS_5 } = __VLS_3.slots;
    // @ts-ignore
    [auth,];
    var __VLS_3;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({});
if (__VLS_ctx.auth.error) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
        ...{ class: "mb-4 rounded-3xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-3xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-rose-200']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-rose-50']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-rose-700']} */ ;
    (__VLS_ctx.auth.error);
}
if (__VLS_ctx.store.loadError && __VLS_ctx.auth.user) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
        ...{ class: "mb-4 rounded-3xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-3xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-rose-200']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-rose-50']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-rose-700']} */ ;
    (__VLS_ctx.store.loadError);
}
if (!__VLS_ctx.auth.isLoading && !__VLS_ctx.auth.user) {
    const __VLS_6 = AuthGate;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
}
let __VLS_11;
/** @ts-ignore @type { | typeof __VLS_components.Transition | typeof __VLS_components.Transition} */
Transition;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    name: "fade-slide",
    mode: "out-in",
}));
const __VLS_13 = __VLS_12({
    name: "fade-slide",
    mode: "out-in",
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const { default: __VLS_16 } = __VLS_14.slots;
if (!__VLS_ctx.store.isLoading && __VLS_ctx.auth.user) {
    let __VLS_17;
    /** @ts-ignore @type { | typeof __VLS_components.RouterView} */
    RouterView;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({}));
    const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
}
// @ts-ignore
[auth, auth, auth, auth, auth, auth, store, store, store,];
var __VLS_14;
if (__VLS_ctx.auth.isLoading || (__VLS_ctx.auth.user && __VLS_ctx.store.isLoading)) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "grid min-h-[45vh] place-items-center" },
    });
    /** @type {__VLS_StyleScopedClasses['grid']} */ ;
    /** @type {__VLS_StyleScopedClasses['min-h-[45vh]']} */ ;
    /** @type {__VLS_StyleScopedClasses['place-items-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-center" },
    });
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div)({
        ...{ class: "mx-auto mb-3 size-10 animate-spin rounded-full border-4 border-blush-200 border-t-blush-400" },
    });
    /** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['size-10']} */ ;
    /** @type {__VLS_StyleScopedClasses['animate-spin']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-blush-200']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-t-blush-400']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-sm text-ink/60" },
    });
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink/60']} */ ;
}
if (__VLS_ctx.auth.user) {
    const __VLS_22 = BottomNavigation;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({}));
    const __VLS_24 = __VLS_23({}, ...__VLS_functionalComponentArgsRest(__VLS_23));
}
// @ts-ignore
[auth, auth, auth, store,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
