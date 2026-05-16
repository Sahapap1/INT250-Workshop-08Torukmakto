<script setup>
defineProps({
  courses: {
    type: Array,
    required: true,
    // [{ code, name, grade, percent, lecturer, credits }]
  },
  notice: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div>
        <h2 class="text-2xl font-semibold text-[#071A3B]">Academic Progress</h2>
        <p class="text-sm text-gray-400">Real-time performance across current modules.</p>
      </div>
      <button class="text-[#071A3B] text-sm flex items-center gap-1 hover:underline">
        View Full Transcript
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.8" 
          stroke="currentColor"
          class="w-6 h-6 text-[#2A4386]"
          >
          <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M13.5 4.5H19.5V10.5"
          />
          
          <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M10.5 13.5 19.5 4.5"
          />
          
          <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M19.5 13.5V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18V6A1.5 1.5 0 0 1 6 4.5H10.5"
          />
      </svg>
      </button>
    </div>

    <!-- Course list -->
    <div class="space-y-6">
      <div
        v-for="course in courses"
        :key="course.code"
        class="p-4 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors"
      >
        <div class="flex justify-between mb-2">
          <span class="text-sm font-bold text-[#071A3B]">{{ course.code }}: {{ course.name }}</span>
          <span class="text-xs text-[#071A3B]">Grade: {{ course.grade }} ({{ course.percent }}%)</span>
        </div>
        <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div class="bg-[#071A3B] h-full rounded-full" :style="{ width: `${course.percent}%` }"></div>
        </div>
        <div class="mt-2 flex justify-between text-[11px] text-gray-400">
          <span>Lecturer: {{ course.lecturer }}</span>
          <span>{{ course.credits }} Credits</span>
        </div>
      </div>
    </div>

    <!-- Notice -->
    <div v-if="notice" class="mt-10 p-6 bg-[#071A3B] rounded-lg text-white">
      <div class="flex gap-4 items-start">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="1.8" 
        stroke="white"
        class="w-10 h-10"
        >
        <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M12 9v4.5"
        />
        
        <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M12 16.5h.008v.008H12v-.008Z"
        />
        
        <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
       </svg>
        <div>
          <h4 class="text-sm font-bold">Academic Monitoring Context</h4>
          <p class="text-xs opacity-80 mt-1">{{ notice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
