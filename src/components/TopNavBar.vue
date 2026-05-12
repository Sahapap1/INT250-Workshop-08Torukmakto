<template>
  <header class="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline shadow-sm dark:shadow-none sticky top-0 z-50">
    <div class="flex justify-between items-center w-full max-w-[1280px] mx-auto px-margin-desktop h-20">
      <div class="font-headline-md text-headline-md font-bold text-black">
        The University of West Holland
      </div>
      <nav class="hidden md:flex items-center gap-8">
        <RouterLink to="/admissions" class="text-on-surface-variant dark:text-on-surface-variant font-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 scale-100 active:scale-95 transition-transform" href="#">Admissions</RouterLink>
        <a class="text-on-surface-variant dark:text-on-surface-variant font-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 scale-100 active:scale-95 transition-transform" href="#">Programs</a>
        <a class="text-on-surface-variant dark:text-on-surface-variant font-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 scale-100 active:scale-95 transition-transform" href="#">Portal</a>
        <RouterLink to="/projects" class="text-on-surface-variant dark:text-on-surface-variant font-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 scale-100 active:scale-95 transition-transform">Projects</RouterLink>
        <a class="text-on-surface-variant dark:text-on-surface-variant font-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 scale-100 active:scale-95 transition-transform" href="#">Contact</a>
      </nav>
      <div class="flex items-center gap-4">
        <button class="px-6 py-2 bg-primary-container text-on-primary-container font-label-md rounded-lg hover:opacity-90 transition-all active:scale-95">Student Login</button>
        <button class="px-6 py-2 bg-primary text-on-primary font-label-md rounded-lg hover:opacity-90 transition-all active:scale-95">Apply Now</button>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>
