import { RouterLink, useRoute } from 'vue-router';
import { h } from 'vue';
const route = useRoute();
const iconClass = 'size-5';
const HomeIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.7', class: iconClass }, [h('path', { d: 'M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5.5v-6h-5v6H4a1 1 0 0 1-1-1V10.5Z' })]);
const ChartIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.7', class: iconClass }, [
    h('path', { d: 'M4 20V10m8 10V4m8 16v-7', 'stroke-linecap': 'round' }),
    h('path', { d: 'M2 20h20', 'stroke-linecap': 'round' })
]);
const AddIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.9', class: iconClass }, [h('path', { d: 'M12 5v14M5 12h14', 'stroke-linecap': 'round' })]);
const GoalIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.7', class: iconClass }, [
    h('circle', { cx: '12', cy: '12', r: '8' }),
    h('circle', { cx: '12', cy: '12', r: '3' })
]);
const UserIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.7', class: iconClass }, [
    h('circle', { cx: '12', cy: '8', r: '4' }),
    h('path', { d: 'M4 20c1.5-3.2 4.1-4.8 8-4.8s6.5 1.6 8 4.8', 'stroke-linecap': 'round' })
]);
const items = [
    { label: 'Accueil', path: '/', icon: HomeIcon },
    { label: 'Progression', path: '/progress', icon: ChartIcon },
    { label: 'Ajouter', path: '/add', icon: AddIcon },
    { label: 'Objectifs', path: '/goals', icon: GoalIcon },
    { label: 'Profil', path: '/profile', icon: UserIcon }
];
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({
    ...{ class: "fixed inset-x-0 bottom-0 z-40 border-t border-blush-100 bg-white/90 px-4 pb-4 pt-2 backdrop-blur" },
});
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-x-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-40']} */ ;
/** @type {__VLS_StyleScopedClasses['border-t']} */ ;
/** @type {__VLS_StyleScopedClasses['border-blush-100']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white/90']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mx-auto grid max-w-md grid-cols-5 gap-2" },
});
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-md']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-5']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
for (const [item] of __VLS_vFor((__VLS_ctx.items))) {
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        key: (item.path),
        to: (item.path),
        ...{ class: "grid place-items-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-medium transition" },
        ...{ class: (__VLS_ctx.route.path === item.path ? 'bg-blush-100 text-blush-500' : 'text-ink/50 hover:text-ink') },
    }));
    const __VLS_2 = __VLS_1({
        key: (item.path),
        to: (item.path),
        ...{ class: "grid place-items-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-medium transition" },
        ...{ class: (__VLS_ctx.route.path === item.path ? 'bg-blush-100 text-blush-500' : 'text-ink/50 hover:text-ink') },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    /** @type {__VLS_StyleScopedClasses['grid']} */ ;
    /** @type {__VLS_StyleScopedClasses['place-items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-[11px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition']} */ ;
    const { default: __VLS_5 } = __VLS_3.slots;
    const __VLS_6 = (item.icon);
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        ...{ class: "size-5" },
    }));
    const __VLS_8 = __VLS_7({
        ...{ class: "size-5" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    /** @type {__VLS_StyleScopedClasses['size-5']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (item.label);
    // @ts-ignore
    [items, route,];
    var __VLS_3;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
