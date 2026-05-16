<script setup>
import CourseCard from "@/components/campus/cards/CourseCard.vue";

import { courses } from "@/data/courses";
</script>

<template>
  <section class="py-spacing-8 py-10 max-w-[1280px] mx-auto px-margin-desktop">

    <div class="flex justify-between items-end mb-12">

      <div>
        <h2 class="font-headline-lg text-headline-lg text-primary">
          Language Course Registration
        </h2>

        <p class="font-body-md text-on-surface-variant mt-2">
          Enhance your global communication skills with our seasonal courses.
        </p>
      </div>

      <button
        class="text-primary font-label-md flex items-center gap-1 hover:underline"
      >
        View All Courses

        <span class="material-symbols-outlined text-sm">
          arrow_forward
        </span>
      </button>

    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">

      <CourseCard
        v-for="course in courses"
        :key="course.id"
        :title="course.title"
        :category="course.category"
        :duration="course.duration"
        :seats="course.seats"
        :image="course.image"
      />

    </div>
  </section>
</template>