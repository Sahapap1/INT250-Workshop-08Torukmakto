<script setup></script>

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
      class="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant hover:border-primary transition-all group flex flex-col h-full"
    >
      <div class="mb-6">
        <h3 class="font-headline-md text-headline-md text-primary">
          Transcript
        </h3>
        <p class="text-on-surface-variant text-body-md mt-2">
          English version of secondary or university transcripts
        </p>
      </div>
      <div
        class="upload-dashed flex-1 rounded-lg flex flex-col items-center justify-center p-10 cursor-pointer group-hover:bg-surface-container-low transition-colors"
      >
        <span
          class="material-symbols-outlined text-5xl text-outline group-hover:text-primary transition-colors mb-4"
          >cloud_upload</span
        >
        <p class="font-label-md text-on-surface-variant text-center">
          Click to upload or drag and drop
        </p>
      </div>
    </div>
    <!-- Upload Card 2: Degree Certificate -->
    <div
      class="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant hover:border-primary transition-all group flex flex-col h-full"
    >
      <div class="mb-6">
        <h3 class="font-headline-md text-headline-md text-primary">
          Degree Certificate
        </h3>
        <p class="text-on-surface-variant text-body-md mt-2">
          Or certificate of expected graduation
        </p>
      </div>
      <div
        class="upload-dashed flex-1 rounded-lg flex flex-col items-center justify-center p-10 cursor-pointer group-hover:bg-surface-container-low transition-colors"
      >
        <span
          class="material-symbols-outlined text-5xl text-outline group-hover:text-primary transition-colors mb-4"
          >school</span
        >
        <p class="font-label-md text-on-surface-variant text-center">
          Click to upload or drag and drop
        </p>
      </div>
    </div>
    <!-- Upload Card 3: English Proficiency -->
    <div
      class="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant hover:border-primary transition-all group flex flex-col h-full"
    >
      <div class="mb-6">
        <h3 class="font-headline-md text-headline-md text-primary">
          English Proficiency
        </h3>
        <p class="text-on-surface-variant text-body-md mt-2">
          IELTS (Academic), TOEFL, or equivalent results.
        </p>
      </div>
      <div
        class="upload-dashed flex-1 rounded-lg flex flex-col items-center justify-center p-10 cursor-pointer group-hover:bg-surface-container-low transition-colors"
      >
        <span
          class="material-symbols-outlined text-5xl text-outline group-hover:text-primary transition-colors mb-4"
          >translate</span
        >
        <p class="font-label-md text-on-surface-variant text-center">
          Click to upload or drag and drop
        </p>
      </div>
    </div>
    <!-- Upload Card 4: SOP -->
    <div
      class="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant hover:border-primary transition-all group flex flex-col h-full"
    >
      <div class="mb-6">
        <h3 class="font-headline-md text-headline-md text-primary">
          Statement of Purpose
        </h3>
        <p class="text-on-surface-variant text-body-md mt-2">
          Motivation letter detailing your academic goals and interests.
        </p>
      </div>
      <div
        class="upload-dashed flex-1 rounded-lg flex flex-col items-center justify-center p-10 cursor-pointer group-hover:bg-surface-container-low transition-colors"
      >
        <span
          class="material-symbols-outlined text-5xl text-outline group-hover:text-primary transition-colors mb-4"
          >description</span
        >
        <p class="font-label-md text-on-surface-variant text-center">
          Click to upload or drag and drop
        </p>
      </div>
    </div>
    <!-- Upload Card 5: Letters of Recommendation -->
    <div
      class="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant hover:border-primary transition-all group flex flex-col h-full"
    >
      <div class="mb-6">
        <h3 class="font-headline-md text-headline-md text-primary">
          Recommendations
        </h3>
        <p class="text-on-surface-variant text-body-md mt-2">
          2-3 letters from academic or professional references.
        </p>
      </div>
      <div
        class="upload-dashed flex-1 rounded-lg flex flex-col items-center justify-center p-10 cursor-pointer group-hover:bg-surface-container-low transition-colors"
      >
        <span
          class="material-symbols-outlined text-5xl text-outline group-hover:text-primary transition-colors mb-4"
          >verified_user</span
        >
        <p class="font-label-md text-on-surface-variant text-center">
          Click to upload or drag and drop
        </p>
      </div>
    </div>
    <!-- Upload Card 6: Resume / CV -->
    <div
      class="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant hover:border-primary transition-all group flex flex-col h-full"
    >
      <div class="mb-6">
        <h3 class="font-headline-md text-headline-md text-primary">
          Resume / CV
        </h3>
        <p class="text-on-surface-variant text-body-md mt-2">
          A current overview of your professional and academic history.
        </p>
      </div>
      <div
        class="upload-dashed flex-1 rounded-lg flex flex-col items-center justify-center p-10 cursor-pointer group-hover:bg-surface-container-low transition-colors"
      >
        <span
          class="material-symbols-outlined text-5xl text-outline group-hover:text-primary transition-colors mb-4"
          >badge</span
        >
        <p class="font-label-md text-on-surface-variant text-center">
          Click to upload or drag and drop
        </p>
      </div>
    </div>
    <!-- Upload Card 7: Standardized Tests -->
    <div
      class="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant hover:border-primary transition-all group flex flex-col h-full"
    >
      <div class="mb-6 flex items-start justify-between">
        <div>
          <h3 class="font-headline-md text-headline-md text-primary">
            Standardized Tests
          </h3>
          <p class="text-on-surface-variant text-body-md mt-2">
            SAT/ACT or GMAT/GRE results if available.
          </p>
        </div>
        <span
          class="bg-surface-container-high text-on-surface-variant text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-widest"
          >Optional</span
        >
      </div>
      <div
        class="upload-dashed flex-1 rounded-lg flex flex-col items-center justify-center p-10 cursor-pointer group-hover:bg-surface-container-low transition-colors"
      >
        <span
          class="material-symbols-outlined text-5xl text-outline group-hover:text-primary transition-colors mb-4"
          >quiz</span
        >
        <p class="font-label-md text-on-surface-variant text-center">
          Click to upload or drag and drop
        </p>
      </div>
    </div>
    <!-- Upload Card 8: Course Descriptions -->
    <div
      class="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant hover:border-primary transition-all group flex flex-col h-full"
    >
      <div class="mb-6">
        <h3 class="font-headline-md text-headline-md text-primary">
          Course Descriptions
        </h3>
        <p class="text-on-surface-variant text-body-md mt-2">
          Official syllabus detailing the content of your previous coursework.
        </p>
      </div>
      <div
        class="upload-dashed flex-1 rounded-lg flex flex-col items-center justify-center p-10 cursor-pointer group-hover:bg-surface-container-low transition-colors"
      >
        <span
          class="material-symbols-outlined text-5xl text-outline group-hover:text-primary transition-colors mb-4"
          >travel_explore</span
        >
        <p class="font-label-md text-on-surface-variant text-center">
          Click to upload or drag and drop
        </p>
      </div>
    </div>
  </div>
</template>
