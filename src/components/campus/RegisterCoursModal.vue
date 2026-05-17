<script setup>

import { reactive, ref } from "vue";

const form = reactive({
    // fullName: "",
    // studentId: "",
    schedule: "",
    learningMode: "",
});

const errors = reactive({
    // fullName: "",
    // studentId: "",
    schedule: "",
    learningMode: "",
});

const isSubmitting = ref(false);


const props = defineProps({
    course: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits([
    "close",
    "submit"
]);

const validateForm = () => {
    let isValid = true;

    // reset
    // errors.fullName = "";
    // errors.studentId = "";
    errors.schedule = "";
    errors.learningMode = "";

    // full name
    // if (!form.fullName.trim()) {
    //     errors.fullName = "Full name is required";
    //     isValid = false;
    // } else if (!/^[A-Za-z\s]+$/.test(form.fullName)
    // ) {
    //     errors.fullName = "Full name should contain only letters";
    //     isValid = false;
    // }

    // student id
    // if (!form.studentId.trim()) {
    //     errors.studentId = "Student ID is required";
    //     isValid = false;
    // } else if (!/^\d+$/.test(form.studentId)) {
    //     errors.studentId = "Student ID should contain only numbers";
    //     isValid = false;
    // } else if (form.studentId.length !== 11) {
    //     errors.studentId = "Student ID must be 11 digits";
    //     isValid = false;
    // }

    // schedule
    if (!form.schedule) {
        errors.schedule = "Please select a schedule";
        isValid = false;
    }

    // learning mode
    if (!form.learningMode) {
        errors.learningMode = "Please select a learning mode";
        isValid = false;
    }

    return isValid;
};

const handleSubmit = async () => {
    if (!validateForm()) {
        return;
    }

    isSubmitting.value = true;

    await new Promise((resolve) =>
        setTimeout(resolve, 2000)
    );

    isSubmitting.value = false;
    
    
    emit("submit", {
        id: props.course.id,
        title: props.course.title,
        startDate: props.course.startDate
    });
    emit("close");
};
</script>

<template>
    <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-primary/40 backdrop-blur-sm">
        <div
            class="bg-surface w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <!-- Header -->
            <div class="bg-primary p-8 text-on-primary relative">
                <button class="absolute top-6 right-6 text-on-primary/60 hover:text-on-primary transition-colors"
                    @click="$emit('close')">
                    <span class="material-symbols-outlined">
                        close
                    </span>
                </button>

                <div class="flex items-start gap-6">
                    <img :src="course.image" :alt="course.title"
                        class="w-28 h-28 rounded-xl object-cover border border-white/10 shadow-lg" />

                    <div class="flex-1">
                        <div
                            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider mb-4">
                            <span class="w-2 h-2 rounded-full bg-green-400"></span>

                            {{ course.category }}
                        </div>

                        <h2 class="font-headline-lg text-headline-lg">
                            {{ course.title }}
                        </h2>

                        <div class="flex flex-wrap items-center gap-6 mt-4 text-sm text-on-primary/80">
                            <div class="flex items-center gap-2">
                                <span class="material-symbols-outlined text-[18px]">
                                    schedule
                                </span>

                                {{ course.duration }}
                            </div>

                            <div class="flex items-center gap-2">
                                <span class="material-symbols-outlined text-[18px]">
                                    group
                                </span>

                                {{ course.seats }} seats left
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Form -->
            <form class="p-8 space-y-6" @submit.prevent="handleSubmit">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- <div class="space-y-1">
                        <label class="font-label-md text-label-md text-on-surface-variant block">
                            Full Name
                        </label>

                        <input @input="errors.fullName = ''" v-model="form.fullName" type="text"
                            placeholder="Enter your full name" :class="[
                                'w-full bg-surface-container border rounded-lg p-3 text-on-surface focus:ring-1 transition-all',
                                errors.fullName
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                    : 'border-outline-variant focus:border-primary focus:ring-primary'
                            ]" @submit.prevent="handleSubmit">
                        <p v-if="errors.fullName" class="text-sm text-red-500 mt-1">
                            {{ errors.fullName }}
                        </p>
                    </div> -->

                    <!-- <div class="space-y-1">
                        <label class="font-label-md text-label-md text-on-surface-variant block">
                            Student ID
                        </label>

                        <input @input="errors.studentId = ''" v-model="form.studentId" type="text"
                            placeholder="67000000000" :class="[
                                'w-full bg-surface-container border rounded-lg p-3 text-on-surface focus:ring-1 transition-all',
                                errors.studentId
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                    : 'border-outline-variant focus:border-primary focus:ring-primary'
                            ]" />
                        <p v-if="errors.studentId" class="text-sm text-red-500 mt-1">
                            {{ errors.studentId }}
                        </p>
                    </div> -->

                    <div class="space-y-1">
                        <label class="font-label-md text-label-md text-on-surface-variant block">
                            Preferred Schedule
                        </label>

                        <select @change="errors.schedule = ''" v-model="form.schedule" :class="[
                            'w-full bg-surface-container border rounded-lg p-3 text-on-surface focus:ring-1 transition-all',
                            errors.schedule
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                : 'border-outline-variant focus:border-primary focus:ring-primary'
                        ]">
                            <option disabled value="">
                                Select Schedule
                            </option>

                            <option>
                                Morning Session
                            </option>

                            <option>
                                Afternoon Session
                            </option>

                            <option>
                                Evening Session
                            </option>
                        </select>

                        <p v-if="errors.schedule" class="text-sm text-red-500 mt-1">
                            {{ errors.schedule }}
                        </p>
                    </div>

                    <div class="space-y-1">
                        <label class="font-label-md text-label-md text-on-surface-variant block">
                            Learning Mode
                        </label>

                        <select @change="errors.learningMode = ''" v-model="form.learningMode" :class="[
                            'w-full bg-surface-container border rounded-lg p-3 text-on-surface focus:ring-1 transition-all',
                            errors.learningMode
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                : 'border-outline-variant focus:border-primary focus:ring-primary'
                        ]">
                            <option disabled value="">
                                Select Learning Mode
                            </option>

                            <option>
                                On Campus
                            </option>

                            <option>
                                Online
                            </option>

                            <option>
                                Hybrid
                            </option>
                        </select>

                        <p v-if="errors.learningMode" class="text-sm text-red-500 mt-1">
                            {{ errors.learningMode }}
                        </p>
                    </div>
                </div>

                <!-- Info -->
                <div class="p-4 bg-secondary-container/30 border border-secondary-container rounded-lg flex gap-4">
                    <span class="material-symbols-outlined text-on-secondary-container">
                        info
                    </span>

                    <p class="text-sm text-on-secondary-container">
                        Registration confirmation and class
                        schedules will be sent to your
                        university email within 24 hours.
                    </p>
                </div>

                <!-- Footer -->
                <div class="flex gap-4 pt-4">
                    <button @click="$emit('close')"
                        class="flex-1 px-8 py-3 border border-outline text-primary font-label-md rounded-lg hover:bg-surface-container transition-all"
                        type="button">
                        Cancel
                    </button>
                    <button :disabled="isSubmitting"
                        class="flex-1 px-8 py-3 bg-primary text-on-primary font-label-md rounded-lg shadow-lg hover:bg-primary-container transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        type="submit">
                        <template v-if="isSubmitting">
                            <span class="material-symbols-outlined animate-spin">
                                progress_activity
                            </span>

                            Processing...
                        </template>

                        <template v-else>
                            Confirm Registration
                        </template>
                    </button>
                </div>
            </form>

        </div>
    </div>
</template>