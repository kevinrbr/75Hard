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
    ...{ class: "text-sm text-ink/60" },
});
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink/60']} */ ;
(__VLS_ctx.store.weekStart);
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
    ...{ style: ({ width: `${__VLS_ctx.store.weeklyProgress}%` }) },
});
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blush-400']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-500']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mt-2 text-xs text-ink/60" },
});
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink/60']} */ ;
(__VLS_ctx.store.weeklyCompletionCount);
(__VLS_ctx.store.weeklyGoals.length);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "space-y-3" },
});
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
for (const [goal] of __VLS_vFor((__VLS_ctx.store.weeklyGoals))) {
    const __VLS_0 = TaskCard;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        ...{ 'onToggle': {} },
        key: (goal.id),
        title: (goal.title),
        icon: (goal.icon),
        completed: (__VLS_ctx.store.isGoalCompleted(goal.id, 'weekly')),
        targetLabel: (goal.targetValue ? `${goal.targetValue} ${goal.unit ?? ''}` : undefined),
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onToggle': {} },
        key: (goal.id),
        title: (goal.title),
        icon: (goal.icon),
        completed: (__VLS_ctx.store.isGoalCompleted(goal.id, 'weekly')),
        targetLabel: (goal.targetValue ? `${goal.targetValue} ${goal.unit ?? ''}` : undefined),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_5;
    const __VLS_6 = ({ toggle: {} },
        { onToggle: (...[$event]) => {
                __VLS_ctx.store.toggleWeeklyTask(goal.id);
                // @ts-ignore
                [store, store, store, store, store, store, store,];
            } });
    var __VLS_3;
    var __VLS_4;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
