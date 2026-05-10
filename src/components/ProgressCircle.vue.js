import { computed } from 'vue';
const props = withDefaults(defineProps(), {
    size: 150,
    stroke: 10
});
const radius = computed(() => (props.size - props.stroke) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
const dashOffset = computed(() => circumference.value - (props.progress / 100) * circumference.value);
const __VLS_defaults = {
    size: 150,
    stroke: 10
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "relative grid place-items-center" },
    ...{ style: ({ width: `${__VLS_ctx.size}px`, height: `${__VLS_ctx.size}px` }) },
});
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['place-items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    width: (__VLS_ctx.size),
    height: (__VLS_ctx.size),
    ...{ class: "-rotate-90" },
});
/** @type {__VLS_StyleScopedClasses['-rotate-90']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.circle)({
    r: (__VLS_ctx.radius),
    cx: (__VLS_ctx.size / 2),
    cy: (__VLS_ctx.size / 2),
    ...{ class: "stroke-blush-100" },
    'stroke-width': (__VLS_ctx.stroke),
    fill: "none",
});
/** @type {__VLS_StyleScopedClasses['stroke-blush-100']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.circle)({
    r: (__VLS_ctx.radius),
    cx: (__VLS_ctx.size / 2),
    cy: (__VLS_ctx.size / 2),
    ...{ class: "stroke-blush-400 transition-all duration-500" },
    'stroke-width': (__VLS_ctx.stroke),
    fill: "none",
    'stroke-linecap': "round",
    'stroke-dasharray': (__VLS_ctx.circumference),
    'stroke-dashoffset': (__VLS_ctx.dashOffset),
});
/** @type {__VLS_StyleScopedClasses['stroke-blush-400']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-500']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "absolute text-center" },
});
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "font-display text-2xl text-ink" },
});
/** @type {__VLS_StyleScopedClasses['font-display']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink']} */ ;
(__VLS_ctx.progress);
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "text-xs text-ink/60" },
});
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink/60']} */ ;
var __VLS_0 = {};
// @ts-ignore
var __VLS_1 = __VLS_0;
// @ts-ignore
[size, size, size, size, size, size, size, size, radius, radius, stroke, stroke, circumference, dashOffset, progress,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
const __VLS_export = {};
export default {};
