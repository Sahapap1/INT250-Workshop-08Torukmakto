<script setup>
import ReservationRow
from "./ReservationRow.vue";

defineProps({
  reservations: Array,
});
</script>

<template>
  <div
    class="bg-surface rounded-2xl shadow-sm border border-outline-variant overflow-hidden"
  >
    <div class="overflow-x-auto">
      <table
        class="w-full text-left border-collapse"
      >
        <thead>
          <tr
            class="bg-primary text-on-primary"
          >
            <th class="px-8 py-4 font-label-md">
              Service / Course
            </th>

            <th class="px-8 py-4 font-label-md">
              Type
            </th>

            <th class="px-8 py-4 font-label-md">
              Date & Time
            </th>

            <th class="px-8 py-4 font-label-md">
              Status
            </th>

            <!-- <th
              class="px-8 py-4 font-label-md text-right"
            >
              Actions
            </th> -->
          </tr>
        </thead>

        <tbody
          class="divide-y divide-outline-variant"
        >
          <ReservationRow
            v-for="reservation in reservations"
            :key="reservation.id"
            :reservation="reservation"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>