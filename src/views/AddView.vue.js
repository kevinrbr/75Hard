import { ref } from 'vue';
import AddGoalModal from '@/components/AddGoalModal.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import { useChallengeStore } from '@/stores/challenge';
const store = useChallengeStore();
const isModalOpen = ref(false);
async function saveGoal(payload) {
    await store.addGoal(payload);
    isModalOpen.value = false;
}
async function quickAdd(type) {
    await store.addGoal({
        title: type === 'daily' ? 'Nouvelle routine daily' : 'Nouvelle mission hebdo',
        type,
        icon: type === 'daily' ? '🌸' : '🗓️'
    });
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
const __VLS_0 = PrimaryButton || PrimaryButton;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    ...{ class: "mt-4" },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    ...{ class: "mt-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.isModalOpen = true;
            // @ts-ignore
            [isModalOpen,];
        } });
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
const { default: __VLS_7 } = __VLS_3.slots;
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mt-3 grid gap-2 sm:grid-cols-2" },
});
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:grid-cols-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.quickAdd('daily');
            // @ts-ignore
            [quickAdd,];
        } },
    ...{ class: "rounded-2xl bg-blush-50 px-3 py-3 text-left text-sm font-medium text-ink" },
});
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blush-50']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.quickAdd('weekly');
            // @ts-ignore
            [quickAdd,];
        } },
    ...{ class: "rounded-2xl bg-blush-50 px-3 py-3 text-left text-sm font-medium text-ink" },
});
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blush-50']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-ink']} */ ;
const __VLS_8 = AddGoalModal;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    ...{ 'onClose': {} },
    ...{ 'onSave': {} },
    open: (__VLS_ctx.isModalOpen),
}));
const __VLS_10 = __VLS_9({
    ...{ 'onClose': {} },
    ...{ 'onSave': {} },
    open: (__VLS_ctx.isModalOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_13;
const __VLS_14 = ({ close: {} },
    { onClose: (...[$event]) => {
            __VLS_ctx.isModalOpen = false;
            // @ts-ignore
            [isModalOpen, isModalOpen,];
        } });
const __VLS_15 = ({ save: {} },
    { onSave: (__VLS_ctx.saveGoal) });
var __VLS_11;
var __VLS_12;
// @ts-ignore
[saveGoal,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
