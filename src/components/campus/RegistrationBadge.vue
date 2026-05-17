<script setup>
defineProps({
  title: {
    type: String,
    default: "Success"
  },

  message: {
    type: String,
    default: "Completed successfully"
  },

  icon: {
    type: String,
    default: "check"
  },

  colorClass: {
    type: String,
    default: "bg-green-500"
  }
});
</script>

<template>
  <div
    class="fixed bottom-6 right-6 z-50 w-[360px] bg-white rounded-2xl shadow-2xl border border-outline-variant overflow-hidden animate-in slide-in-from-bottom duration-500">
    <div class="text-white p-4 flex items-center gap-3" :class="[
      colorClass
    ]">
      <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
        <span class="material-symbols-outlined text-3xl">
          {{ icon }}
        </span>
      </div>

      <div>
        <h3 class="font-bold text-lg">
          {{ title }}
        </h3>

        <p class="text-sm text-white/80">
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>