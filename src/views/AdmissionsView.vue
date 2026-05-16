<script setup>
import FormDocuments_Inter from '../components/Admission/FormDocuments_Inter.vue';
import FormDocuments_Polytechnic from '../components/Admission/FormDocuments_Polytechnic.vue';
import FormDocuments_Standard from '../components/Admission/FormDocuments_Standard.vue';
import ApplicationHeader from '../components/Admission/ApplicationHeader.vue';
import FormPersenal from '../components/Admission/FormPersenal.vue';
import FormAcademic from '../components/Admission/FormAcademic.vue';
import FormReview from '../components/Admission/FormReview.vue';

import { ref, computed } from 'vue';

// 1. กำหนดข้อมูล Step ทั้งหมด
const steps = [
    'Personal Info',
    'Academic Background',
    'Documents',
    'Review'
];

// 2. ตัวแปรเก็บว่าตอนนี้อยู่ Step ที่เท่าไหร่ (เริ่มที่ 1)
const currentStep = ref(1);

// 3. ตัวแปรเก็บสถานะผู้สมัคร (เริ่มต้นเป็น standard) เพื่อเอาไปตัดสินใจว่าจะโชว์ Document หน้าไหน
const applicantStatus = ref('standard');

// 4. คำนวณความยาวของเส้น Progress (เป็นเปอร์เซ็นต์)
const progressWidth = computed(() => {
    return ((currentStep.value - 1) / (steps.length - 1)) * 100 + '%';
});

// ฟังก์ชันสำหรับเดินหน้า
const nextStep = () => {
    if (currentStep.value < steps.length) {
        currentStep.value++;
        window.scrollTo({ top: 0, behavior: 'smooth' }); // เพิ่มลูกเล่นให้เลื่อนขึ้นบนสุดตอนเปลี่ยนหน้า
    }
};

// ฟังก์ชันสำหรับถอยหลัง
const prevStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

// ฟังก์ชันสำหรับกระโดดไป Step ที่ต้องการ (จากปุ่ม Edit ใน FormReview)
const goToStep = (step) => {
    currentStep.value = step;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
    <main class="max-w-[1280px] mx-auto px-4 md:px-margin-desktop py-8 md:py-margin-desktop">
        <section>
            <div class="flex items-center justify-between max-w-4xl mx-auto relative">
                <div class="absolute top-5 left-0 w-full h-0.5 bg-surface-container-highest -z-10"></div>

                <div class="absolute top-5 left-0 h-0.5 bg-primary -z-10 transition-all duration-300 ease-in-out"
                    :style="{ width: progressWidth }"></div>

                <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center">
                    <div :class="[
                        'w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors duration-300',
                        currentStep >= index + 1
                            ? 'bg-primary text-white shadow-lg' /* สีตอน Active */
                            : 'bg-surface-container-highest text-on-surface-variant' /* สีตอนยังไปไม่ถึง */
                    ]">
                        {{ index + 1 }}
                    </div>

                    <span :class="[
                        'font-label-md text-center text-xs md:text-label-md transition-colors duration-300 mt-1',
                        currentStep >= index + 1 ? 'text-primary' : 'text-on-surface-variant'
                    ]">
                        {{ step }}
                    </span>
                </div>
            </div>

            <ApplicationHeader />

            <div class="mt-8">
                <FormPersenal v-if="currentStep === 1" />

                <FormAcademic v-else-if="currentStep === 2" v-model:status="applicantStatus" />

                <template v-else-if="currentStep === 3">
                    <FormDocuments_Standard v-if="applicantStatus === 'standard'" />
                    <FormDocuments_Polytechnic v-else-if="applicantStatus === 'polytechnic'" />
                    <FormDocuments_Inter v-else-if="applicantStatus === 'international'" />
                </template>

                <FormReview v-else-if="currentStep === 4" @goToStep="goToStep" />
            </div>

            <div class="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-outline-variant mt-10">
                <button
                    class="w-full md:w-auto px-8 py-3 rounded-lg border border-primary text-primary font-label-md hover:bg-surface-container transition-colors active:scale-95">
                    Save Progress
                </button>
                <div class="flex gap-5 w-full md:w-auto">
                    <button @click="prevStep" :disabled="currentStep === 1"
                        class="flex-1 md:flex-none md:w-auto px-8 py-3 rounded-lg border border-primary text-primary font-label-md hover:bg-surface-container transition-colors active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent">
                        Back
                    </button>
                    
                    <button v-if="currentStep < steps.length" @click="nextStep"
                        class="flex-1 md:flex-none md:w-auto px-12 py-3 rounded-lg bg-primary text-on-primary font-label-md hover:opacity-90 shadow-sm transition-transform active:scale-95">
                        Next
                    </button>
                    <button v-else
                        class="flex-1 md:flex-none md:w-auto px-12 py-3 rounded-lg bg-green-600 text-white font-label-md hover:bg-green-700 shadow-sm transition-transform active:scale-95">
                        Submit
                    </button>
                </div>
            </div>
        </section>
    </main>
</template>