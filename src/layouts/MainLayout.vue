<script setup>
import TopNavBar from "@/components/TopNavBar.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>
<template>
  <TopNavBar />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped></style>
