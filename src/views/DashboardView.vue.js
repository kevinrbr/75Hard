import { RouterLink } from 'vue-router';
import ProgressCircle from '@/components/ProgressCircle.vue';
import StatsCard from '@/components/StatsCard.vue';
import { useChallengeStore } from '@/stores/challenge';
const store = useChallengeStore();
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (__VLS_ctx.store.challenge) {
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
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-xs uppercase tracking-wider text-ink/50" },
    });
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
    /** @type {__VLS_StyleScopedClasses['tracking-wider']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink/50']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "mt-4 flex items-center justify-between gap-3" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
        ...{ class: "font-display text-3xl text-ink" },
    });
    /** @type {__VLS_StyleScopedClasses['font-display']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink']} */ ;
    (__VLS_ctx.store.activeDay);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mt-1 text-sm text-ink/60" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink/60']} */ ;
    (__VLS_ctx.store.globalProgress);
    const __VLS_0 = ProgressCircle || ProgressCircle;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        progress: (__VLS_ctx.store.globalProgress),
        size: (120),
    }));
    const __VLS_2 = __VLS_1({
        progress: (__VLS_ctx.store.globalProgress),
        size: (120),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_5 } = __VLS_3.slots;
    // @ts-ignore
    [store, store, store, store,];
    var __VLS_3;
    __VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
        ...{ class: "rounded-4xl bg-white p-5 shadow-card" },
    });
    /** @type {__VLS_StyleScopedClasses['rounded-4xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['shadow-card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-xs uppercase tracking-wider text-ink/50" },
    });
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
    /** @type {__VLS_StyleScopedClasses['tracking-wider']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink/50']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "mt-3 flex items-center gap-3" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "grid size-12 place-items-center rounded-2xl bg-blush-100 text-xl" },
    });
    /** @type {__VLS_StyleScopedClasses['grid']} */ ;
    /** @type {__VLS_StyleScopedClasses['size-12']} */ ;
    /** @type {__VLS_StyleScopedClasses['place-items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-blush-100']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
    (__VLS_ctx.store.mainGoal()?.icon ?? '🎯');
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
        ...{ class: "text-sm font-semibold text-ink" },
    });
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink']} */ ;
    (__VLS_ctx.store.mainGoal()?.title ?? 'Tout est complété 🎉');
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-xs text-ink/60" },
    });
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink/60']} */ ;
    let __VLS_6;
    /** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        to: "/tasks",
        ...{ class: "mt-4 inline-flex rounded-3xl bg-blush-400 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-blush-500" },
    }));
    const __VLS_8 = __VLS_7({
        to: "/tasks",
        ...{ class: "mt-4 inline-flex rounded-3xl bg-blush-400 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-blush-500" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    /** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-3xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-blush-400']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
    /** @type {__VLS_StyleScopedClasses['shadow-soft']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:bg-blush-500']} */ ;
    const { default: __VLS_11 } = __VLS_9.slots;
    // @ts-ignore
    [store, store,];
    var __VLS_9;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "grid grid-cols-2 gap-3" },
    });
    /** @type {__VLS_StyleScopedClasses['grid']} */ ;
    /** @type {__VLS_StyleScopedClasses['grid-cols-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
    const __VLS_12 = StatsCard;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
        title: "Daily",
        value: (`${__VLS_ctx.store.dailyProgress}%`),
        subtitle: (`${__VLS_ctx.store.dailyCompletionCount}/${__VLS_ctx.store.dailyGoals.length} tâches`),
    }));
    const __VLS_14 = __VLS_13({
        title: "Daily",
        value: (`${__VLS_ctx.store.dailyProgress}%`),
        subtitle: (`${__VLS_ctx.store.dailyCompletionCount}/${__VLS_ctx.store.dailyGoals.length} tâches`),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_17 = StatsCard;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
        title: "Weekly",
        value: (`${__VLS_ctx.store.weeklyProgress}%`),
        subtitle: (`${__VLS_ctx.store.weeklyCompletionCount}/${__VLS_ctx.store.weeklyGoals.length} objectifs`),
    }));
    const __VLS_19 = __VLS_18({
        title: "Weekly",
        value: (`${__VLS_ctx.store.weeklyProgress}%`),
        subtitle: (`${__VLS_ctx.store.weeklyCompletionCount}/${__VLS_ctx.store.weeklyGoals.length} objectifs`),
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
}
// @ts-ignore
[store, store, store, store, store, store,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
