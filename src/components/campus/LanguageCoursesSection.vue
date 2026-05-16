<script setup>
import CourseCard from "@/components/campus/cards/CourseCard.vue";

const courses = [
  {
    id: 1,
    title: "English Communication",
    category: "Communication",
    duration: "12 Weeks",
    seats: 5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMBsD00Quq-c0gmc3tWHPNeEX7TujZ3Zjad0iHDVM2XjW1IaOeJnyMr7r-Z7bjFOs2ACbTR2Pax7RqPsZNhNRnwi8mEc7Mza4S3PU1UDcEaiTBXAc-rzLognU16CcIplJMT9YU5-LDEZH7z7Pq-QuF6ffjbbpjapzsQ9_RMeeH5e8MH_lUYk7eaIBE6RiNHrP0QDbojxuzPzqhWe-GqfJsgtZXoD1sdnWv7wMqPSOCMXCQQAKqr9zAaq1osDqtOgeUf8w_6Yd4CWQ",
  },

  {
    id: 2,
    title: "Academic Writing",
    category: "Writing",
    duration: "8 Weeks",
    seats: 12,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzkRXd-VR0szeGfl1eXJtaU776uJoJKmk_4qxuBerRInbZ1mSqrFrx7j6ikLTpGCh-m4VSl8hhgAwXa9FriOaZaAdCl6ZPjKeF1JQyE-xk0X8fI2X-XPCi7HTOnjhkSkXlAWCVL9tRWFbaWdlInfhTjpPtf7FcYL1swrcG4SrgoDDCZG9MDLp9l9K4_tC2gmSJK-hV_QDDdTWbOYF9-TnS0rubN3krMtLSd36a77vXHfVI_IdvrpqRXwlfWtnlCS9dS436ys_dh9E",
  },

  {
    id: 3,
    title: "Japanese Basics",
    category: "Language",
    duration: "10 Weeks",
    seats: 2,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkwd5UdmoAVKZu6-ROx1vck8JWEfEo5ua0H_JDj6wu-ErZgfHybjLRGq-BXZv_WGG-kye-2_MnycPvz-dPfcuSMtURiRrZHE6VzzvLfdB7pVBzi8BCzwgeM4MRKA07bBtoP6HGuHrtfcQWW3GF0Os0D3tmmNVprHUr2eMHr8Ixv_nDpPMS0sQrI3S2gYrrYSvvQejBfQMfb6LxtQqvmoc_JaXd9riKal0xT3JtXSm08W-x0xwR55HMl3R1l8P8wdZbeGchPem33h0",
  },

  {
    id: 4,
    title: "Chinese Basics",
    category: "Language",
    duration: "15 Weeks",
    seats: 8,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLbDuowSvpUsBOkpEueXo0tMoJWMAyoU94MgW7yVYkdLhSTKhqGIZfQf3q6-gC5Y0I_1tmUlqzv2i4nGq-HfOg9csi6R_2p8LJYMbZowx7DpIzcKFxIFsdzJZMuVGwEPx2KFYF350iy-PSLX15j6NsbZ2tf9AEpbRRRr9DbHWjHdc6lw4kOXYAzZG4U_TMniMVQ8GoKTx2GNWPQl8NEKikcqGPWc6SfdK2yfNgyNEpGTrU80AKFJYn3e_BeB3jOFmxBjemcB_eCGQ",
  },
];
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