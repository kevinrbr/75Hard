import TaskCard from '@/components/TaskCard.vue';
import { useChallengeStore } from '@/stores/challenge';
const store = useChallengeStore();
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "rounded-4xl bg-white p-5 shadow-card" },
});
/** @type {__VLS_StyleScopedClasses['rounded-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-5']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-start justify-between gap-3" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "font-display text-3xl text-ink" },
});
/** @type {__VLS_StyleScopedClasses['font-display']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "text-sm text-ink/60" },
});
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink/60']} */ ;
(__VLS_ctx.store.today);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "rounded-full bg-blush-50 px-3 py-1 text-xs font-semibold text-blush-500" },
});
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blush-50']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blush-500']} */ ;
(__VLS_ctx.store.dailyCompletionCount);
(__VLS_ctx.store.dailyGoals.length);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-4 h-2 overflow-hidden rounded-full bg-blush-100" },
});
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['h-2']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blush-100']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div)({
    ...{ class: "h-full rounded-full bg-blush-400 transition-all duration-500" },
    ...{ style: ({ width: `${__VLS_ctx.store.dailyProgress}%` }) },
});
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blush-400']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-500']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "space-y-3" },
});
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
for (const [goal] of __VLS_vFor((__VLS_ctx.store.dailyGoals))) {
    const __VLS_0 = TaskCard;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        ...{ 'onToggle': {} },
        key: (goal.id),
        title: (goal.title),
        icon: (goal.icon),
        completed: (__VLS_ctx.store.isGoalCompleted(goal.id, 'daily')),
        targetLabel: (goal.targetValue ? `${goal.targetValue} ${goal.unit ?? ''}` : undefined),
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onToggle': {} },
        key: (goal.id),
        title: (goal.title),
        icon: (goal.icon),
        completed: (__VLS_ctx.store.isGoalCompleted(goal.id, 'daily')),
        targetLabel: (goal.targetValue ? `${goal.targetValue} ${goal.unit ?? ''}` : undefined),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_5;
    const __VLS_6 = ({ toggle: {} },
        { onToggle: (...[$event]) => {
                __VLS_ctx.store.toggleDailyTask(goal.id);
                // @ts-ignore
                [store, store, store, store, store, store, store,];
            } });
    var __VLS_3;
    var __VLS_4;
    // @ts-ignore
    [];
}
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.Transition | typeof __VLS_components.Transition} */
Transition;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    name: "fade-slide",
}));
const __VLS_9 = __VLS_8({
    name: "fade-slide",
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
if (__VLS_ctx.store.dailyProgress === 100 && __VLS_ctx.store.dailyGoals.length > 0) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
        ...{ class: "rounded-4xl bg-gradient-to-r from-blush-100 to-white p-5 shadow-card" },
    });
    /** @type {__VLS_StyleScopedClasses['rounded-4xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-gradient-to-r']} */ ;
    /** @type {__VLS_StyleScopedClasses['from-blush-100']} */ ;
    /** @type {__VLS_StyleScopedClasses['to-white']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['shadow-card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-xs uppercase tracking-wider text-ink/50" },
    });
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
    /** @type {__VLS_StyleScopedClasses['tracking-wider']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink/50']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
        ...{ class: "mt-1 font-display text-2xl text-ink" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-display']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mt-1 text-sm text-ink/60" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink/60']} */ ;
}
// @ts-ignore
[store, store,];
var __VLS_10;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
