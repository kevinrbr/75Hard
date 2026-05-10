import { computed, ref } from 'vue';
import AddGoalModal from '@/components/AddGoalModal.vue';
import GoalCard from '@/components/GoalCard.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import { useChallengeStore } from '@/stores/challenge';
const store = useChallengeStore();
const tabs = [
    { label: 'Tous', value: 'all' },
    { label: 'Journaliers', value: 'daily' },
    { label: 'Hebdomadaires', value: 'weekly' }
];
const selected = ref('all');
const isModalOpen = ref(false);
const modalMode = ref('create');
const editingGoal = ref(null);
const filteredGoals = computed(() => {
    if (selected.value === 'all')
        return store.goals;
    return store.goals.filter((goal) => goal.type === selected.value);
});
function openCreate() {
    modalMode.value = 'create';
    editingGoal.value = null;
    isModalOpen.value = true;
}
function openEdit(goalId) {
    modalMode.value = 'edit';
    editingGoal.value = store.goals.find((goal) => goal.id === goalId) ?? null;
    isModalOpen.value = true;
}
async function saveGoal(payload) {
    if (modalMode.value === 'create') {
        await store.addGoal(payload);
    }
    else if (editingGoal.value) {
        await store.updateGoal(editingGoal.value.id, payload);
    }
    closeModal();
}
async function removeGoal(goalId) {
    await store.deleteGoal(goalId);
}
async function toggleStatus(goalId) {
    const goal = store.goals.find((entry) => entry.id === goalId);
    if (!goal)
        return;
    await store.updateGoal(goalId, { status: goal.status === 'active' ? 'inactive' : 'active' });
}
function closeModal() {
    isModalOpen.value = false;
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center justify-between" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
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
const __VLS_0 = PrimaryButton || PrimaryButton;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ click: {} },
    { onClick: (__VLS_ctx.openCreate) });
const { default: __VLS_7 } = __VLS_3.slots;
// @ts-ignore
[openCreate,];
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex gap-2 rounded-3xl bg-white p-1 shadow-soft" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-soft']} */ ;
for (const [item] of __VLS_vFor((__VLS_ctx.tabs))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.selected = item.value;
                // @ts-ignore
                [tabs, selected,];
            } },
        key: (item.value),
        ...{ class: "flex-1 rounded-2xl px-3 py-2 text-xs font-semibold transition" },
        ...{ class: (__VLS_ctx.selected === item.value ? 'bg-blush-100 text-blush-500' : 'text-ink/60') },
    });
    /** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition']} */ ;
    (item.label);
    // @ts-ignore
    [selected,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "space-y-3" },
});
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
for (const [goal] of __VLS_vFor((__VLS_ctx.filteredGoals))) {
    const __VLS_8 = GoalCard;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
        ...{ 'onEdit': {} },
        ...{ 'onDelete': {} },
        ...{ 'onToggle': {} },
        key: (goal.id),
        goal: (goal),
        completionRate: (__VLS_ctx.store.completionRateForGoal(goal.id)),
    }));
    const __VLS_10 = __VLS_9({
        ...{ 'onEdit': {} },
        ...{ 'onDelete': {} },
        ...{ 'onToggle': {} },
        key: (goal.id),
        goal: (goal),
        completionRate: (__VLS_ctx.store.completionRateForGoal(goal.id)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    let __VLS_13;
    const __VLS_14 = ({ edit: {} },
        { onEdit: (__VLS_ctx.openEdit) });
    const __VLS_15 = ({ delete: {} },
        { onDelete: (__VLS_ctx.removeGoal) });
    const __VLS_16 = ({ toggle: {} },
        { onToggle: (__VLS_ctx.toggleStatus) });
    var __VLS_11;
    var __VLS_12;
    // @ts-ignore
    [filteredGoals, store, openEdit, removeGoal, toggleStatus,];
}
const __VLS_17 = AddGoalModal;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    ...{ 'onClose': {} },
    ...{ 'onSave': {} },
    open: (__VLS_ctx.isModalOpen),
    mode: (__VLS_ctx.modalMode),
    initialGoal: (__VLS_ctx.editingGoal),
}));
const __VLS_19 = __VLS_18({
    ...{ 'onClose': {} },
    ...{ 'onSave': {} },
    open: (__VLS_ctx.isModalOpen),
    mode: (__VLS_ctx.modalMode),
    initialGoal: (__VLS_ctx.editingGoal),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
let __VLS_22;
const __VLS_23 = ({ close: {} },
    { onClose: (__VLS_ctx.closeModal) });
const __VLS_24 = ({ save: {} },
    { onSave: (__VLS_ctx.saveGoal) });
var __VLS_20;
var __VLS_21;
// @ts-ignore
[isModalOpen, modalMode, editingGoal, closeModal, saveGoal,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
