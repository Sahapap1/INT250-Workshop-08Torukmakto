<script setup></script>
<template>
  <section class="relative w-full h-[600px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img
        alt="University Campus"
        class="w-full h-full object-cover"
        data-alt="A cinematic, wide-angle shot of the historic University of West Holland campus at sunrise. The architecture features grand stone buildings with ivy-covered walls and modern glass extensions. Soft, golden morning light filters through ancient oak trees across perfectly manicured green lawns. The atmosphere is quiet, prestigious, and academic, using a palette of deep blues, stone greys, and warm sunlight."
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOW1L0ze7gPcMCc5OqPm_bsnVdqSqqi7dJbLowR4IQQ6e1n4nqB_zSPW_GyB6EYHLt4KSxiGhQBRugE7pdWXTYPY1ToQZwxtcShjtWnIcWvFdgAsnPI4dT-0WHfUDEXsfsLJqCOiqH_hY9z_g7HGqLfaPOxPHe7nGGezdY__bp2PJ-gl8bIMxLOm3JZLaKUsDUtnWqx3GA97udNiD9juzoVziX7d2hNoesdtzULMbGqy_G5ktYDCBfnt0srMGQT5TVN1gLeBV7kOA"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"
      ></div>
    </div>
    <div
      class="relative z-10 max-w-[1280px] mx-auto px-margin-desktop w-full text-on-primary"
    >
      <h1 class="font-display-lg text-display-lg mb-4">Campus Services</h1>
      <p class="font-body-lg text-body-lg mb-8 max-w-xl opacity-90">
        Manage your academic journey and university lifestyle. From language
        mastery to physical excellence, register for world-class facilities and
        courses at West Holland.
      </p>
      <div class="flex flex-wrap gap-4">
        <button
          class="bg-secondary-fixed text-on-secondary-fixed px-8 py-3 rounded-lg font-label-md hover:bg-secondary-container transition-all flex items-center gap-2"
        >
          <span class="material-symbols-outlined">language</span> Register
          Language Courses
        </button>
        <button
          class="bg-white/10 backdrop-blur-md border border-white/20 text-on-primary px-8 py-3 rounded-lg font-label-md hover:bg-white/20 transition-all flex items-center gap-2"
        >
          <span class="material-symbols-outlined">fitness_center</span> Book
          Sports Facilities
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
