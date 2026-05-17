<script setup>
import ReservationStatusBadge
from "./ReservationStatusBadge.vue";

const props = defineProps({
  reservation: Object,
});


</script>

<template>
  <tr
    class="hover:bg-surface-container transition-colors"
  >
    <td class="px-8 py-6">
      <p
        class="font-bold text-primary"
      >
        {{ reservation.title }}
      </p>

      <p
        class="text-xs text-on-surface-variant"
      >
        {{ reservation.department }}
      </p>
    </td>

    <td class="px-8 py-6 text-sm">
      {{ reservation.type }}
    </td>

    <td class="px-8 py-6 text-sm">
      {{ reservation.startDate }}
    </td>

    <td class="px-8 py-6">
      <ReservationStatusBadge
        :status="reservation.status"
      />
    </td>

    <!-- <td class="px-8 py-6 text-right">
      <button
        class="text-primary hover:text-primary-container"
      >
        <span
          class="material-symbols-outlined"
        >
          more_horiz
        </span>
      </button>
    </td> -->
  </tr>
</template>