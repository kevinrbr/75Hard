import { ref } from 'vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();
const email = ref('');
const isSending = ref(false);
async function onSubmit() {
    if (!email.value)
        return;
    isSending.value = true;
    await auth.sendMagicLink(email.value.trim());
    isSending.value = false;
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "mx-auto max-w-md space-y-4 pt-6" },
});
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-md']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
    ...{ class: "rounded-4xl bg-white p-6 shadow-card" },
});
/** @type {__VLS_StyleScopedClasses['rounded-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "text-xs uppercase tracking-wide text-ink/50" },
});
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-wide']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink/50']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "mt-1 font-display text-3xl text-ink" },
});
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['font-display']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mt-2 text-sm text-ink/65" },
});
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink/65']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ onSubmit: (__VLS_ctx.onSubmit) },
    ...{ class: "mt-5 space-y-3" },
});
/** @type {__VLS_StyleScopedClasses['mt-5']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "block" },
});
/** @type {__VLS_StyleScopedClasses['block']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "mb-1 block text-xs font-semibold uppercase tracking-wide text-ink/55" },
});
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-wide']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink/55']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    type: "email",
    required: true,
    placeholder: "vous@email.com",
    ...{ class: "w-full rounded-2xl border-blush-200 text-sm focus:border-blush-300 focus:ring-blush-200" },
});
(__VLS_ctx.email);
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['border-blush-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:border-blush-300']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-blush-200']} */ ;
const __VLS_0 = PrimaryButton || PrimaryButton;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    type: "submit",
    ...{ class: "w-full" },
    disabled: (__VLS_ctx.isSending),
}));
const __VLS_2 = __VLS_1({
    type: "submit",
    ...{ class: "w-full" },
    disabled: (__VLS_ctx.isSending),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
(__VLS_ctx.isSending ? 'Envoi en cours...' : 'Envoyer le magic link');
// @ts-ignore
[onSubmit, email, isSending, isSending,];
var __VLS_3;
if (__VLS_ctx.auth.magicLinkSentTo) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mt-3 text-xs text-emerald-600" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-emerald-600']} */ ;
    (__VLS_ctx.auth.magicLinkSentTo);
}
if (__VLS_ctx.auth.error) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mt-3 text-xs text-rose-600" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-rose-600']} */ ;
    (__VLS_ctx.auth.error);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mt-4 text-[11px] text-ink/45" },
});
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[11px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink/45']} */ ;
// @ts-ignore
[auth, auth, auth, auth,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
