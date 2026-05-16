<script setup>
defineProps({
  projects: {
    type: Array,
    required: true,
    // [{ title, supervisor, status: 'progress'|'completed', icon, members, statusLabel }]
  },
})

const emit = defineEmits(['add'])
</script>

<template>
  <div class="bg-gray-100 rounded-xl p-6 md:p-8 border-t-4 border-teal-500 shadow-sm">
    <h2 class="text-2xl font-semibold text-[#071A3B] mb-6">Research Projects</h2>
    <div class="space-y-6">

      <div
        v-for="project in projects"
        :key="project.title"
        class="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
        :class="{ 'opacity-75': project.status === 'completed' }"
      >
        <div class="flex justify-between items-start mb-3">
          <!-- Badge -->
          <span
            class="text-[10px] font-semibold px-2 py-1 rounded"
            :class="project.status === 'progress'
              ? 'bg-amber-600 text-white'
              : 'bg-[#071A3B] text-white'"
          >
            {{ project.status === 'progress' ? 'IN PROGRESS' : 'COMPLETED' }}
          </span>
          <span class="text-[#071A3B] opacity-30" v-html="project.icon"></span>
        </div>

        <h3 class="text-sm font-bold text-[#071A3B] mb-1">{{ project.title }}</h3>
        <p class="text-xs text-gray-400 mb-4">Supervisor: {{ project.supervisor }}</p>

        <!-- Members avatars -->
        <div v-if="project.members" class="flex -space-x-2">
          <div
            v-for="member in project.members"
            :key="member.initials"
            class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold"
            :class="member.color"
          >
            {{ member.initials }}
          </div>
        </div>

        <!-- Status label -->
        <p v-if="project.statusLabel" class="text-xs text-[#071A3B] font-bold mt-1">
          {{ project.statusLabel }}
        </p>
      </div>

      <!-- Add new -->
      <button
        class="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-400 gap-2 hover:border-indigo-500 hover:text-indigo-500 transition-all cursor-pointer"
        @click="emit('add')"
      >
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="2" 
        stroke="#2A4386"
        class="w-6 h-6"
        >
        <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M12 4.5v15m7.5-7.5h-15"
        />
        </svg>
        <p class="text-xs font-medium">Initiate New Research</p>
      </button>

    </div>
  </div>
</template>

<style scoped></style>
