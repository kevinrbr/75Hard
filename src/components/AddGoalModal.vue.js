import { reactive, watch } from 'vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
const props = withDefaults(defineProps(), {
    mode: 'create',
    initialGoal: null
});
const emit = defineEmits();
const iconOptions = ['💧', '🏋️', '🚶', '📖', '🥗', '📷', '📝', '🍎', '⚖️', '🧘'];
const form = reactive({
    title: '',
    description: '',
    type: 'daily',
    unit: '',
    targetValue: undefined,
    icon: '💧'
});
watch(() => props.initialGoal, (goal) => {
    if (!goal)
        return;
    form.title = goal.title;
    form.description = goal.description;
    form.type = goal.type;
    form.unit = goal.unit;
    form.targetValue = goal.targetValue;
    form.icon = goal.icon;
}, { immediate: true });
watch(() => props.open, (isOpen) => {
    if (isOpen && props.mode === 'create') {
        form.title = '';
        form.description = '';
        form.type = 'daily';
        form.unit = '';
        form.targetValue = undefined;
        form.icon = '💧';
    }
});
function submitForm() {
    emit('save', {
        title: form.title,
        description: form.description || undefined,
        type: form.type,
        unit: form.unit || undefined,
        targetValue: form.targetValue,
        icon: form.icon
    });
}
const __VLS_defaults = {
    mode: 'create',
    initialGoal: null
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Transition | typeof __VLS_components.Transition} */
Transition;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    name: "fade-slide",
}));
const __VLS_2 = __VLS_1({
    name: "fade-slide",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
if (__VLS_ctx.open) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "fixed inset-0 z-50 grid place-items-end bg-black/20 p-4 sm:place-items-center" },
    });
    /** @type {__VLS_StyleScopedClasses['fixed']} */ ;
    /** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['z-50']} */ ;
    /** @type {__VLS_StyleScopedClasses['grid']} */ ;
    /** @type {__VLS_StyleScopedClasses['place-items-end']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-black/20']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['sm:place-items-center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "w-full max-w-md rounded-4xl bg-white p-5 shadow-card" },
    });
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['max-w-md']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-4xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['shadow-card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "mb-4 flex items-center justify-between" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
        ...{ class: "font-display text-2xl text-ink" },
    });
    /** @type {__VLS_StyleScopedClasses['font-display']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink']} */ ;
    (__VLS_ctx.mode === 'edit' ? 'Modifier' : 'Nouvel objectif');
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.open))
                    return;
                __VLS_ctx.$emit('close');
                // @ts-ignore
                [open, mode, $emit,];
            } },
        ...{ class: "text-ink/40 hover:text-ink" },
    });
    /** @type {__VLS_StyleScopedClasses['text-ink/40']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:text-ink']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({
        ...{ onSubmit: (__VLS_ctx.submitForm) },
        ...{ class: "space-y-3" },
    });
    /** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "block" },
    });
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "mb-1 block text-xs font-medium text-ink/60" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink/60']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        required: true,
        ...{ class: "w-full rounded-2xl border-blush-200 text-sm focus:border-blush-300 focus:ring-blush-200" },
    });
    (__VLS_ctx.form.title);
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-blush-200']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:border-blush-300']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:ring-blush-200']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "block" },
    });
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "mb-1 block text-xs font-medium text-ink/60" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink/60']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.textarea)({
        value: (__VLS_ctx.form.description),
        rows: "2",
        ...{ class: "w-full rounded-2xl border-blush-200 text-sm focus:border-blush-300 focus:ring-blush-200" },
    });
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-blush-200']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:border-blush-300']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:ring-blush-200']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "grid grid-cols-2 gap-3" },
    });
    /** @type {__VLS_StyleScopedClasses['grid']} */ ;
    /** @type {__VLS_StyleScopedClasses['grid-cols-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "block" },
    });
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "mb-1 block text-xs font-medium text-ink/60" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink/60']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.select, __VLS_intrinsics.select)({
        value: (__VLS_ctx.form.type),
        ...{ class: "w-full rounded-2xl border-blush-200 text-sm focus:border-blush-300 focus:ring-blush-200" },
    });
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-blush-200']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:border-blush-300']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:ring-blush-200']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
        value: "daily",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
        value: "weekly",
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "block" },
    });
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "mb-1 block text-xs font-medium text-ink/60" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink/60']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.select, __VLS_intrinsics.select)({
        value: (__VLS_ctx.form.icon),
        ...{ class: "w-full rounded-2xl border-blush-200 text-sm focus:border-blush-300 focus:ring-blush-200" },
    });
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-blush-200']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:border-blush-300']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:ring-blush-200']} */ ;
    for (const [emoji] of __VLS_vFor((__VLS_ctx.iconOptions))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.option, __VLS_intrinsics.option)({
            key: (emoji),
            value: (emoji),
        });
        (emoji);
        // @ts-ignore
        [submitForm, form, form, form, form, iconOptions,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "grid grid-cols-2 gap-3" },
    });
    /** @type {__VLS_StyleScopedClasses['grid']} */ ;
    /** @type {__VLS_StyleScopedClasses['grid-cols-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "block" },
    });
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "mb-1 block text-xs font-medium text-ink/60" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink/60']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        type: "number",
        min: "0",
        step: "0.1",
        ...{ class: "w-full rounded-2xl border-blush-200 text-sm focus:border-blush-300 focus:ring-blush-200" },
    });
    (__VLS_ctx.form.targetValue);
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-blush-200']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:border-blush-300']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:ring-blush-200']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "block" },
    });
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "mb-1 block text-xs font-medium text-ink/60" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-ink/60']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        placeholder: "pages, L, kg...",
        ...{ class: "w-full rounded-2xl border-blush-200 text-sm focus:border-blush-300 focus:ring-blush-200" },
    });
    (__VLS_ctx.form.unit);
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-blush-200']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:border-blush-300']} */ ;
    /** @type {__VLS_StyleScopedClasses['focus:ring-blush-200']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "mt-4 flex gap-2" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
    const __VLS_6 = PrimaryButton || PrimaryButton;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
        ...{ 'onClick': {} },
        type: "button",
        variant: "ghost",
        ...{ class: "flex-1" },
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onClick': {} },
        type: "button",
        variant: "ghost",
        ...{ class: "flex-1" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_11;
    const __VLS_12 = ({ click: {} },
        { onClick: (...[$event]) => {
                if (!(__VLS_ctx.open))
                    return;
                __VLS_ctx.$emit('close');
                // @ts-ignore
                [$emit, form, form,];
            } });
    /** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
    const { default: __VLS_13 } = __VLS_9.slots;
    // @ts-ignore
    [];
    var __VLS_9;
    var __VLS_10;
    const __VLS_14 = PrimaryButton || PrimaryButton;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
        type: "submit",
        ...{ class: "flex-1" },
    }));
    const __VLS_16 = __VLS_15({
        type: "submit",
        ...{ class: "flex-1" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    /** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
    const { default: __VLS_19 } = __VLS_17.slots;
    (__VLS_ctx.mode === 'edit' ? 'Enregistrer' : 'Ajouter');
    // @ts-ignore
    [mode,];
    var __VLS_17;
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
export default {};
