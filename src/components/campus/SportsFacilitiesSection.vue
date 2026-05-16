<script setup></script>
<template>
  <section class="py-10 py-spacing-8 bg-surface-container-highest">
    <div class="max-w-[1280px] mx-auto px-4 md:px-margin-desktop">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
        <div>
          <h2 class="font-headline-lg text-headline-lg text-primary">
            Sports Facility Booking
          </h2>
          <p class="font-body-md text-on-surface-variant mt-2">
            Maintain your health with our state-of-the-art campus facilities.
          </p>
        </div>
        <button
          class="bg-white px-6 py-2 rounded-full border border-outline text-primary font-label-md shadow-sm hover:shadow-md transition-all w-full md:w-auto"
        >
          My Schedule
        </button>
      </div>
      <!-- Bento Grid Layout for Facilities -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-gutter">
        <!-- Football Field -->
        <div
          class="md:col-span-8 bg-surface rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row border-l-4 border-secondary-fixed"
        >
          <div class="md:w-1/2">
            <img
              alt="Football Field"
              class="w-full h-full object-cover"
              data-alt="A pristine university football stadium with lush green grass and professional markings under bright floodlights at dusk. The stands are modern and symmetrical. The atmosphere is electric and high-performance. The palette includes vibrant emerald green, deep twilight blue, and crisp white field lines."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxMdIaHkaI0nJHhwqPquNpofrKURMYqMJ9opF2QssR8TVCwOLSBpqRqSjH9xUUkkNGznSoPjnceF9F5DOR8ynFZDNxaNVx8dAZG5rZxgDaYLH2iwA2ODxD-haaPHyCIJ7UPtSUw6-5W0_pGwpAPPC94DkuavoeIRnmYrfRMMRf8i4ju7NFxPdiRmeB7jKflqrmB-vxcgZ49MwQzaL7EEUOOjoaVGj-KtFb8qp2YvhpunHuVxY3Idy0fzDUF-mRFONIanKxPDgsO9w"
            />
          </div>
          <div class="p-8 md:w-1/2 flex flex-col justify-between">
            <div>
              <h3 class="font-headline-md text-headline-md text-primary mb-2">
                Football Field
              </h3>
              <p class="text-on-surface-variant text-sm mb-4">
                Professional grade turf suitable for 11v11 matches and team
                training sessions.
              </p>
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-surface-container p-3 rounded-lg">
                  <p class="text-[10px] uppercase font-bold text-outline">
                    Capacity
                  </p>
                  <p class="text-primary font-bold">22 Players</p>
                </div>
                <div class="bg-surface-container p-3 rounded-lg">
                  <p class="text-[10px] uppercase font-bold text-outline">
                    Availability
                  </p>
                  <p class="text-primary font-bold">4 Slots Today</p>
                </div>
              </div>
            </div>
            <button
              class="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md flex items-center justify-center gap-2"
            >
              Book Field
              <span class="material-symbols-outlined">event_available</span>
            </button>
          </div>
        </div>
        <!-- Fitness Center -->
        <div
          class="md:col-span-4 bg-surface rounded-2xl p-8 shadow-md flex flex-col justify-between border-t-4 border-secondary-fixed"
        >
          <div>
            <div
              class="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-primary mb-6"
            >
              <span class="material-symbols-outlined">fitness_center</span>
            </div>
            <h3 class="font-headline-md text-headline-md text-primary mb-2">
              Fitness Center
            </h3>
            <p class="text-on-surface-variant text-sm mb-6">
              Fully equipped cardio and strength training zones with certified
              trainers on site.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-2 text-sm text-on-surface">
                <span class="material-symbols-outlined text-primary text-lg"
                  >check_circle</span
                >
                New equipment arrivals
              </li>
              <li class="flex items-center gap-2 text-sm text-on-surface">
                <span class="material-symbols-outlined text-primary text-lg"
                  >check_circle</span
                >
                Personal training available
              </li>
            </ul>
          </div>
          <button
            class="w-full bg-primary-container text-on-primary-container py-4 rounded-xl font-label-md"
          >
            Check-in Now
          </button>
        </div>
        <!-- Basketball Court -->
        <div
          class="md:col-span-6 bg-surface rounded-2xl overflow-hidden shadow-md flex flex-col border-b-4 border-secondary-fixed"
        >
          <div class="h-48">
            <img
              alt="Basketball Court"
              class="w-full h-full object-cover"
              data-alt="An indoor high-end university basketball court with polished hardwood floors reflecting the overhead studio lighting. The hoops are professional-grade glass backboards. The aesthetic is clean, professional, and athletic. The palette uses warm amber wood tones contrasted with deep university blue wall panels."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd8EI6Bh5ULn7t4LPewI5ODDCEq7niKwdbFlY3GoBkKcw28OVESXsevjbSc9H54oO59vPTumY6-5Jxd6lNT-wcN6T36e41qBD4u_7g0bWGTP6w0vklGpWlOuvcKajVk2ztXrGfblsXwj-JM4Ny4ewR5GkiGgjPmt-MPGW4Yb_LytHz0fAK-wPPK0HCosWdYytQAqCJTBj6gPYjoaAhyZ-LIr3d0WTsIblRBdtJ9v_VV5XX973Ka7S3ZTBlekpdB_e8Rpxq5sJm0SU"
            />
          </div>
          <div class="p-8">
            <div class="flex justify-between items-start mb-4">
              <h3 class="font-headline-md text-headline-md text-primary">
                Basketball Court
              </h3>
              <span
                class="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-xs rounded-full font-bold"
                >Limited Slots</span
              >
            </div>
            <p class="text-on-surface-variant text-sm mb-6">
              Indoor air-conditioned courts with spectator seating for campus
              league games.
            </p>
            <button
              class="w-full bg-primary text-on-primary py-3 rounded-lg font-label-md"
            >
              Book Court
            </button>
          </div>
        </div>
        <!-- Swimming Pool -->
        <div
          class="md:col-span-6 bg-surface rounded-2xl overflow-hidden shadow-md flex flex-col border-b-4 border-secondary-fixed"
        >
          <div class="h-48 relative">
            <img
              alt="Swimming Pool"
              class="w-full h-full object-cover"
              data-alt="An olympic-sized indoor university swimming pool with crystal clear turquoise water. Sunlight streams through large overhead skylights, creating shimmering patterns on the pool floor. The architecture is minimalist and modern. The palette is dominated by bright turquoise, clean white tiles, and soft silver metal accents."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8GCMLyAQzZ-TITTIhYp16I4QXtIVQWh0v8zw51KaG8_80h68_po27H_vweFOYUwcy4b5D5m1OM_AVQLoBJZY_Tf7L4656zOqfwJtrcxUZ3iAZZgberhRdSeq9WSc3JX0FRo_sbnoPq6fpB7xq-CsWK9L5BirloO14oWA13psX84M4nFzi1TXCudYrv8FblAfAS9JiG6-uv7-Qdkfsv0-XN3GtS_zE0IcD4dek2_0DiNWVToFlfiEg_sp5nwwCQ58suTr0shsAFYo"
            />
            <div
              class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary"
            >
              Temp: 26°C
            </div>
          </div>
          <div class="p-8">
            <div class="flex justify-between items-start mb-4">
              <h3 class="font-headline-md text-headline-md text-primary">
                Swimming Pool
              </h3>
              <span
                class="px-3 py-1 bg-primary-fixed text-on-primary-fixed text-xs rounded-full font-bold"
                >Open Access</span
              >
            </div>
            <p class="text-on-surface-variant text-sm mb-6">
              Olympic-sized heated pool with dedicated lap lanes and
              recreational diving area.
            </p>
            <button
              class="w-full bg-primary text-on-primary py-3 rounded-lg font-label-md"
            >
              Reserve Lane
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
