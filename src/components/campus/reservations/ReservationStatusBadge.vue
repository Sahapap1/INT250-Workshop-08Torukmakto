<script setup>
import { computed } from "vue";

const props = defineProps({
  status: String,
});

const statusClass = computed(() => {

  switch (props.status) {

    case "Confirmed":
      return `
        bg-secondary-container
        text-on-secondary-container
      `;

    case "Pending":
      return `
        bg-tertiary-fixed
        text-on-tertiary-fixed
      `;

    case "Cancelled":
      return `
        bg-error-container
        text-on-error-container
      `;

    default:
      return `
        bg-surface-container
        text-on-surface
      `;
  }
});
</script>

<template>
  <span
    :class="[
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      statusClass
    ]"
  >
    {{ status }}
  </span>
</template>