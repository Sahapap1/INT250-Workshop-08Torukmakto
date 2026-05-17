<script setup>
import { computed } from 'vue';
import { admissionStore as store } from '@/stores/admissionStore';

// 1. รับค่า status มาจากหน้าหลัก AdmissionView.vue
const props = defineProps({
    status: {
        type: String,
        default: 'standard'
    }
});

const emit = defineEmits(['goToStep']);

// Helper: รวมชื่อเต็มของผู้สมัคร
const fullName = computed(() => {
    const parts = [store.personal?.firstName, store.personal?.middleName, store.personal?.lastName].filter(Boolean);
    return parts.length > 0 ? parts.join(' ') : '—';
});

// Helper: จัดฟอร์แมตวันเกิด (เช่น 14 May 2005)
const formattedDob = computed(() => {
    if (!store.personal?.dateOfBirth) return '—';
    const d = new Date(store.personal.dateOfBirth);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
});

// Helper: แสดงชื่อแทร็กการสมัครแบบสวยงาม
const statusLabel = computed(() => {
    if (props.status === 'standard') return 'Regular Student (VWO/HAVO)';
    if (props.status === 'polytechnic') return 'Polytechnic (HBO)';
    if (props.status === 'international') return 'International Applicant';
    return props.status;
});

// 2. ข้อมูลฝั่งการศึกษา (Academic) สลับฟิลด์ตาม Status
const academicData = computed(() => {
    const institution = store.academic?.institutionName || '—';
    
    if (props.status === 'polytechnic') {
        return [
            { label: 'Polytechnic Institution', value: institution },
            { label: 'Current Status', value: store.academic?.hboStatus || '—' },
            { label: 'Current GPA', value: store.academic?.gpa || '—', isPrimary: true }
        ];
    } 
    else if (props.status === 'international') {
        return [
            { label: 'Institution Name', value: institution },
            { label: 'Country of Origin', value: store.academic?.countryOfOrigin || '—' },
            { label: 'English Proficiency', value: store.academic?.englishScore || '—', isPrimary: true }
        ];
    }
    // แทร็กปกติ (Standard)
    return [
        { label: 'High School Institution', value: institution },
        { label: 'VWO Profile', value: store.academic?.vwoProfile || '—' },
        { label: 'BSN Number', value: store.academic?.bsnNumber || '—', isPrimary: true }
    ];
});

// 🌟 3. รายการเอกสาร (Documents) อัปเดตให้ตรงกับหน้า FormDocuments ของแต่ละอัน 100%
const docList = computed(() => {
    // กำหนดรูปแบบเอกสารแต่ละใบแยกกันเพื่อเรียกใช้ตามเงื่อนไข
    const docs = {
        transcript: { key: 'transcript', label: 'Transcript', desc: 'Academic Records', icon: 'picture_as_pdf', iconColor: 'text-error', uploaded: store.documents?.transcript },
        degreeCert: { key: 'degreeCertificate', label: 'Degree Certificate', desc: 'Graduation Proof', icon: 'school', iconColor: 'text-secondary', uploaded: store.documents?.degreeCertificate },
        englishProf: { key: 'englishProficiency', label: 'English Proficiency', desc: 'IELTS/TOEFL Results', icon: 'translate', iconColor: 'text-purple-500', uploaded: store.documents?.englishProficiency },
        sop: { key: 'statementOfPurpose', label: 'Statement of Purpose', desc: 'Personal Statement', icon: 'description', iconColor: 'text-blue-500', uploaded: store.documents?.statementOfPurpose },
        recs: { key: 'recommendations', label: 'Recommendations', desc: 'Academic References', icon: 'verified_user', iconColor: 'text-green-600', uploaded: store.documents?.recommendations },
        resume: { key: 'resume', label: 'Resume / CV', desc: 'Professional History', icon: 'badge', iconColor: 'text-primary', uploaded: store.documents?.resume },
        stdTests: { key: 'standardizedTests', label: 'Standardized Tests', desc: 'SAT/ACT/GRE (Optional)', icon: 'quiz', iconColor: 'text-orange-400', uploaded: store.documents?.standardizedTests },
        courseDesc: { key: 'courseDescriptions', label: 'Course Descriptions', desc: 'Syllabus Outline', icon: 'travel_explore', iconColor: 'text-teal-600', uploaded: store.documents?.courseDescriptions },
        passport: { key: 'passportCopy', label: 'Passport Copy', desc: 'Identification Document', icon: 'travel_explore', iconColor: 'text-blue-400', uploaded: store.documents?.passportCopy },
    };

    // 📌 กรณี Polytechnic (8 รายการ)
    if (props.status === 'polytechnic') {
        return [
            docs.transcript, docs.degreeCert, docs.englishProf, docs.sop, 
            docs.recs, docs.resume, docs.stdTests, docs.courseDesc
        ];
    } 
    // 📌 กรณี International (8 รายการ)
    else if (props.status === 'international') {
        return [
            docs.transcript, docs.degreeCert, docs.englishProf, docs.sop, 
            docs.recs, docs.resume, docs.stdTests, docs.passport
        ];
    }
    
    // 📌 กรณี Standard (5 รายการ ตามโค้ด FormDocuments_Standard)
    return [
        docs.transcript, docs.degreeCert, docs.sop, docs.resume, docs.stdTests
    ];
});
</script>

