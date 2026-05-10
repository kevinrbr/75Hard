const __VLS_props = defineProps();
function statusClass(status) {
    if (status === 'complete')
        return 'bg-blush-400 text-white';
    if (status === 'partial')
        return 'bg-blush-200 text-ink';
    if (status === 'future')
        return 'bg-blush-50 text-ink/40';
    return 'bg-zinc-200 text-zinc-500';
}
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "rounded-4xl bg-white p-4 shadow-card" },
});
/** @type {__VLS_StyleScopedClasses['rounded-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-ink/60" },
});
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink/60']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "font-semibold text-ink" },
});
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center gap-2" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "inline-flex items-center gap-1" },
});
/** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i)({
    ...{ class: "size-2 rounded-full bg-blush-400" },
});
/** @type {__VLS_StyleScopedClasses['size-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blush-400']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "inline-flex items-center gap-1" },
});
/** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i)({
    ...{ class: "size-2 rounded-full bg-blush-200" },
});
/** @type {__VLS_StyleScopedClasses['size-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blush-200']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "inline-flex items-center gap-1" },
});
/** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.i)({
    ...{ class: "size-2 rounded-full bg-zinc-200" },
});
/** @type {__VLS_StyleScopedClasses['size-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-zinc-200']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "grid grid-cols-7 gap-2" },
});
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-7']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
for (const [day] of __VLS_vFor((__VLS_ctx.days))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        key: (day.date),
        ...{ class: "grid aspect-square place-items-center rounded-2xl text-[10px] font-semibold" },
        ...{ class: (__VLS_ctx.statusClass(day.status)) },
        title: (`${day.date} - ${day.status}`),
    });
    /** @type {__VLS_StyleScopedClasses['grid']} */ ;
    /** @type {__VLS_StyleScopedClasses['aspect-square']} */ ;
    /** @type {__VLS_StyleScopedClasses['place-items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-[10px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
    (day.dayNumber);
    // @ts-ignore
    [days, statusClass,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
