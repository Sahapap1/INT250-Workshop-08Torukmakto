<script setup>
import TopNavBar from './components/TopNavBar.vue';
import HeroSection from './components/HeroSection.vue';
import ProgramsGrid from './components/ProgramsGrid.vue';
import ActionHub from './components/ActionHub.vue';
import StatsCounter from './components/StatsCounter.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <TopNavBar />
  <main>
    <HeroSection />
    <ProgramsGrid />
    <ActionHub />
    <StatsCounter />
  </main>
  <AppFooter />
</template>

<style scoped></style>
