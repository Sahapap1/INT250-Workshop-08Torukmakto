<script setup>
import ReservationTable
from "./ReservationTable.vue";

defineProps({
  reservations: {
    type: Array,
    default: () => []
  }
});




</script>

<template>
  <section
    class="py-spacing-8 max-w-[1280px] mx-auto px-margin-desktop py-10"
  >
    <h2
      class="font-headline-lg text-headline-lg text-primary mb-8"
    >
      My Upcoming Reservations
    </h2>

    <ReservationTable
      :reservations="reservations"
    />
  </section>
</template>