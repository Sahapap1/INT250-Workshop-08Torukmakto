<script setup>
defineProps({
  steps: {
    type: Array,
    required: true,
    // [{ label, sub, status: 'done' | 'active' | 'pending' }]
  },
})
</script>

<template>
  <div class="bg-surface-container-low rounded-xl p-6 md:p-8 border border-outline-variant transition-colors duration-300">
    <h2 class="text-2xl font-semibold text-primary mb-8 flex items-center gap-2">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="currentColor"
        class="w-6 h-6 text-primary"
        >
        <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M3 3v18h18"
        />
        
        <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M7 14l3-3 3 2 4-5"
        />
        
        <circle cx="7" cy="14" r="1"/>
        <circle cx="10" cy="11" r="1"/>
        <circle cx="13" cy="13" r="1"/>
        <circle cx="17" cy="8" r="1"/>
      </svg>
      Academic Journey Tracker
    </h2>

    <div class="w-full overflow-x-auto pb-4">
      <div class="relative flex items-start justify-between min-w-[500px]">
      <!-- Track base line -->
      <div class="absolute h-1 bg-surface-container-highest w-full top-5 -translate-y-1/2 z-0"></div>
      <!-- Track progress line (up to active step) -->
      <div
        class="absolute h-1 bg-primary top-5 -translate-y-1/2 z-0"
        :style="{ width: progressWidth }"
      ></div>

      <div
        v-for="(step, index) in steps"
        :key="index"
        class="relative z-10 flex flex-col items-center gap-3"
        :class="{ 'opacity-40': step.status === 'pending' }"
      >
        <!-- Done -->
        <div
          v-if="step.status === 'done'"
          class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary"
        >
          <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="2" 
        stroke="currentColor"
        class="w-4 h-4"
    >
        <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M4.5 12.75 10.5 18.75 19.5 5.25"
        />
    </svg>
        </div>

        <!-- Active -->
        <div
          v-else-if="step.status === 'active'"
          class="w-12 h-12 rounded-full border-4 border-surface bg-primary flex items-center justify-center text-on-primary shadow-lg"
        >
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          class="w-6 h-6"
          >
          <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        <!-- Pending -->
        <div
          v-else
          class="w-10 h-10 rounded-full bg-surface-container border-2 border-outline-variant flex items-center justify-center text-on-surface-variant"
        >
          <span class="text-base" v-html="step.icon"></span>
        </div>

        <div class="text-center">
          <p
            class="text-xs font-semibold"
            :class="step.status !== 'pending' ? 'text-primary' : 'text-on-surface-variant'"
          >
            {{ step.label }}
          </p>
          <p
            class="text-[11px]"
            :class="step.status === 'active' ? 'text-primary' : 'text-outline'"
          >
            {{ step.sub }}
          </p>
        </div>
      </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    progressWidth() {
      const activeIndex = this.steps.findIndex(s => s.status === 'active')
      if (activeIndex < 0) return '0%'
      return `${(activeIndex / (this.steps.length - 1)) * 100}%`
    },
  },
}
</script>

<style scoped></style>
