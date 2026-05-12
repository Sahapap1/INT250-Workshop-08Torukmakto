<template>
  <header class="bg-surface border-b border-outline-variant shadow-sm dark:shadow-none sticky top-0 z-50 transition-colors duration-300">
    <div class="flex justify-between items-center w-full max-w-[1280px] mx-auto px-4 md:px-margin-desktop h-20">
      <div class="font-headline-md text-headline-md font-bold text-on-surface truncate max-w-[60%] md:max-w-none">
        The University of West Holland
      </div>
      
      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <RouterLink to="/admissions" class="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200">Admissions</RouterLink>
        <a class="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200" href="#">Programs</a>
        <a class="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200" href="#">Portal</a>
        <RouterLink to="/projects" class="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200">Projects</RouterLink>
        <a class="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200" href="#">Contact</a>
      </nav>
      
      <!-- Actions (Desktop) -->
      <div class="hidden md:flex items-center gap-4">
        <button class="px-6 py-2 bg-primary-container text-on-primary-container font-label-md rounded-lg hover:opacity-90 transition-all active:scale-95">Student Login</button>
        <button class="px-6 py-2 bg-primary text-on-primary font-label-md rounded-lg hover:opacity-90 transition-all active:scale-95">Apply Now</button>
      </div>

      <!-- Mobile Controls (Hamburger) -->
      <div class="flex items-center gap-2 md:hidden">
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="p-2 text-on-surface-variant rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span class="material-symbols-outlined">{{ isMobileMenuOpen ? 'close' : 'menu' }}</span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div v-if="isMobileMenuOpen" class="md:hidden border-t border-outline-variant bg-surface absolute w-full left-0 top-20 shadow-lg transition-colors duration-300">
      <nav class="flex flex-col p-4 gap-4">
        <RouterLink to="/admissions" class="text-on-surface-variant font-body-md hover:text-primary p-2">Admissions</RouterLink>
        <a class="text-on-surface-variant font-body-md hover:text-primary p-2" href="#">Programs</a>
        <a class="text-on-surface-variant font-body-md hover:text-primary p-2" href="#">Portal</a>
        <RouterLink to="/projects" class="text-on-surface-variant font-body-md hover:text-primary p-2">Projects</RouterLink>
        <a class="text-on-surface-variant font-body-md hover:text-primary p-2" href="#">Contact</a>
        <hr class="border-outline-variant my-2" />
        <button class="w-full px-6 py-3 bg-primary-container text-on-primary-container font-label-md rounded-lg text-center">Student Login</button>
        <button class="w-full px-6 py-3 bg-primary text-on-primary font-label-md rounded-lg text-center">Apply Now</button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
</script>
