<template>
  <header class="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline shadow-sm dark:shadow-none sticky top-0 z-50">
    <div class="flex justify-between items-center w-full max-w-[1280px] mx-auto px-4 md:px-margin-desktop h-20">
      <RouterLink to="/" class="font-headline-md text-headline-md font-bold text-black">
        The University of West Holland
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <RouterLink to="/admissions" class="text-on-surface-variant dark:text-on-surface-variant font-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 scale-100 active:scale-95 transition-transform">Admissions</RouterLink>
        <RouterLink to="/projects" class="text-on-surface-variant dark:text-on-surface-variant font-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 scale-100 active:scale-95 transition-transform">Projects</RouterLink>
        <RouterLink to="/campus-services" class="text-on-surface-variant dark:text-on-surface-variant font-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 scale-100 active:scale-95 transition-transform">Campus Services</RouterLink>
      </nav>

      <!-- Desktop Actions -->
      <div class="hidden md:flex items-center gap-4">
        <button class="px-6 py-2 bg-primary-container text-on-primary-container font-label-md rounded-lg hover:opacity-90 transition-all active:scale-95">Student Login</button>
        <button class="px-6 py-2 bg-primary text-on-primary font-label-md rounded-lg hover:opacity-90 transition-all active:scale-95">Apply Now</button>
      </div>

      <!-- Mobile Hamburger Button -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-on-surface flex items-center justify-center p-2 rounded-md hover:bg-surface-variant transition-colors">
        <span class="material-symbols-outlined text-3xl">{{ isMobileMenuOpen ? 'close' : 'menu' }}</span>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div v-if="isMobileMenuOpen" class="md:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline-variant shadow-lg py-4 px-4 flex flex-col gap-4 z-40 transition-all">
      <nav class="flex flex-col gap-4">
        <RouterLink @click="isMobileMenuOpen = false" to="/admissions" class="text-on-surface-variant font-body-lg font-medium hover:text-primary transition-colors py-2 border-b border-outline-variant/30">Admissions</RouterLink>
        <RouterLink @click="isMobileMenuOpen = false" to="/projects" class="text-on-surface-variant font-body-lg font-medium hover:text-primary transition-colors py-2 border-b border-outline-variant/30">Projects</RouterLink>
        <RouterLink @click="isMobileMenuOpen = false" to="/campus-services" class="text-on-surface-variant font-body-lg font-medium hover:text-primary transition-colors py-2 border-b border-outline-variant/30">Campus Services</RouterLink>
      </nav>
      <div class="flex flex-col gap-3 mt-4">
        <button class="w-full py-3 bg-primary-container text-on-primary-container font-label-md rounded-lg hover:opacity-90 transition-all active:scale-95">Student Login</button>
        <button class="w-full py-3 bg-primary text-on-primary font-label-md rounded-lg hover:opacity-90 transition-all active:scale-95">Apply Now</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);
</script>