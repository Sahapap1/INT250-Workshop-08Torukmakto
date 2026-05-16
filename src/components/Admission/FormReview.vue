<script setup>
import { computed } from 'vue';
import { admissionStore as store } from '@/stores/admissionStore';

const emit = defineEmits(['goToStep']);

// Computed helpers for display
const fullName = computed(() => {
    const parts = [store.personal.firstName, store.personal.middleName, store.personal.lastName].filter(Boolean);
    return parts.length > 0 ? parts.join(' ') : '—';
});

const formattedDob = computed(() => {
    if (!store.personal.dateOfBirth) return '—';
    const d = new Date(store.personal.dateOfBirth);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
});

const docList = computed(() => [
    { key: 'transcript', label: 'Transcript', desc: 'VWO Secondary Diploma', icon: 'picture_as_pdf', iconColor: 'text-error', uploaded: store.documents.transcript },
    { key: 'degreeCertificate', label: 'Degree Certificate', desc: 'Identification Document', icon: 'school', iconColor: 'text-secondary', uploaded: store.documents.degreeCertificate },
    { key: 'statementOfPurpose', label: 'Statement of Purpose', desc: 'Personal Statement', icon: 'description', iconColor: 'text-primary-container', uploaded: store.documents.statementOfPurpose },
    { key: 'resume', label: 'Resume / CV', desc: 'Professional History', icon: 'badge', iconColor: 'text-primary', uploaded: store.documents.resume },
    { key: 'standardizedTests', label: 'Standardized Tests', desc: 'SAT/ACT/GRE (Optional)', icon: 'quiz', iconColor: 'text-tertiary-fixed-dim', uploaded: store.documents.standardizedTests },
]);
</script>

<template>
    <header class="mb-12">
        <h1 class="font-headline-lg text-headline-lg text-primary mb-4">Review Your Application</h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Please review all the information provided below for accuracy. Once submitted, your application will enter
            formal review and cannot be edited until an admissions decision is reached.
        </p>
    </header>
    <!-- Summary Sections (Bento-ish Grid) -->
    <div class="grid grid-cols-1 gap-8">
        <!-- Section: Personal Info -->
        <section
            class="bg-surface-container-low rounded-xl p-6 md:p-8 border border-outline-variant relative overflow-hidden group">
            <div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div class="flex justify-between items-start mb-6">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary" data-icon="person">person</span>
                    <h3 class="font-headline-md text-headline-md">Personal Information</h3>
                </div>
                <button @click="emit('goToStep', 1)" class="flex items-center gap-1 text-primary font-label-md hover:underline">
                    <span class="material-symbols-outlined text-[18px]" data-icon="edit">edit</span> Edit
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div>
                    <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">Full Name</p>
                    <p class="font-body-md font-bold">{{ fullName }}</p>
                </div>
                <div>
                    <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">Date of Birth</p>
                    <p class="font-body-md font-bold">{{ formattedDob }}</p>
                </div>
                <div>
                    <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">Nationality</p>
                    <p class="font-body-md font-bold">{{ store.personal.nationality || '—' }}</p>
                </div>
                <div>
                    <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">Contact Email</p>
                    <p class="font-body-md font-bold">{{ store.personal.email || '—' }}</p>
                </div>
            </div>
        </section>
        <!-- Section: Academic Background -->
        <section
            class="bg-surface-container-low rounded-xl p-6 md:p-8 border border-outline-variant relative overflow-hidden group">
            <div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div class="flex justify-between items-start mb-6">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary" data-icon="school">school</span>
                    <h3 class="font-headline-md text-headline-md">Academic Background</h3>
                </div>
                <button @click="emit('goToStep', 2)" class="flex items-center gap-1 text-primary font-label-md hover:underline">
                    <span class="material-symbols-outlined text-[18px]" data-icon="edit">edit</span> Edit
                </button>
            </div>
            <div class="space-y-6">
                <div>
                    <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">Last Institution</p>
                    <p class="font-body-md font-semibold">{{ store.academic.institutionName || '—' }}</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                    <div>
                        <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">VWO Profile</p>
                        <p class="font-body-md font-semibold">{{ store.academic.vwoProfile || '—' }}</p>
                    </div>
                    <div>
                        <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">BSN Number</p>
                        <p class="font-body-md font-bold text-primary">{{ store.academic.bsnNumber || '—' }}</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section: Documents -->
        <section
            class="bg-surface-container-low rounded-xl p-6 md:p-8 border border-outline-variant relative overflow-hidden group">
            <div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div class="flex justify-between items-start mb-6">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary" data-icon="description">description</span>
                    <h3 class="font-headline-md text-headline-md">Document Submission</h3>
                </div>
                <button @click="emit('goToStep', 3)" class="flex items-center gap-1 text-primary font-label-md hover:underline">
                    <span class="material-symbols-outlined text-[18px]" data-icon="edit">edit</span> Edit
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="doc in docList" :key="doc.key"
                    class="flex items-center justify-between p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                    :class="doc.uploaded ? 'border-green-300' : 'border-outline-variant'">
                    <div class="flex items-center gap-3">
                        <span class="material-symbols-outlined" :class="doc.iconColor">{{ doc.icon }}</span>
                        <div>
                            <p class="font-body-md font-semibold text-[14px]">{{ doc.label }}</p>
                            <p class="text-[12px] text-on-surface-variant">{{ doc.desc }}</p>
                        </div>
                    </div>
                    <span v-if="doc.uploaded" class="material-symbols-outlined text-green-600"
                        style="font-variation-settings: 'FILL' 1;">check_circle</span>
                    <span v-else class="material-symbols-outlined text-outline">cancel</span>
                </div>
            </div>
        </section>
    </div>
    <!-- Final Declaration -->
    <div class="mt-12 p-6 md:p-8 bg-surface-container rounded-xl border-2 border-primary-container/10">
        <h3 class="font-headline-md text-headline-md text-primary mb-4">Final Declaration</h3>
        <div class="flex gap-4">
            <div class="pt-1">
                <input class="w-6 h-6 rounded border-outline text-primary focus:ring-primary" id="declare"
                    type="checkbox" />
            </div>
            <label class="font-body-md text-on-surface leading-relaxed" for="declare">
                I hereby certify that all information provided in this application is accurate and complete to the best
                of my knowledge. I understand that any false statements or withholding of relevant information may
                result in the rejection of my application or dismissal from the University of West Holland. I also agree
                to the University's processing of my data for the purposes of the admissions cycle.
            </label>
        </div>
    </div>
    <!-- Sticky Action Bar (Internal) -->
    <div>
        <div class="mt-12 py-8 flex flex-col md:flex-row gap-4 items-center justify-between border-t border-outline-variant">
            <button
                class="w-full md:w-auto px-8 py-3 font-label-md text-primary border border-primary rounded-lg hover:bg-surface-container transition-colors">
                Save Draft
            </button>
        </div>
    </div>
</template>