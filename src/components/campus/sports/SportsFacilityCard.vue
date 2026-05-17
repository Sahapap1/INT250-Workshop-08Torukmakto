<script setup>
const props = defineProps({
  facility: Object,
});

defineEmits([
  "open-booking"
])
</script>

<template>

  <!-- Football -->
  <div
    v-if="facility.layout === 'horizontal'"
    class="md:col-span-8 bg-surface rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row border-l-4 border-secondary-fixed"
  >
    <div class="md:w-1/2">
      <img
        :src="facility.image"
        class="w-full h-full object-cover"
      />
    </div>

    <div
      class="p-8 md:w-1/2 flex flex-col justify-between"
    >
      <div>
        <h3
          class="font-headline-md text-primary mb-2"
        >
          {{ facility.title }}
        </h3>

        <p
          class="text-on-surface-variant text-sm mb-4"
        >
          {{ facility.description }}
        </p>

        <div
          class="grid grid-cols-2 gap-4 mb-6"
        >
          <div
            v-for="stat in facility.stats"
            :key="stat.label"
            class="bg-surface-container p-3 rounded-lg"
          >
            <p
              class="text-[10px] uppercase font-bold text-outline"
            >
              {{ stat.label }}
            </p>

            <p
              class="text-primary font-bold"
            >
              {{ stat.value }}
            </p>
          </div>
        </div>
      </div>

      <button  @click="$emit('open-booking', props.facility)"
         class="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md flex items-center justify-center gap-2 transition-all duration-300 hover:bg-primary-container hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
      >
        {{ facility.buttonText }}
      </button>
    </div>
  </div>

  <!-- Compact -->
  <div
    v-else-if="facility.layout === 'compact'"
    class="md:col-span-4 bg-surface rounded-2xl p-8 shadow-md flex flex-col justify-between border-t-4 border-secondary-fixed"
  >
    <div>

      <div
        class="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-primary mb-6"
      >
        <span
          class="material-symbols-outlined"
        >
          {{ facility.icon }}
        </span>
      </div>

      <h3
        class="font-headline-md text-primary mb-2"
      >
        {{ facility.title }}
      </h3>

      <p
        class="text-on-surface-variant text-sm mb-6"
      >
        {{ facility.description }}
      </p>

      <ul class="space-y-3 mb-8">
        <li
          v-for="feature in facility.features"
          :key="feature"
          class="flex items-center gap-2 text-sm"
        >
          <span
            class="material-symbols-outlined text-primary text-lg"
          >
            check_circle
          </span>

          {{ feature }}
        </li>
      </ul>
    </div>

    <button  @click="$emit('open-booking', props.facility)"
       class="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md flex items-center justify-center gap-2 transition-all duration-300 hover:bg-primary-container hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
    >
      {{ facility.buttonText }}
    </button>
  </div>

  <!-- Vertical -->
  <div
    v-else
    class="md:col-span-6 bg-surface rounded-2xl overflow-hidden shadow-md flex flex-col border-b-4 border-secondary-fixed"
  >
    <div class="h-48 relative">

      <img
        :src="facility.image"
        class="w-full h-full object-cover"
      />

      <div
        v-if="facility.extraLabel"
        class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary"
      >
        {{ facility.extraLabel }}
      </div>
    </div>

    <div class="p-8">

      <div
        class="flex justify-between items-start mb-4"
      >
        <h3
          class="font-headline-md text-primary"
        >
          {{ facility.title }}
        </h3>

        <span
          v-if="facility.badge"
          class="px-3 py-1 bg-tertiary-fixed text-xs rounded-full font-bold"
        >
          {{ facility.badge }}
        </span>
      </div>

      <p
        class="text-on-surface-variant text-sm mb-6"
      >
        {{ facility.description }}
      </p>

      <button  @click="$emit('open-booking', props.facility)"
         class="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md flex items-center justify-center gap-2 transition-all duration-300 hover:bg-primary-container hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
      >
        {{ facility.buttonText }}
      </button>
    </div>
  </div>

</template>