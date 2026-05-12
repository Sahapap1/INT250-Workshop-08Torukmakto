<template>
  <section class="py-12 md:py-margin-desktop bg-primary text-on-primary transition-colors duration-300">
    <div class="max-w-[1280px] mx-auto px-4 md:px-margin-desktop">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-gutter">
        <div class="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-primary-container rounded-xl items-start group hover:bg-on-primary-fixed-variant transition-colors duration-300">
          <div class="w-16 h-16 bg-on-tertiary-container rounded-lg flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-white text-3xl">school</span>
          </div>
          <div>
            <h4 class="font-headline-md text-headline-md mb-2 text-primary-container">Student Portal</h4>
            <p class="font-body-md opacity-80 mb-4 text-on-primary-container">Access course materials, grades, and administrative services in one unified platform.</p>
            <a class="font-label-md flex items-center gap-2 text-secondary-fixed" href="#">
              Open Portal <span class="material-symbols-outlined">login</span>
            </a>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-primary-container rounded-xl items-start group hover:bg-on-primary-fixed-variant transition-colors duration-300">
          <div class="w-16 h-16 bg-on-tertiary-container rounded-lg flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-white text-3xl">assignment_ind</span>
          </div>
          <div>
            <h4 class="font-headline-md text-headline-md mb-2 text-primary-container">Admissions Office</h4>
            <p class="font-body-md opacity-80 mb-4 text-on-primary-container">Ready to start your journey? Get guidance on applications, scholarships, and campus life.</p>
            <a class="font-label-md flex items-center gap-2 text-secondary-fixed" href="#">
              Contact Admissions <span class="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
