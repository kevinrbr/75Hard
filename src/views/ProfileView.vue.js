import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import PrimaryButton from '@/components/PrimaryButton.vue';
import { backupArchitectureNote } from '@/services/backupService';
import { useAuthStore } from '@/stores/auth';
import { useChallengeStore } from '@/stores/challenge';
import { hasSupabaseConfig } from '@/lib/supabase';
const auth = useAuthStore();
const store = useChallengeStore();
const lastExportedAt = ref('');
const startDateInput = ref('');
const startDateMessage = ref('');
watch(() => store.challenge?.startDate, (value) => {
    if (value)
        startDateInput.value = value;
}, { immediate: true });
async function onSaveStartDate() {
    if (!startDateInput.value)
        return;
    await store.setStartDate(startDateInput.value);
    startDateMessage.value = `Date enregistrée: ${startDateInput.value}`;
}
function onExport() {
    const result = store.exportData();
    if (!result)
        return;
    lastExportedAt.value = new Date().toLocaleString('fr-FR');
}
async function onSignOut() {
    await auth.signOut();
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "space-y-4" },
});
/** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
    ...{ class: "rounded-4xl bg-white p-5 shadow-card" },
});
/** @type {__VLS_StyleScopedClasses['rounded-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-5']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "font-display text-3xl text-ink" },
});
/** @type {__VLS_StyleScopedClasses['font-display']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mt-1 text-sm text-ink/60" },
});
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink/60']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-4 grid gap-3 text-sm text-ink/70" },
});
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink/70']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.auth.user?.email ?? 'Non connecté');
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.store.settings?.timezone);
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
(__VLS_ctx.hasSupabaseConfig ? 'configuré' : 'non configuré');
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-5 rounded-3xl border border-blush-100 bg-blush-50/40 p-4" },
});
/** @type {__VLS_StyleScopedClasses['mt-5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-blush-100']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blush-50/40']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "text-xs font-semibold uppercase tracking-wide text-ink/55" },
});
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-wide']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink/55']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-3 flex flex-col gap-2 sm:flex-row sm:items-center" },
});
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    type: "date",
    ...{ class: "w-full rounded-2xl border-blush-200 text-sm focus:border-blush-300 focus:ring-blush-200" },
});
(__VLS_ctx.startDateInput);
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['border-blush-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:border-blush-300']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-blush-200']} */ ;
const __VLS_0 = PrimaryButton || PrimaryButton;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    disabled: (!__VLS_ctx.startDateInput),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    disabled: (!__VLS_ctx.startDateInput),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ click: {} },
    { onClick: (__VLS_ctx.onSaveStartDate) });
const { default: __VLS_7 } = __VLS_3.slots;
// @ts-ignore
[auth, store, hasSupabaseConfig, startDateInput, startDateInput, onSaveStartDate,];
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mt-2 text-xs text-ink/50" },
});
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink/50']} */ ;
if (__VLS_ctx.startDateMessage) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mt-2 text-xs text-blush-500" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-blush-500']} */ ;
    (__VLS_ctx.startDateMessage);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-5 flex flex-wrap gap-2" },
});
/** @type {__VLS_StyleScopedClasses['mt-5']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
const __VLS_8 = PrimaryButton || PrimaryButton;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    ...{ 'onClick': {} },
}));
const __VLS_10 = __VLS_9({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_13;
const __VLS_14 = ({ click: {} },
    { onClick: (__VLS_ctx.onExport) });
const { default: __VLS_15 } = __VLS_11.slots;
// @ts-ignore
[startDateMessage, startDateMessage, onExport,];
var __VLS_11;
var __VLS_12;
const __VLS_16 = PrimaryButton || PrimaryButton;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent1(__VLS_16, new __VLS_16({
    ...{ 'onClick': {} },
    variant: "ghost",
}));
const __VLS_18 = __VLS_17({
    ...{ 'onClick': {} },
    variant: "ghost",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
let __VLS_21;
const __VLS_22 = ({ click: {} },
    { onClick: (__VLS_ctx.onSignOut) });
const { default: __VLS_23 } = __VLS_19.slots;
// @ts-ignore
[onSignOut,];
var __VLS_19;
var __VLS_20;
let __VLS_24;
/** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
RouterLink;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
    to: "/weekly",
    ...{ class: "inline-flex items-center justify-center rounded-3xl border border-blush-200 px-4 py-3 text-sm font-semibold text-ink" },
}));
const __VLS_26 = __VLS_25({
    to: "/weekly",
    ...{ class: "inline-flex items-center justify-center rounded-3xl border border-blush-200 px-4 py-3 text-sm font-semibold text-ink" },
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
/** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-blush-200']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink']} */ ;
const { default: __VLS_29 } = __VLS_27.slots;
// @ts-ignore
[];
var __VLS_27;
if (__VLS_ctx.lastExportedAt) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mt-3 text-xs text-ink/50" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink/50']} */ ;
    (__VLS_ctx.lastExportedAt);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
    ...{ class: "rounded-4xl bg-white p-5 shadow-card" },
});
/** @type {__VLS_StyleScopedClasses['rounded-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-5']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
    ...{ class: "text-sm font-semibold text-ink" },
});
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mt-2 text-sm text-ink/70" },
});
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink/70']} */ ;
(__VLS_ctx.backupArchitectureNote);
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mt-2 text-xs text-ink/50" },
});
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink/50']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
// @ts-ignore
[lastExportedAt, lastExportedAt, backupArchitectureNote,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
