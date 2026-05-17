<script setup>
import SportsFacilityCard from "./SportsFacilityCard.vue";

const sportsFacilities = [
  {
    id: 1,
    title: "Football Field",

    description:
      "Professional grade turf suitable for 11v11 matches and team training sessions.",

    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxMdIaHkaI0nJHhwqPquNpofrKURMYqMJ9opF2QssR8TVCwOLSBpqRqSjH9xUUkkNGznSoPjnceF9F5DOR8ynFZDNxaNVx8dAZG5rZxgDaYLH2iwA2ODxD-haaPHyCIJ7UPtSUw6-5W0_pGwpAPPC94DkuavoeIRnmYrfRMMRf8i4ju7NFxPdiRmeB7jKflqrmB-vxcgZ49MwQzaL7EEUOOjoaVGj-KtFb8qp2YvhpunHuVxY3Idy0fzDUF-mRFONIanKxPDgsO9w",

    buttonText: "Book Field",

    badge: null,

    layout: "horizontal",

    stats: [
      {
        label: "Capacity",
        value: "22 Players",
      },

      {
        label: "Availability",
        value: "4 Slots Today",
      },
    ],
  },

  {
    id: 2,

    title: "Fitness Center",

    description:
      "Fully equipped cardio and strength training zones with certified trainers on site.",

    icon: "fitness_center",

    buttonText: "Book Session",

    layout: "compact",

    features: [
      "New equipment arrivals",
      "Personal training available",
    ],
  },

  {
    id: 3,

    title: "Basketball Court",

    description:
      "Indoor air-conditioned courts with spectator seating for campus league games.",

    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCd8EI6Bh5ULn7t4LPewI5ODDCEq7niKwdbFlY3GoBkKcw28OVESXsevjbSc9H54oO59vPTumY6-5Jxd6lNT-wcN6T36e41qBD4u_7g0bWGTP6w0vklGpWlOuvcKajVk2ztXrGfblsXwj-JM4Ny4ewR5GkiGgjPmt-MPGW4Yb_LytHz0fAK-wPPK0HCosWdYytQAqCJTBj6gPYjoaAhyZ-LIr3d0WTsIblRBdtJ9v_VV5XX973Ka7S3ZTBlekpdB_e8Rpxq5sJm0SU",

    buttonText: "Book Court",

    badge: "Limited Slots",

    layout: "vertical",
  },

  {
    id: 4,

    title: "Swimming Pool",

    description:
      "Olympic-sized heated pool with dedicated lap lanes and recreational diving area.",

    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8GCMLyAQzZ-TITTIhYp16I4QXtIVQWh0v8zw51KaG8_80h68_po27H_vweFOYUwcy4b5D5m1OM_AVQLoBJZY_Tf7L4656zOqfwJtrcxUZ3iAZZgberhRdSeq9WSc3JX0FRo_sbnoPq6fpB7xq-CsWK9L5BirloO14oWA13psX84M4nFzi1TXCudYrv8FblAfAS9JiG6-uv7-Qdkfsv0-XN3GtS_zE0IcD4dek2_0DiNWVToFlfiEg_sp5nwwCQ58suTr0shsAFYo",

    buttonText: "Reserve Lane",

    badge: "Open Access",

    layout: "vertical",

    extraLabel: "Temp: 26°C",
  },
];

defineEmits([
  "open-booking"
])

const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
</script>

<template>
  <section class="py-10 py-spacing-8 bg-surface-container-highest">
    <div class="max-w-[1280px] mx-auto px-4 md:px-margin-desktop">

      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
        <div>
          <h2 class="font-headline-lg text-headline-lg text-primary">
            Sports Facility Booking
          </h2>

          <p class="font-body-md text-on-surface-variant mt-2">
            Maintain your health with our
            state-of-the-art campus facilities.
          </p>
        </div>

        <button @click="scrollToSection('reservation-table')"
          class="bg-white px-6 py-2 rounded-full border border-outline text-primary font-label-md shadow-sm hover:shadow-md transition-all">
          My Schedule
        </button>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <SportsFacilityCard v-for="facility in sportsFacilities" :key="facility.id" :facility="facility" @open-booking="$emit('open-booking', $event)"/>
      </div>

    </div>
  </section>
</template>