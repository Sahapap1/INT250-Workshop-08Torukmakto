<script setup>
import TopNavBar from "@/components/TopNavBar.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>
<template>
  <div class="overflow-x-hidden">
    <TopNavBar />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped></style>
