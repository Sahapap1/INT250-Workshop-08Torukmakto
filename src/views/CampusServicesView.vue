<script setup>
import CampusHero from "@/components/campus/CampusHero.vue";
import CampusFeatures from "@/components/campus/CampusFeatures.vue";
import LanguageCoursesSection from "@/components/campus/LanguageCoursesSection.vue";
import SportsFacilitiesSection from "@/components/campus/SportsFacilitiesSection.vue";
import ReservationsTable from "@/components/campus/ReservationsTable.vue";
import BookingModal from "@/components/campus/BookingModal.vue";
</script>

<template>
  <CampusHero />

  <CampusFeatures />

  <LanguageCoursesSection />

  <SportsFacilitiesSection />

  <ReservationsTable />

  <BookingModal />
</template>