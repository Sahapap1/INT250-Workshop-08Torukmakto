<template>
  <header class="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline shadow-sm dark:shadow-none sticky top-0 z-50">
    <div class="flex justify-between items-center w-full max-w-[1280px] mx-auto px-4 lg:px-margin-desktop h-20">
      <RouterLink to="/" class="font-headline-md text-headline-md font-bold text-on-surface">
        The University of West Holland
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-8">
        <RouterLink v-if="!isLoggedIn" to="/admissions" class="text-on-surface-variant dark:text-on-surface-variant font-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 scale-100 active:scale-95 transition-transform">Admissions</RouterLink>
        <RouterLink to="/projects" class="text-on-surface-variant dark:text-on-surface-variant font-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 scale-100 active:scale-95 transition-transform">Projects</RouterLink>
        <RouterLink to="/campus-services" class="text-on-surface-variant dark:text-on-surface-variant font-body-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 scale-100 active:scale-95 transition-transform">Campus Services</RouterLink>
      </nav>

      <!-- Desktop Actions -->
      <div class="hidden lg:flex items-center gap-4">
        <RouterLink v-if="!isLoggedIn" to="/login"><button
            class="px-6 py-2 bg-primary-container text-on-primary-container font-label-md rounded-lg hover:opacity-90 transition-all active:scale-95">Student
            Login</button></RouterLink>
        <RouterLink v-if="!isLoggedIn" to="/admissions">
          <button
            class="px-6 py-2 bg-primary text-on-primary font-label-md rounded-lg hover:opacity-90 transition-all active:scale-95">Apply
            Now</button>
        </RouterLink>
        <button @click="toggleDarkMode" class="text-on-surface hover:text-primary transition-colors p-2 flex items-center justify-center rounded-full hover:bg-surface-variant" title="Toggle Dark Mode">
          <span class="material-symbols-outlined text-3xl">{{ isDark ? 'light_mode' : 'dark_mode' }}</span>
        </button>
        <!-- profile button -->
        <RouterLink v-if="isLoggedIn" to="/student-profile" class="text-on-surface hover:text-primary transition-colors p-2 flex items-center justify-center rounded-full hover:bg-surface-variant" title="Student Profile">
          <span class="material-symbols-outlined text-3xl">account_circle</span>
        </RouterLink>
        <!-- logout button -->
        <button v-if="isLoggedIn" @click="handleLogout" class="text-on-surface hover:text-error transition-colors p-2 flex items-center justify-center rounded-full hover:bg-surface-variant" title="Logout">
          <span class="material-symbols-outlined text-3xl">logout</span>
        </button>
      </div>

      <!-- Mobile Hamburger Button -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="lg:hidden text-on-surface flex items-center justify-center p-2 rounded-md hover:bg-surface-variant transition-colors">
        <span class="material-symbols-outlined text-3xl">{{ isMobileMenuOpen ? 'close' : 'menu' }}</span>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div v-if="isMobileMenuOpen" class="lg:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline-variant shadow-lg py-4 px-4 flex flex-col gap-4 z-40 transition-all">
      <nav class="flex flex-col gap-4">
        <RouterLink v-if="!isLoggedIn" @click="isMobileMenuOpen = false" to="/admissions" class="text-on-surface-variant font-body-lg font-medium hover:text-primary transition-colors py-2 border-b border-outline-variant/30">Admissions</RouterLink>
        <RouterLink @click="isMobileMenuOpen = false" to="/projects" class="text-on-surface-variant font-body-lg font-medium hover:text-primary transition-colors py-2 border-b border-outline-variant/30">Projects</RouterLink>
        <RouterLink @click="isMobileMenuOpen = false" to="/campus-services" class="text-on-surface-variant font-body-lg font-medium hover:text-primary transition-colors py-2 border-b border-outline-variant/30">Campus Services</RouterLink>
        <RouterLink v-if="isLoggedIn" @click="isMobileMenuOpen = false" to="/student-profile" class="text-on-surface-variant font-body-lg font-medium hover:text-primary transition-colors py-2 border-b border-outline-variant/30 flex items-center gap-2">
          <span class="material-symbols-outlined">account_circle</span> Profile
        </RouterLink>
        <button v-if="isLoggedIn" @click="handleLogout" class="text-on-surface-variant font-body-lg font-medium hover:text-error transition-colors py-2 border-b border-outline-variant/30 flex items-center gap-2 w-full text-left">
          <span class="material-symbols-outlined">logout</span> Logout
        </button>
        <button @click="toggleDarkMode" class="text-on-surface-variant font-body-lg font-medium hover:text-primary transition-colors py-2 border-b border-outline-variant/30 flex items-center gap-2 w-full text-left">
          <span class="material-symbols-outlined">{{ isDark ? 'light_mode' : 'dark_mode' }}</span> {{ isDark ? 'Light Mode' : 'Dark Mode' }}
        </button>
      </nav>
      <div class="flex flex-col gap-3 mt-4" v-if="!isLoggedIn">
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
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { authStore } from '@/stores/appStore';

const router = useRouter();

const isMobileMenuOpen = ref(false);
const isDark = ref(false);

// Reactive: updates automatically when authStore.user changes
const isLoggedIn = computed(() => authStore.isAuthenticated());

const handleLogout = () => {
  authStore.logout();
  isMobileMenuOpen.value = false;
  router.push('/');
};

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