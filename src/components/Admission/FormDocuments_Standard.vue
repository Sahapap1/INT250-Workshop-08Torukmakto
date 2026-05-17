<!-- Form Documents (Standard) -->
<script setup>
import { admissionStore as store } from '@/stores/admissionStore';

const handleFileChange = (docKey, event) => {
  store.documents[docKey] = event.target.files.length > 0;
};
</script>

<template>
  <div class="mb-12">
    <h1 class="font-display-sm text-display-lg text-primary mb-6">
      Document Submission
    </h1>
    <p class="font-body-lg text-on-surface-variant max-w-3xl">
      Please upload the following required documents in English. Supported
      formats: PDF, JPG (Max 10MB per file).
    </p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
    <!-- Upload Card 1: Transcript -->
    <div
      class="bg-surface-container-lowest p-8 rounded-xl border transition-all group flex flex-col h-full"
      :class="store.documents.transcript ? 'border-green-500 bg-green-50/30' : 'border-outline-variant hover:border-primary'"
    >
      <div class="mb-6">
        <div class="flex items-center justify-between">
          <h3 class="font-headline-md text-headline-md text-primary">Transcript</h3>
          <span v-if="store.documents.transcript" class="material-symbols-outlined text-green-600" style="font-variation-settings: 'FILL' 1;">check_circle</span>
        </div>
        <p class="text-on-surface-variant text-body-md mt-2">
          English version of secondary or university transcripts
        </p>
      </div>
      <div
        class="upload-dashed flex-1 rounded-lg flex flex-col items-center justify-center p-10 cursor-pointer group-hover:bg-surface-container-low transition-colors relative"
      >
        <input @change="handleFileChange('transcript', $event)" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" type="file" />
        <span class="material-symbols-outlined text-5xl text-outline group-hover:text-primary transition-colors mb-4">cloud_upload</span>
        <p class="font-label-md text-on-surface-variant text-center">
          {{ store.documents.transcript ? '✓ File uploaded' : 'Click to upload or drag and drop' }}
        </p>
      </div>
    </div>
    <!-- Upload Card 2: Degree Certificate -->
    <div
      class="bg-surface-container-lowest p-8 rounded-xl border transition-all group flex flex-col h-full"
      :class="store.documents.degreeCertificate ? 'border-green-500 bg-green-50/30' : 'border-outline-variant hover:border-primary'"
    >
      <div class="mb-6">
        <div class="flex items-center justify-between">
          <h3 class="font-headline-md text-headline-md text-primary">Degree Certificate</h3>
          <span v-if="store.documents.degreeCertificate" class="material-symbols-outlined text-green-600" style="font-variation-settings: 'FILL' 1;">check_circle</span>
        </div>
        <p class="text-on-surface-variant text-body-md mt-2">
          Or certificate of expected graduation
        </p>
      </div>
      <div
        class="upload-dashed flex-1 rounded-lg flex flex-col items-center justify-center p-10 cursor-pointer group-hover:bg-surface-container-low transition-colors relative"
      >
        <input @change="handleFileChange('degreeCertificate', $event)" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" type="file" />
        <span class="material-symbols-outlined text-5xl text-outline group-hover:text-primary transition-colors mb-4">school</span>
        <p class="font-label-md text-on-surface-variant text-center">
          {{ store.documents.degreeCertificate ? '✓ File uploaded' : 'Click to upload or drag and drop' }}
        </p>
      </div>
    </div>

    <!-- Upload Card 3: SOP -->
    <div
      class="bg-surface-container-lowest p-8 rounded-xl border transition-all group flex flex-col h-full"
      :class="store.documents.statementOfPurpose ? 'border-green-500 bg-green-50/30' : 'border-outline-variant hover:border-primary'"
    >
      <div class="mb-6">
        <div class="flex items-center justify-between">
          <h3 class="font-headline-md text-headline-md text-primary">Statement of Purpose</h3>
          <span v-if="store.documents.statementOfPurpose" class="material-symbols-outlined text-green-600" style="font-variation-settings: 'FILL' 1;">check_circle</span>
        </div>
        <p class="text-on-surface-variant text-body-md mt-2">
          Motivation letter detailing your academic goals and interests.
        </p>
      </div>
      <div
        class="upload-dashed flex-1 rounded-lg flex flex-col items-center justify-center p-10 cursor-pointer group-hover:bg-surface-container-low transition-colors relative"
      >
        <input @change="handleFileChange('statementOfPurpose', $event)" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" type="file" />
        <span class="material-symbols-outlined text-5xl text-outline group-hover:text-primary transition-colors mb-4">description</span>
        <p class="font-label-md text-on-surface-variant text-center">
          {{ store.documents.statementOfPurpose ? '✓ File uploaded' : 'Click to upload or drag and drop' }}
        </p>
      </div>
    </div>
    <!-- Upload Card 4: Resume / CV -->
    <div
      class="bg-surface-container-lowest p-8 rounded-xl border transition-all group flex flex-col h-full"
      :class="store.documents.resume ? 'border-green-500 bg-green-50/30' : 'border-outline-variant hover:border-primary'"
    >
      <div class="mb-6">
        <div class="flex items-center justify-between">
          <h3 class="font-headline-md text-headline-md text-primary">Resume / CV</h3>
          <span v-if="store.documents.resume" class="material-symbols-outlined text-green-600" style="font-variation-settings: 'FILL' 1;">check_circle</span>
        </div>
        <p class="text-on-surface-variant text-body-md mt-2">
          A current overview of your professional and academic history.
        </p>
      </div>
      <div
        class="upload-dashed flex-1 rounded-lg flex flex-col items-center justify-center p-10 cursor-pointer group-hover:bg-surface-container-low transition-colors relative"
      >
        <input @change="handleFileChange('resume', $event)" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" type="file" />
        <span class="material-symbols-outlined text-5xl text-outline group-hover:text-primary transition-colors mb-4">badge</span>
        <p class="font-label-md text-on-surface-variant text-center">
          {{ store.documents.resume ? '✓ File uploaded' : 'Click to upload or drag and drop' }}
        </p>
      </div>
    </div>
    <!-- Upload Card 5: Standardized Tests -->
    <div
      class="bg-surface-container-lowest p-8 rounded-xl border transition-all group flex flex-col h-full"
      :class="store.documents.standardizedTests ? 'border-green-500 bg-green-50/30' : 'border-outline-variant hover:border-primary'"
    >
      <div class="mb-6 flex items-start justify-between">
        <div>
          <h3 class="font-headline-md text-headline-md text-primary">Standardized Tests</h3>
          <p class="text-on-surface-variant text-body-md mt-2">
            SAT/ACT or GMAT/GRE results if available.
          </p>
        </div>
        <div class="flex items-center gap-2">
          <span v-if="store.documents.standardizedTests" class="material-symbols-outlined text-green-600" style="font-variation-settings: 'FILL' 1;">check_circle</span>
          <span class="bg-surface-container-high text-on-surface-variant text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-widest">Optional</span>
        </div>
      </div>
      <div
        class="upload-dashed flex-1 rounded-lg flex flex-col items-center justify-center p-10 cursor-pointer group-hover:bg-surface-container-low transition-colors relative"
      >
        <input @change="handleFileChange('standardizedTests', $event)" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" type="file" />
        <span class="material-symbols-outlined text-5xl text-outline group-hover:text-primary transition-colors mb-4">quiz</span>
        <p class="font-label-md text-on-surface-variant text-center">
          {{ store.documents.standardizedTests ? '✓ File uploaded' : 'Click to upload or drag and drop' }}
        </p>
      </div>
    </div>
  </div>
</template>
