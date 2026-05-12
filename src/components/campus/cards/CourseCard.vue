<script setup>
defineProps({
  title: String,
  category: String,
  duration: String,
  seats: Number,
  image: String,
});
</script>

<template>
  <div
    class="bg-surface rounded-xl border border-outline-variant overflow-hidden shadow-sm hover:shadow-lg transition-all"
  >
    <div class="h-40 overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover" />
    </div>

    <div class="p-6">
      <span
        class="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full mb-3 uppercase tracking-wider"
      >
        {{ category }}
      </span>

      <h3 class="font-headline-md text-headline-md mb-2 text-primary text-ellipsis min-h-16">
        {{ title }}
      </h3>

      <div
        class="flex items-center justify-between text-sm text-on-surface-variant mb-6"
      >
        <span class="flex items-center gap-1">
          <span class="material-symbols-outlined text-sm"> timer </span>

          {{ duration }}
        </span>

        <span
          class="flex items-center gap-1"
          :class="seats <= 5 ? 'text-tertiary font-bold' : ''"
        >
          <span class="material-symbols-outlined text-sm"> person </span>

          {{ seats }} Seats Left
        </span>
      </div>

      <button
        class="w-full bg-primary text-on-primary py-3 rounded-lg font-label-md hover:bg-primary-container transition-colors"
      >
        Register Now
      </button>
    </div>
  </div>
</template>
