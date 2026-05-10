const __VLS_props = defineProps();
const __VLS_emit = defineEmits();
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
    ...{ class: "rounded-4xl border border-blush-100 bg-white p-4 shadow-card transition" },
    ...{ class: (__VLS_ctx.completed ? 'border-blush-300' : '') },
});
/** @type {__VLS_StyleScopedClasses['rounded-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-blush-100']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-card']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center gap-3" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('toggle');
            // @ts-ignore
            [completed, $emit,];
        } },
    ...{ class: "grid size-8 place-items-center rounded-full border-2 transition" },
    ...{ class: (__VLS_ctx.completed ? 'border-blush-400 bg-blush-400 text-white animate-pop' : 'border-blush-200 bg-white') },
});
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['size-8']} */ ;
/** @type {__VLS_StyleScopedClasses['place-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border-2']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
if (__VLS_ctx.completed) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
        ...{ class: "size-4" },
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        'stroke-width': "2",
    });
    /** @type {__VLS_StyleScopedClasses['size-4']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.path)({
        d: "M5 13l4 4L19 7",
        'stroke-linecap': "round",
        'stroke-linejoin': "round",
    });
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "min-w-0 flex-1" },
});
/** @type {__VLS_StyleScopedClasses['min-w-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "text-sm font-semibold text-ink" },
    ...{ class: (__VLS_ctx.completed ? 'line-through text-ink/50' : '') },
});
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink']} */ ;
(__VLS_ctx.icon);
(__VLS_ctx.title);
if (__VLS_ctx.targetLabel) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-xs text-ink/60" },
    });
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink/60']} */ ;
    (__VLS_ctx.targetLabel);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "rounded-full px-2 py-1 text-xs font-medium" },
    ...{ class: (__VLS_ctx.completed ? 'bg-emerald-50 text-emerald-600' : 'bg-blush-50 text-blush-500') },
});
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
(__VLS_ctx.completed ? 'Validé' : 'À faire');
// @ts-ignore
[completed, completed, completed, completed, completed, icon, title, targetLabel, targetLabel,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
