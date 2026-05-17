<script setup>
import { reactive } from "vue";
const props = defineProps({
    facility: Object
});

const emit = defineEmits([
    "close",
    "submit-booking"
]);

const tomorrow = new Date();

tomorrow.setDate(
    tomorrow.getDate() + 1
);

const minDate =
    tomorrow.toISOString().split("T")[0];

const form = reactive({
    // fullName: "",
    // studentId: "",
    date: minDate,
    timeSlot: ""
});

const errors = reactive({
    // fullName: "",
    // studentId: "",
    date: "",
    timeSlot: ""
});

const validateForm = () => {
    let isValid = true;

    // errors.fullName = "";
    // errors.studentId = "";
    errors.date = "";
    errors.timeSlot = "";

    // full name
    // if (!form.fullName.trim()) {
    //     errors.fullName = "Full name is required";
    //     isValid = false;
    // } else if (!/^[A-Za-z\s]+$/.test(form.fullName)
    // ) {
    //     errors.fullName = "Full name should contain only letters";
    //     isValid = false;
    // }

    // // student id
    // if (!form.studentId.trim()) {
    //     errors.studentId = "Student ID is required";
    //     isValid = false;
    // } else if (!/^\d+$/.test(form.studentId)) {
    //     errors.studentId =
    //         "Student ID should contain only numbers";

    //     isValid = false;
    // } else if (form.studentId.length !== 11) {
    //     errors.studentId =
    //         "Student ID must be 11 digits";

    //     isValid = false;
    // }

    // date
    if (!form.date) {

        errors.date =
            "Please select a date";

        isValid = false;

    } else {

        const selectedDate =
            new Date(form.date);

        const today = new Date();

        today.setHours(0, 0, 0, 0);

        if (selectedDate <= today) {

            errors.date =
                "Please select a future date";

            isValid = false;
        }
    }

    // time slot
    if (!form.timeSlot) {
        errors.timeSlot =
            "Please select a time slot";

        isValid = false;
    }

    return isValid;
};

const formattedDate =
    new Date(form.date).toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "numeric",
            year: "numeric"
        }
    );

const startDateTime =
    `${formattedDate} • ${form.timeSlot}`;

const handleSubmit = () => {
    if (!validateForm()) return;

    const startDateTime =
        `${form.date} • ${form.timeSlot}`;

    emit("submit-booking", {
        id: Date.now(),

        title: props.facility.title,

        type: "Facility",

        startDate: startDateTime,

        status: "Confirmed"
    });

    emit("close");
};

</script>
<template>
    <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-primary/40 backdrop-blur-sm">
        <div
            class="bg-surface w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div class="bg-primary p-8 text-on-primary relative">
                <button class="absolute top-6 right-6 text-on-primary/60 hover:text-on-primary" @click="$emit('close')">
                    <span class="material-symbols-outlined">close</span>
                </button>
                <h2 class="font-headline-lg text-headline-lg">Complete Your Booking</h2>
                <p class="text-on-primary/80 mt-1">{{ facility.title }}</p>
            </div>
            <form class="p-8 space-y-6" @submit.prevent="handleSubmit">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- <div class="space-y-1">
                        <label class="font-label-md text-label-md text-on-surface-variant block">Full Name</label>
                        <input v-model="form.fullName" @input="errors.fullName = ''"
                            class="w-full bg-surface-container border-outline-variant rounded-lg p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            type="text" placeholder="Enter your full name" />
                        <p v-if="errors.fullName" class="text-error text-sm mt-1">
                            {{ errors.fullName }}
                        </p>
                    </div>
                    <div class="space-y-1">
                        <label class="font-label-md text-label-md text-on-surface-variant block">Student
                            ID</label>
                        <input v-model="form.studentId" @input="errors.studentId = ''"
                            class="w-full bg-surface-container border-outline-variant rounded-lg p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            type="text" placeholder="67000000000" />
                        <p v-if="errors.studentId" class="text-error text-sm mt-1">
                            {{ errors.studentId }}
                        </p>
                    </div> -->
                    <div class="space-y-1">
                        <label class="font-label-md text-label-md text-on-surface-variant block">Preferred Date</label>
                        <div class="relative">
                            <input v-model="form.date" :min="minDate"
                                class="w-full bg-surface-container border-outline-variant rounded-lg p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                type="date" />
                            <p v-if="errors.date" class="text-error text-sm mt-1">
                                {{ errors.date }}
                            </p>
                        </div>
                    </div>
                    <div class="space-y-1">
                        <label class="font-label-md text-label-md text-on-surface-variant block">Time Slot</label>
                        <select v-model="form.timeSlot" @change="errors.timeSlot = ''"
                            class="w-full bg-surface-container border-outline-variant rounded-lg p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                            <option disabled value="">
                                Select Timeslot
                            </option>
                            <option>05:00 PM - 06:30 PM</option>
                            <option>06:30 PM - 08:00 PM</option>
                            <option>08:00 PM - 09:30 PM</option>
                        </select>
                        <p v-if="errors.timeSlot" class="text-error text-sm mt-1">
                            {{ errors.timeSlot }}
                        </p>
                    </div>
                </div>
                <div class="p-4 bg-secondary-container/30 border border-secondary-container rounded-lg flex gap-4">
                    <span class="material-symbols-outlined text-on-secondary-container">info</span>
                    <p class="text-sm text-on-secondary-container">Your student card will be required for entry at the
                        Athletics Center reception. Please arrive 10 minutes before your slot.</p>
                </div>
                <div class="flex gap-4 pt-4">
                    <button @click="$emit('close')"
                        class="flex-1 px-8 py-3 border border-outline text-primary font-label-md rounded-lg hover:bg-surface-container transition-all"
                        type="button">Cancel</button>
                    <button
                        class="flex-1 px-8 py-3 bg-primary text-on-primary font-label-md rounded-lg shadow-lg hover:bg-primary-container transition-all"
                        type="submit">Confirm Booking</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped></style>