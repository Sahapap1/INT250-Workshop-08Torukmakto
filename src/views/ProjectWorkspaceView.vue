<script setup>
import ThesisCard from '@/components/project/ThesisCard.vue'

const thesisData = [
  {
    id: 1,
    trackId: "T-2024-042",
    title: "Neural Network Optimization for Urban Planning",
    description:
      "Exploration of deep learning models for high-density metropolitan traffic flow and infrastructure stress prediction.",

    stage: "Draft Submission",
    progressWidth: "w-2/3",

    supervisor: {
      initials: "DR",
      name: "Dr. Elena Rodriguez",
      role: "Academic Supervisor",
    },

    milestones: [
      {
        label: "Proposal",
        status: "completed",
      },
      {
        label: "Collection",
        status: "completed",
      },
      {
        label: "Draft Review",
        status: "active",
      },
      {
        label: "Final Defense",
        status: "pending",
      },
    ],
  },

  {
    id: 2,
    trackId: "T-2024-118",
    title: "Renewable Energy Storage Tech",
    description:
      "Comparative analysis of solid-state battery tech vs hydrogen fuel cell efficiency in northern climates.",

    stage: "Research Collection",
    progressWidth: "w-1/3",

    supervisor: {
      initials: "MV",
      name: "Prof. Marcus Vogel",
      role: "Academic Lead",
    },

    milestones: [
      {
        label: "Proposal",
        status: "completed",
      },
      {
        label: "Collection",
        status: "active",
      },
      {
        label: "Draft Review",
        status: "pending",
      },
      {
        label: "Final Defense",
        status: "pending",
      },
    ],
  },
];
</script>
<template>
  <div class="max-w-[1280px] mx-auto px-4 md:px-margin-desktop py-12 transition-colors duration-300">
    <!-- Page Header -->
    <div class="mb-12">
      <h1 class="font-display-lg text-display-lg text-primary mb-4">Project Workspace &amp; Monitoring Tool</h1>
      <p class="text-body-lg text-on-surface-variant max-w-2xl">A centralized command center for academic research
        tracking and industry-integrated project supervision.</p>
    </div>

    <!-- Dashboard Summary Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-gutter mb-16">
      <div
        class="bg-surface-container-low p-8 rounded-xl border border-outline-variant hover:border-primary transition-colors">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span class="material-symbols-outlined text-primary">rocket_launch</span>
          </div>
          <div class="font-label-md text-on-surface-variant uppercase tracking-wider text-[10px]">Total Growth</div>
        </div>
        <div class="text-display-lg-mobile font-display-lg-mobile text-primary">142</div>
        <div class="text-sm font-medium text-on-surface-variant">Active Projects</div>
      </div>

      <div
        class="bg-surface-container-low p-8 rounded-xl border border-outline-variant hover:border-primary transition-colors">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-full bg-on-tertiary-container/10 flex items-center justify-center">
            <span class="material-symbols-outlined text-on-tertiary-container">handshake</span>
          </div>
          <div class="font-label-md text-on-surface-variant uppercase tracking-wider text-[10px]">Network</div>
        </div>
        <div class="text-display-lg-mobile font-display-lg-mobile text-primary">48</div>
        <div class="text-sm font-medium text-on-surface-variant">Industry Partners</div>
      </div>

      <div
        class="bg-surface-container-low p-8 rounded-xl border border-outline-variant hover:border-primary transition-colors">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
            <span class="material-symbols-outlined text-primary-container">groups</span>
          </div>
          <div class="font-label-md text-on-surface-variant uppercase tracking-wider text-[10px]">Community</div>
        </div>
        <div class="text-display-lg-mobile font-display-lg-mobile text-primary">850+</div>
        <div class="text-sm font-medium text-on-surface-variant">Students Involved</div>
      </div>

      <div
        class="bg-surface-container-low p-8 rounded-xl border border-outline-variant hover:border-primary transition-colors">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-full bg-on-primary-fixed-variant/10 flex items-center justify-center">
            <span class="material-symbols-outlined text-on-primary-fixed-variant">fact_check</span>
          </div>
          <div class="font-label-md text-on-surface-variant uppercase tracking-wider text-[10px]">Excellence</div>
        </div>
        <div class="text-display-lg-mobile font-display-lg-mobile text-primary">94%</div>
        <div class="text-sm font-medium text-on-surface-variant">Success Rate</div>
      </div>
    </div>

    <!-- Unified Project Workspace Section -->
    <section class="mb-20">
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div class="flex items-center gap-4">
          <div class="w-1.5 h-8 bg-primary rounded-full"></div>
          <h2 class="font-headline-lg text-headline-lg text-primary">Project Workspace</h2>
        </div>
        <div class="flex flex-wrap gap-2 p-1 bg-surface-container rounded-full">
          <button class="bg-primary text-on-primary px-6 py-2 rounded-full text-xs font-bold uppercase shadow-sm">All
            Tracks</button>
          <button
            class="text-on-surface-variant px-6 py-2 rounded-full text-xs font-bold uppercase hover:bg-surface-container-highest transition-colors">Academic</button>
          <button
            class="text-on-surface-variant px-6 py-2 rounded-full text-xs font-bold uppercase hover:bg-surface-container-highest transition-colors">Practical</button>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-8">
        <!-- Academic Projects Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ThesisCard v-for="thesis in thesisData" :key="thesis.id" :thesis="thesis" />

        </div>
        <!-- Practical Projects Section -->
        <div class="space-y-6 mt-4">
          <!-- Practical Card 1 -->
          <!-- Practical Card 2 -->
        </div>
      </div>
    </section>

    <!-- Faculty Research Snapshots (High Fidelity Grid) -->
    <section class="mb-20">
      <div class="flex items-center gap-4 mb-8">
        <div class="w-1.5 h-8 bg-primary rounded-full"></div>
        <h2 class="font-headline-lg text-headline-lg text-primary">Faculty Research Snapshots</h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-gutter">
        <div
          class="lg:col-span-7 bg-primary text-on-primary rounded-2xl p-6 md:p-10 flex flex-col justify-between overflow-hidden relative group min-h-[450px]">
          <div class="relative z-10">
            <div
              class="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/20">
              <span class="material-symbols-outlined text-4xl">biotech</span>
            </div>
            <h3 class="font-display-lg text-display-lg mb-6 leading-tight">Bio-Medical Clarity Lab</h3>
            <p class="text-body-lg text-on-primary/80 max-w-lg mb-10 leading-relaxed">Our flagship monitoring hub for
              high-stakes medical research, featuring real-time telemetry from student-led clinical trials across
              Europe.</p>
            <div class="flex flex-col sm:flex-row gap-6">
              <div class="bg-white/10 backdrop-blur-lg p-5 rounded-xl flex-1 border border-white/20">
                <div class="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-1">Active Clinical Trials
                </div>
                <div class="text-3xl font-bold flex items-baseline gap-1">12 <span
                    class="text-xs font-normal opacity-40">Running</span></div>
              </div>
              <div class="bg-white/10 backdrop-blur-lg p-5 rounded-xl flex-1 border border-white/20">
                <div class="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-1">Inter-Faculty Teams</div>
                <div class="text-3xl font-bold flex items-baseline gap-1">45 <span
                    class="text-xs font-normal opacity-40">Units</span></div>
              </div>
            </div>
          </div>
          <!-- Abstract Background Graphic -->
          <div
            class="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000">
          </div>
        </div>

        <div class="lg:col-span-5 flex flex-col gap-6 md:gap-gutter mt-8 lg:mt-0">
          <div
            class="flex-1 bg-surface-container-high rounded-2xl overflow-hidden group border border-outline-variant hover:border-primary transition-all">
            <div class="h-1/2 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDJecCYDjr094h4y-0UZ19clQY8kPP5luB1jETrzd9flM0UKI5nX1c0GLbgIMwbKplAQfx-FzGamV5jsxICXizvdh33ij79trgNDP6elQtI0vUiz3aDlXoE3N89Uniw0gj4sn2WwpL0P91nuXl0NNqcY2BWJbkMhds4cgIpticsmYnNXp1XBOYZCzxq7kgbG2VxitjkEVyhqbEtFCkDgZj6OKhWx7INGouioQlNTOwV7Km6vb1Tap5gEJWMf6GDpybyAsszuTE1xQ')">
            </div>
            <div class="p-8 flex flex-col h-1/2 justify-center">
              <div
                class="inline-flex self-start items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest mb-3 bg-primary/10 px-3 py-1 rounded-full">
                <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Upcoming Colloquium
              </div>
              <h4 class="font-headline-md text-headline-md text-primary mb-3">Sustainable Urban Design 2025</h4>
              <p class="text-body-md text-on-surface-variant line-clamp-2 mb-6">Annual showcase of thesis projects
                exploring architectural resilience in climate-risk zones.</p>
              <button class="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all w-fit">
                Register Interest <span class="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
