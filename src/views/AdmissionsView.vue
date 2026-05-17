<script setup>
import FormDocuments_Inter from "../components/Admission/FormDocuments_Inter.vue";
import FormDocuments_Polytechnic from "../components/Admission/FormDocuments_Polytechnic.vue";
import FormDocuments_Standard from "../components/Admission/FormDocuments_Standard.vue";
import ApplicationHeader from "../components/Admission/ApplicationHeader.vue";
import FormPersenal from "../components/Admission/FormPersenal.vue";
import FormAcademic from "../components/Admission/FormAcademic.vue";
import FormReview from "../components/Admission/FormReview.vue";

import { ref, computed, onMounted } from "vue";
import { admissionStore as store } from "@/stores/admissionStore";

const steps = ["Personal Info", "Academic Background", "Documents", "Review"];

const currentStep = ref(1);
const applicantStatus = ref("standard");

// 🌟 ตัวแปรคุมการเปิด/ปิด Modal ตอน Submit สำเร็จ
const showSuccessModal = ref(false);

const progressWidth = computed(() => {
  return ((currentStep.value - 1) / (steps.length - 1)) * 100 + "%";
});

const nextStep = () => {
  if (currentStep.value < steps.length) {
    currentStep.value++;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const goToStep = (step) => {
  currentStep.value = step;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// 🌟 ฟังก์ชันสำหรับ Save ข้อมูลลง Local Storage
const saveProgress = () => {
  localStorage.setItem("admissionProgress", JSON.stringify(store));
  localStorage.setItem("admissionStep", currentStep.value);
  localStorage.setItem("applicantStatus", applicantStatus.value);

  alert("Your progress has been saved successfully!");
};

// 🌟 ฟังก์ชันสำหรับตอนกดปุ่ม Submit
const submitApplication = () => {
  console.log("Submitting Data:", store);

  // ล้างข้อมูลที่เซฟไว้ใน Local Storage เพราะส่งข้อมูลเรียบร้อยแล้ว
  localStorage.removeItem("admissionProgress");
  localStorage.removeItem("admissionStep");
  localStorage.removeItem("applicantStatus");

  // เปิดหน้าต่าง Modal แสดงความสำเร็จ
  showSuccessModal.value = true;
};

// 🌟 ฟังก์ชันสำหรับปิด Modal และรีเฟรชหน้าเพื่อเริ่มใหม่
const finishAndReset = () => {
  showSuccessModal.value = false;
  window.location.reload(); 
};

// 🌟 ฟังก์ชันสำหรับดึงข้อมูลกลับมาเมื่อโหลดหน้าเว็บ
onMounted(() => {
  const savedData = localStorage.getItem("admissionProgress");
  const savedStep = localStorage.getItem("admissionStep");
  const savedStatus = localStorage.getItem("applicantStatus");

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    Object.assign(store, parsedData);
  }

  if (savedStep) {
    currentStep.value = parseInt(savedStep, 10);
  }

  if (savedStatus) {
    applicantStatus.value = savedStatus;
  }
});
</script>

<template>
  <main
    class="max-w-[1280px] mx-auto px-4 md:px-margin-desktop py-8 md:py-margin-desktop relative"
  >
    <section>
      <div class="flex items-center justify-between max-w-4xl mx-auto relative">
        <div class="absolute top-5 left-0 w-full h-0.5 bg-surface-container-highest -z-10"></div>
        <div
          class="absolute top-5 left-0 h-0.5 bg-primary -z-10 transition-all duration-300 ease-in-out"
          :style="{ width: progressWidth }"
        ></div>

        <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center">
          <div
            :class="[
              'w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors duration-300',
              currentStep >= index + 1
                ? 'bg-primary text-white shadow-lg'
                : 'bg-surface-container-highest text-on-surface-variant',
            ]"
          >
            {{ index + 1 }}
          </div>

          <span
            :class="[
              'font-label-md text-center text-xs md:text-label-md transition-colors duration-300 mt-1',
              currentStep >= index + 1 ? 'text-primary' : 'text-on-surface-variant',
            ]"
          >
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

        <FormReview v-else-if="currentStep === 4" :status="applicantStatus" @goToStep="goToStep" />
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-outline-variant mt-10">
        <button
          @click="saveProgress"
          class="w-full md:w-auto px-8 py-3 rounded-lg border border-primary text-primary font-label-md hover:bg-surface-container transition-colors active:scale-95"
        >
          Save Progress
        </button>
        <div class="flex gap-5 w-full md:w-auto">
          <button
            @click="prevStep"
            :disabled="currentStep === 1"
            class="flex-1 md:flex-none md:w-auto px-8 py-3 rounded-lg border border-primary text-primary font-label-md hover:bg-surface-container transition-colors active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          >
            Back
          </button>

          <button
            v-if="currentStep < steps.length"
            @click="nextStep"
            class="flex-1 md:flex-none md:w-auto px-12 py-3 rounded-lg bg-primary text-on-primary font-label-md hover:opacity-90 shadow-sm transition-transform active:scale-95"
          >
            Next
          </button>
          
          <button
            v-else
            @click="submitApplication"
            class="flex-1 md:flex-none md:w-auto px-12 py-3 rounded-lg bg-green-600 text-white font-label-md hover:bg-green-700 shadow-sm transition-transform active:scale-95"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  </main>

  <div v-if="showSuccessModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity">
    <div class="bg-surface-container-lowest p-8 md:p-10 rounded-2xl shadow-2xl max-w-md w-full text-center relative transform transition-all animate-fade-in">
      
      <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <span class="material-symbols-outlined text-green-600 text-5xl" style="font-variation-settings: 'FILL' 1;">
          check_circle
        </span>
      </div>

      <h2 class="font-headline-lg text-[24px] text-primary font-bold mb-3">Application Submitted!</h2>
      <p class="font-body-md text-on-surface-variant mb-8 leading-relaxed">
        Thank you, <strong class="text-on-surface">{{ store.personal?.firstName || 'Applicant' }}</strong>. Your application has been successfully received. We will review your documents and contact you via email shortly.
      </p>

      <button @click="finishAndReset" class="w-full px-8 py-3.5 bg-primary text-white font-label-md rounded-lg hover:opacity-90 shadow-md transition-colors active:scale-95">
        Back to Home
      </button>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
</style>