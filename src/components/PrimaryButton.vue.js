const __VLS_props = withDefaults(defineProps(), {
    type: 'button',
    variant: 'solid',
    disabled: false
});
const __VLS_defaults = {
    type: 'button',
    variant: 'solid',
    disabled: false
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    type: (__VLS_ctx.type),
    disabled: (__VLS_ctx.disabled),
    ...{ class: "inline-flex items-center justify-center rounded-3xl px-5 py-3 text-sm font-semibold transition-all" },
    ...{ class: ([
            __VLS_ctx.variant === 'solid'
                ? 'bg-blush-400 text-white shadow-soft hover:bg-blush-500 disabled:bg-blush-200'
                : 'bg-white text-ink border border-blush-200 hover:border-blush-300',
            __VLS_ctx.disabled ? 'cursor-not-allowed opacity-70' : 'active:scale-[0.98]'
        ]) },
});
/** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['px-5']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
var __VLS_0 = {};
// @ts-ignore
var __VLS_1 = __VLS_0;
// @ts-ignore
[type, disabled, disabled, variant,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
const __VLS_export = {};
export default {};
