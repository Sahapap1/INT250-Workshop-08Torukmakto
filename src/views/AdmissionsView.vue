<script setup>
import FormDocuments from '@/components/Admission/FormDocuments.vue';
import ApplicationHeader from '../components/Admission/ApplicationHeader.vue';
import FormPersenal from '../components/Admission/FormPersenal.vue';
import FormAcademic from '@/components/Admission/FormAcademic.vue';
import FormReview from '@/components/Admission/FormReview.vue';

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

// 3. คำนวณความยาวของเส้น Progress (เป็นเปอร์เซ็นต์)
const progressWidth = computed(() => {
    // (Step ปัจจุบัน - 1) / (จำนวน Step ทั้งหมด - 1) * 100
    return ((currentStep.value - 1) / (steps.length - 1)) * 100 + '%';
});

// ฟังก์ชันสำหรับเดินหน้า
const nextStep = () => {
    if (currentStep.value < steps.length) {
        currentStep.value++;
    }
};

// ฟังก์ชันสำหรับถอยหลัง
const prevStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--;
    }
};
</script>

<template>
    <main class="max-w-[1280px] mx-auto px-margin-desktop py-margin-desktop">
        <section>
            <div class="flex items-center justify-between max-w-4xl mx-auto relative">
                <!-- Line Background (เส้นสีเทาพื้นหลัง) -->
                <div class="absolute top-5 left-0 w-full h-0.5 bg-surface-container-highest -z-10"></div>

                <!-- Progress Line (เส้นสีหลักที่วิ่งตาม Step) -->
                <!-- คำนวณความกว้าง (width) ตาม Step ปัจจุบัน -->
                <div class="absolute top-5 left-0 h-0.5 bg-primary -z-10 transition-all duration-300 ease-in-out"
                    :style="{ width: progressWidth }"></div>

                <!-- วนลูปแสดง Step -->
                <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center">
                    <!-- วงกลมตัวเลข -->
                    <!-- ถ้า step ปัจจุบัน มากกว่าหรือเท่ากับ index + 1 ให้ใส่สี Active -->
                    <div :class="[
                        'w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors duration-300',
                        currentStep >= index + 1
                            ? 'bg-primary text-white shadow-lg' /* สีตอน Active */
                            : 'bg-surface-container-highest text-on-surface-variant' /* สีตอนยังไปไม่ถึง */
                    ]">
                        {{ index + 1 }}
                    </div>

                    <!-- ข้อความใต้ตัวเลข -->
                    <span :class="[
                        'font-label-md text-label-md transition-colors duration-300',
                        currentStep >= index + 1 ? 'text-primary' : 'text-on-surface-variant'
                    ]">
                        {{ step }}
                    </span>
                </div>
            </div>

            <ApplicationHeader />
            <FormPersenal v-if="currentStep === 1" />
            <FormAcademic v-else-if="currentStep === 2" />
            <FormDocuments v-else-if="currentStep === 3" />
            <FormReview v-else-if="currentStep === 4" />

            <div
                class="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-outline-variant">
                <button
                    class="w-full md:w-auto px-8 py-3 rounded-lg border border-primary text-primary font-label-md hover:bg-surface-container transition-colors active:scale-95">
                    Save Progress
                </button>
                <div class="flex gap-5">
                    <button @click="prevStep" :disabled="currentStep === 1"
                        class="w-full md:w-auto px-8 py-3 rounded-lg border border-primary text-primary font-label-md hover:bg-surface-container transition-colors active:scale-95">
                        Back
                    </button>
                    <button @click="nextStep" :disabled="currentStep === steps.length"
                        class="w-full md:w-auto px-12 py-3 rounded-lg bg-primary text-on-primary font-label-md hover:opacity-90 shadow-sm transition-transform active:scale-95">
                        Next
                    </button>
                </div>
            </div>
        </section>
    </main>
</template>
