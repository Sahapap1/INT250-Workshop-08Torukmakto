<template>
  <header
    class="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline shadow-sm dark:shadow-none sticky top-0 z-50">
    <div class="flex justify-between items-center w-full max-w-[1280px] mx-auto px-margin-desktop h-20">
      <RouterLink to="/" class="font-headline-md text-headline-md font-bold text-black">
        The University of West Holland
      </RouterLink>
      <nav class="hidden md:flex items-center gap-8">
        <RouterLink to="/admissions"
          class="text-on-surface-variant dark:text-on-surface-variant font-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 scale-100 active:scale-95 transition-transform">
          Admissions</RouterLink>
        <!-- <a class="text-on-surface-variant dark:text-on-surface-variant font-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 scale-100 active:scale-95 transition-transform" href="#">Programs</a> -->
        <!-- <a class="text-on-surface-variant dark:text-on-surface-variant font-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 scale-100 active:scale-95 transition-transform" href="#">Portal</a> -->
        <RouterLink to="/projects"
          class="text-on-surface-variant dark:text-on-surface-variant font-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 scale-100 active:scale-95 transition-transform">
          Projects</RouterLink>
        <RouterLink to="/campus-services"
          class="text-on-surface-variant dark:text-on-surface-variant font-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 scale-100 active:scale-95 transition-transform">
          Campus Services</RouterLink>
        <!-- <a class="text-on-surface-variant dark:text-on-surface-variant font-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 scale-100 active:scale-95 transition-transform" href="#">Contact</a> -->
      </nav>
      <div class="flex items-center gap-4">
        <RouterLink to="/login"><button
            class="px-6 py-2 bg-primary-container text-on-primary-container font-label-md rounded-lg hover:opacity-90 transition-all active:scale-95">Student
            Login</button></RouterLink>
        <RouterLink to="/admissions">
          <button
            class="px-6 py-2 bg-primary text-on-primary font-label-md rounded-lg hover:opacity-90 transition-all active:scale-95">Apply
            Now</button>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isMobileMenuOpen = ref(false);
const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

onMounted(() => {
  if (document.documentElement.classList.contains('dark')) {
    isDark.value = true;
  }
});
</script>