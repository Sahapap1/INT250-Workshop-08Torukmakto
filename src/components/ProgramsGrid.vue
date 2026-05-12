<template>
  <section class="py-margin-desktop bg-surface">
    <div class="max-w-[1280px] mx-auto px-margin-desktop">
      <div class="mb-12">
        <h2 class="font-headline-lg text-headline-lg text-primary mb-4">Academic Programs</h2>
        <div class="w-24 h-1 bg-on-tertiary-container rounded-full"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <!-- Medicine Card -->
        <div class="md:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-xl transition-all duration-500 group flex flex-col md:flex-row">
          <div class="md:w-1/2 relative overflow-hidden h-64 md:h-auto">
            <img alt="Medicine" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A futuristic medical research laboratory with scientists in white coats operating advanced digital imaging equipment. The environment is clean and clinical with soft blue lighting and high-tech displays, representing the cutting-edge future of healthcare and scientific breakthroughs at the University of West Holland." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA1qFQIT0xtvRoyWiNMivwmlatcWUe4Jz9-gB1aWERKR-k8L8zeisB4AZvJaHj4bot_ywc1RS2QGIzKwk24tZiZnMLKNHdpjnCjIPaGXoXhjsjf_W7ErHpUt0d_ZLFlT3DwIU9uXU_vnymwF6Zb-EYl2dfC7ILkTAP2dKZYgGsXLeKEJ5iVM8W6ENPn24B-98lLJkh777D1LfbXnJmGC6hOTssBKiLHYjXPYcXZvT0NRUZiE-ikXTLb33xTQ_rcbRV4By723xlfWA"/>
          </div>
          <div class="md:w-1/2 p-8 flex flex-col justify-center border-t-4 md:border-t-0 md:border-l-4 border-on-tertiary-container">
            <span class="text-on-tertiary-container font-label-md mb-2">School of Medicine</span>
            <h3 class="font-headline-md text-headline-md text-primary mb-4">Future of Healthcare</h3>
            <p class="text-on-surface-variant font-body-md mb-6">Pioneering medical research and training that combines ethical leadership with advanced biotechnology.</p>
            <a class="flex items-center text-primary font-label-md group/link" href="#">
              Learn More <span class="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
        <!-- Law Card -->
        <div class="md:col-span-4 bg-primary text-on-primary rounded-xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden">
          <div class="z-10">
            <span class="text-on-primary-container font-label-md mb-2 opacity-80">School of Law</span>
            <h3 class="font-headline-md text-headline-md mb-4">Justice and Society</h3>
            <p class="font-body-md opacity-80">Understanding global legal frameworks to build a more equitable world through academic rigor.</p>
          </div>
          <div class="mt-8 z-10">
            <a class="inline-flex items-center gap-2 font-label-md text-on-primary-container" href="#">
              View Curriculum <span class="material-symbols-outlined">gavel</span>
            </a>
          </div>
          <div class="absolute -right-12 -bottom-12 text-on-primary-container opacity-10">
            <span class="material-symbols-outlined !text-[160px]">balance</span>
          </div>
        </div>
        <!-- Engineering Card -->
        <div class="md:col-span-12 bg-surface-container-low rounded-xl p-10 flex flex-col md:flex-row items-center gap-10 border border-outline-variant hover:shadow-lg transition-all duration-300">
          <div class="flex-1 order-2 md:order-1">
            <span class="text-on-tertiary-container font-label-md mb-2">Industrial Engineering</span>
            <h3 class="font-headline-lg text-headline-lg text-primary mb-6">Building Tomorrow</h3>
            <p class="text-on-surface-variant font-body-md mb-8 max-w-xl">Integrating systems, people, and technology to optimize global industrial processes. Our program is a global leader in sustainable manufacturing and systems efficiency.</p>
            <div class="flex gap-4">
              <button class="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md hover:opacity-90">Program Details</button>
              <button class="bg-transparent border border-primary text-primary px-6 py-3 rounded-lg font-label-md hover:bg-primary/5">Download Brochure</button>
            </div>
          </div>
          <div class="flex-1 order-1 md:order-2 w-full h-80 rounded-xl overflow-hidden">
            <img alt="Engineering" class="w-full h-full object-cover" data-alt="Close-up detail of a complex mechanical engine being analyzed through an augmented reality interface showing digital blueprints. The lighting is crisp and professional, highlighting metallic surfaces and high-precision components in an industrial workshop, symbolizing the blend of engineering tradition and digital innovation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIDncTZSu8XvoqwPEpK65UU6YuJS5TGXjEO9c_r-DboY1HHhvml3nFA3B8r45Jv7ImjvckZqOpoBi1PSwcPvFDNSOZRvaNigdlG9nlWJPUWC_D9j13AFp7F_PdaQ0KTQkEfGiMa2E-7qqBLnifovO0dGXigsUrPQAg8Na0MxVKRtnTiIoUTW6InXTWSwgejUFpBpsAYWygJqCfiot8VYBo_M_aUfgRTNdvT-FRxXv7ZWXBzCGzLPgP-GUI1Tt5jqlqYm2f8CbcWNs"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
