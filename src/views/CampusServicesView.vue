<script setup>

import { ref } from "vue";
import CampusHero from "@/components/campus/CampusHero.vue";
import CampusFeatures from "@/components/campus/CampusFeatures.vue";
import LanguageCoursesSection from "@/components/campus/LanguageCoursesSection.vue";
import SportsFacilitiesSection from "@/components/campus/sports/SportsFacilitiesSection.vue";

import BookingModal from "@/components/campus/sports/BookingModal.vue";
import RegisterCoursModal from "@/components/campus/RegisterCoursModal.vue";
import RegistrationBadge from "@/components/campus/RegistrationBadge.vue";
import ReservationSection from "@/components/campus/reservations/ReservationSection.vue";


const isRegisterModalOpen = ref(false);
const selectedCourse = ref(null);
const showCourseBadge = ref(false);
const showBookingBadge = ref(false);
const registeredCourseIds = ref([]);
const isBookingModalOpen = ref(false);
const selectedFacility = ref(null);
const reservations = ref([]);


const openBookingModal = (facility) => {
  selectedFacility.value = facility;

  isBookingModalOpen.value = true;
};

const closeBookingModal = () => {
  isBookingModalOpen.value = false;
};

const openRegisterModal = (course) => {
  selectedCourse.value = course;

  isRegisterModalOpen.value = true;
};


const closeRegisterModal = () => {
  isRegisterModalOpen.value = false;
};

const handleCourseRegistration = (courseData) => {
   registeredCourseIds.value.push(
    courseData.id
  );

  
  reservations.value.unshift({
    id: Date.now(),

    title: courseData.title,

    type: "Course",

    startDate: courseData.startDate,

    status: "Confirmed"
  });

  isRegisterModalOpen.value = false;
  showCourseBadge.value = true;

  setTimeout(() => {
    showCourseBadge.value = false;
  }, 5000);
};

const handleBookingSubmit = (
  bookingData
) => {

  reservations.value.unshift(
    bookingData
  );

  showBookingBadge.value = true;

  setTimeout(() => {
    showBookingBadge.value = false;
  }, 4000);
};
</script>

<template>
  <CampusHero />

  <CampusFeatures />

  <LanguageCoursesSection id="language-courses" :registered-course-ids="registeredCourseIds"
    @open-register-modal="openRegisterModal" />

  <SportsFacilitiesSection id="sports-facilities" @open-booking="openBookingModal" />

  <ReservationSection id="reservation-table" :reservations="reservations"/>

  <BookingModal v-if="isBookingModalOpen" :facility="selectedFacility" @close="closeBookingModal"
    @submit-booking="handleBookingSubmit" />

  <RegisterCoursModal v-if="isRegisterModalOpen" :course="selectedCourse" @close="closeRegisterModal"
    @submit="handleCourseRegistration" />

  <Transition enter-active-class="transition duration-500" enter-from-class="opacity-0 translate-y-10"
    enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-500"
    leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-10">
    <RegistrationBadge v-if="showCourseBadge" title="Registration Successful" message="Course enrollment confirmed"
      icon="school" colorClass="bg-green-500" />
  </Transition>

  <Transition enter-active-class="transition duration-500" enter-from-class="opacity-0 translate-y-10"
    enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-500"
    leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-10">
    <RegistrationBadge v-if="showBookingBadge" title="Booking Confirmed" message="Sports facility reserved"
      icon="sports_soccer" colorClass="bg-blue-500" />
  </Transition>

</template>