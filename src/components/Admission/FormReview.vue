<script setup></script>

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
            class="bg-surface-container-low rounded-xl p-8 border border-outline-variant relative overflow-hidden group">
            <div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div class="flex justify-between items-start mb-6">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary" data-icon="person">person</span>
                    <h3 class="font-headline-md text-headline-md">Personal Information</h3>
                </div>
                <button class="flex items-center gap-1 text-primary font-label-md hover:underline">
                    <span class="material-symbols-outlined text-[18px]" data-icon="edit">edit</span> Edit
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div>
                    <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">Full Name
                    </p>
                    <p class="font-body-md font-semibold">Julian Van Der Berg</p>
                </div>
                <div>
                    <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">Date of
                        Birth</p>
                    <p class="font-body-md font-semibold">14 May 2005</p>
                </div>
                <div>
                    <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">Nationality
                    </p>
                    <p class="font-body-md font-semibold">Netherlands</p>
                </div>
                <div>
                    <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">Contact
                        Email</p>
                    <p class="font-body-md font-semibold">j.vanderberg@example.nl</p>
                </div>
            </div>
        </section>
        <!-- Section: Academic Background -->
        <section
            class="bg-surface-container-low rounded-xl p-8 border border-outline-variant relative overflow-hidden group">
            <div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div class="flex justify-between items-start mb-6">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary" data-icon="school">school</span>
                    <h3 class="font-headline-md text-headline-md">Academic Background</h3>
                </div>
                <button class="flex items-center gap-1 text-primary font-label-md hover:underline">
                    <span class="material-symbols-outlined text-[18px]" data-icon="edit">edit</span> Edit
                </button>
            </div>
            <div class="space-y-6">
                <div>
                    <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">Last
                        Institution</p>
                    <p class="font-body-md font-semibold">St. Bavo Gymnasium, Haarlem</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                    <div>
                        <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">VWO
                            Profile</p>
                        <p class="font-body-md font-semibold">Natuur en Techniek (N&amp;T)</p>
                    </div>
                    <div>
                        <p class="text-on-surface-variant text-[12px] uppercase font-bold tracking-widest mb-1">Intended
                            Major</p>
                        <p class="font-body-md font-semibold text-primary font-bold">BSc. Artificial Intelligence &amp;
                            Society</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section: Documents -->
        <section
            class="bg-surface-container-low rounded-xl p-8 border border-outline-variant relative overflow-hidden group">
            <div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div class="flex justify-between items-start mb-6">
                <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary" data-icon="description">description</span>
                    <h3 class="font-headline-md text-headline-md">Document Submission</h3>
                </div>
                <button class="flex items-center gap-1 text-primary font-label-md hover:underline">
                    <span class="material-symbols-outlined text-[18px]" data-icon="edit">edit</span> Edit
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                    class="flex items-center justify-between p-4 bg-white rounded-lg border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-error"
                            data-icon="picture_as_pdf">picture_as_pdf</span>
                        <div>
                            <p class="font-body-md font-semibold text-[14px]">Final_Transcript_2024.pdf</p>
                            <p class="text-[12px] text-on-surface-variant">VWO Secondary Diploma</p>
                        </div>
                    </div>
                    <span class="material-symbols-outlined text-on-primary-container" data-icon="check_circle"
                        style="font-variation-settings: 'FILL' 1;">check_circle</span>
                </div>
                <div
                    class="flex items-center justify-between p-4 bg-white rounded-lg border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-secondary" data-icon="badge">badge</span>
                        <div>
                            <p class="font-body-md font-semibold text-[14px]">Passport_Copy_Julian.jpg</p>
                            <p class="text-[12px] text-on-surface-variant">Identification Document</p>
                        </div>
                    </div>
                    <span class="material-symbols-outlined text-on-primary-container" data-icon="check_circle"
                        style="font-variation-settings: 'FILL' 1;">check_circle</span>
                </div>
                <div
                    class="flex items-center justify-between p-4 bg-white rounded-lg border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-primary-container"
                            data-icon="history_edu">history_edu</span>
                        <div>
                            <p class="font-body-md font-semibold text-[14px]">Motivation_Letter_Final.docx</p>
                            <p class="text-[12px] text-on-surface-variant">Personal Statement</p>
                        </div>
                    </div>
                    <span class="material-symbols-outlined text-on-primary-container" data-icon="check_circle"
                        style="font-variation-settings: 'FILL' 1;">check_circle</span>
                </div>
                <div
                    class="flex items-center justify-between p-4 bg-white rounded-lg border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-tertiary-fixed-dim"
                            data-icon="language">language</span>
                        <div>
                            <p class="font-body-md font-semibold text-[14px]">IELTS_Test_Results.pdf</p>
                            <p class="text-[12px] text-on-surface-variant">English Proficiency</p>
                        </div>
                    </div>
                    <span class="material-symbols-outlined text-on-primary-container" data-icon="check_circle"
                        style="font-variation-settings: 'FILL' 1;">check_circle</span>
                </div>
            </div>
        </section>
    </div>
    <!-- Final Declaration -->
    <div class="mt-12 p-8 bg-surface-container rounded-xl border-2 border-primary-container/10">
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
        class="mt-12 py-8 flex flex-col md:flex-row gap-4 items-center justify-between border-t border-outline-variant">
        <button
            class="w-full md:w-auto px-8 py-3 font-label-md text-primary border border-primary rounded-lg hover:bg-surface-container transition-colors">
            Save Draft
        </button>
    </div>
</template>