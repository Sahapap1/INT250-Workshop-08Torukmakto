<script setup>
defineProps({
  student: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="bg-surface-container-lowest rounded-xl p-6 md:p-8 border border-outline-variant shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start transition-colors duration-300">

    <!-- Avatar -->
    <div class="relative shrink-0">
      <div class="w-40 h-40 rounded-full overflow-hidden border-4 border-primary-container shadow-md">
        <img :alt="`${student.name} profile photo`" class="w-full h-full object-cover" :src="student.avatar" />
      </div>
      <button class="absolute bottom-2 right-2 bg-primary text-on-primary p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-4 h-4 text-white"
        >
            <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931ZM19.5 7.125 16.875 4.5"
            />
        </svg>

      </button>
    </div>

    <!-- Info -->
    <div class="flex-grow text-center md:text-left">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
        <div>
          <span class="text-on-primary-container text-xs font-medium bg-primary-container px-3 py-1 rounded-full mb-2 inline-block">
            {{ student.level }}
          </span>
          <h1 class="text-4xl font-bold text-primary">{{ student.name }}</h1>
          <p class="text-xl font-medium text-on-surface-variant">{{ student.faculty }}</p>
        </div>
        <div class="flex flex-col gap-2 md:items-end">
          <span class="text-on-surface-variant text-sm">STUDENT ID: {{ student.id }}</span>
          <div class="flex items-center gap-2">
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
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615A2.25 2.25 0 0 1 2.25 6.993V6.75"
            />
            </svg>
            <span class="text-sm">{{ student.email }}</span>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-outline-variant pt-6 mt-6 md:mt-0 transition-colors duration-300">
        <div class="flex items-center gap-3">
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
                d="M12 14 3 9l9-5 9 5-9 5Zm0 0 6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 1 12 20.055a11.952 11.952 0 0 1-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14Z"
            />
          </svg>
          <div>
            <p class="text-on-surface-variant text-xs">Degree</p>
            <p class="text-sm font-semibold text-on-surface">{{ student.degree }}</p>
          </div>
        </div>
        <div class="flex items-center gap-3 ">
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
                d="M6.75 3v2.25M17.25 3v2.25M3 8.25h18M4.5 5.25h15A1.5 1.5 0 0 1 21 6.75v12A1.5 1.5 0 0 1 19.5 20.25h-15A1.5 1.5 0 0 1 3 18.75v-12A1.5 1.5 0 0 1 4.5 5.25Z"
                />
          </svg>
          <div>
            <p class="text-on-surface-variant text-xs">Expected Graduation</p>
            <p class="text-sm font-semibold text-on-surface">{{ student.graduation }}</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
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
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
          </svg>
          <div>
            <p class="text-on-surface-variant text-xs">Primary Campus</p>
            <p class="text-sm font-semibold text-on-surface">{{ student.campus }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