<template>
    <header class="mb-12 animate-fade-in">
        <h1 class="font-headline-lg text-headline-lg text-primary mb-4">Review Your Application</h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Please review all the information provided below for accuracy. Your current application track is 
            <span class="text-primary font-bold">{{ statusLabel }}</span>. Once submitted, your application cannot be edited.
        </p>
    </header>

    <div class="grid grid-cols-1 gap-8 animate-fade-in">
        
        <section class="bg-surface-container-low rounded-xl p-6 md:p-8 border border-outline-variant relative overflow-hidden group">
            <div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div class="flex justify-between items-start mb-6">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary" data-icon="person">person</span>
                    <h3 class="font-headline-md text-headline-md text-on-surface">Personal Information</h3>
                </div>
                <button @click="emit('goToStep', 1)" class="flex items-center gap-1 text-primary font-label-md hover:underline">
                    <span class="material-symbols-outlined text-[18px]" data-icon="edit">edit</span> Edit
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div>
                    <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">Full Name</p>
                    <p class="font-body-md font-bold text-on-surface">{{ fullName }}</p>
                </div>
                <div>
                    <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">Date of Birth</p>
                    <p class="font-body-md font-bold text-on-surface">{{ formattedDob }}</p>
                </div>
                <div>
                    <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">Nationality</p>
                    <p class="font-body-md font-bold text-on-surface">{{ store.personal?.nationality || '—' }}</p>
                </div>
                <div>
                    <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">Contact Email</p>
                    <p class="font-body-md font-bold text-on-surface">{{ store.personal?.email || '—' }}</p>
                </div>
            </div>
        </section>

        <section class="bg-surface-container-low rounded-xl p-6 md:p-8 border border-outline-variant relative overflow-hidden group">
            <div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div class="flex justify-between items-start mb-6">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary" data-icon="school">school</span>
                    <h3 class="font-headline-md text-headline-md text-on-surface">Academic Background</h3>
                </div>
                <button @click="emit('goToStep', 2)" class="flex items-center gap-1 text-primary font-label-md hover:underline">
                    <span class="material-symbols-outlined text-[18px]" data-icon="edit">edit</span> Edit
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div v-for="(item, index) in academicData" :key="index" :class="{'md:col-span-2': index === 0}">
                    <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">{{ item.label }}</p>
                    <p class="font-body-md font-semibold text-on-surface" :class="item.isPrimary ? 'text-primary font-bold' : ''">{{ item.value }}</p>
                </div>
            </div>
        </section>

        <section class="bg-surface-container-low rounded-xl p-6 md:p-8 border border-outline-variant relative overflow-hidden group">
            <div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div class="flex justify-between items-start mb-6">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary" data-icon="description">description</span>
                    <h3 class="font-headline-md text-headline-md text-on-surface">Document Submission</h3>
                </div>
                <button @click="emit('goToStep', 3)" class="flex items-center gap-1 text-primary font-label-md hover:underline">
                    <span class="material-symbols-outlined text-[18px]" data-icon="edit">edit</span> Edit
                </button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="doc in docList" :key="doc.key"
                    class="flex items-center justify-between p-4 bg-white rounded-lg border shadow-sm transition-all h-[84px]"
                    :class="doc.uploaded ? 'border-green-300 bg-green-50/20' : 'border-outline-variant'">
                    
                    <div class="flex items-center gap-4">
                        <span class="material-symbols-outlined text-3xl" :class="doc.iconColor">{{ doc.icon }}</span>
                        <div class="flex flex-col">
                            <span class="font-body-md font-bold text-[14px] text-on-surface leading-tight">{{ doc.label }}</span>
                            <span class="text-[12px] text-on-surface-variant leading-tight mt-1.5">{{ doc.desc }}</span>
                        </div>
                    </div>

                    <span v-if="doc.uploaded" class="material-symbols-outlined text-green-600 text-[22px]" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                    <span v-else class="material-symbols-outlined text-on-surface-variant opacity-40 text-[22px]" style="font-variation-settings: 'FILL' 0, 'wght' 300;">cancel</span>
                </div>
            </div>
        </section>
    </div>

    <div class="mt-12 p-6 md:p-8 bg-surface-container rounded-xl border-2 border-primary-container/10">
        <h3 class="font-headline-md text-headline-md text-primary mb-4">Final Declaration</h3>
        <div class="flex gap-4">
            <div class="pt-1">
                <input class="w-6 h-6 rounded border-outline text-primary focus:ring-primary cursor-pointer" id="declare" type="checkbox" />
            </div>
            <label class="font-body-md text-on-surface leading-relaxed cursor-pointer select-none" for="declare">
                I hereby certify that all information provided in this application is accurate and complete to the best
                of my knowledge. I understand that any false statements or withholding of relevant information may
                result in the rejection of my application or dismissal from the University of West Holland. I also agree
                to the University's processing of my data for the purposes of the admissions cycle.
            </label>
        </div>
    </div>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.4s ease-out;
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>