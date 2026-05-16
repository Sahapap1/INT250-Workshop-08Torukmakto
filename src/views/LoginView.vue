<script setup>
import LoginCard from '@/components/LoginCard.vue'
</script>

<template>
    <div class="bg-background text-on-surface font-body-md min-h-screen flex flex-col">

        <main class="flex-grow flex relative">
            <!-- Background -->
            <div class="absolute inset-0 z-0">
                <img class="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCedv9BVIsfqU3k7Rs_jJjCGHCvqY6_fy3WlrNbJkZzGsutcbKnsibSuwvXXdm4KD33_2kuR5Mrwx4jrZsgsmLSxWAwexO5ZPf5aii8HqYWKNs90_qbxH88YcPozgkVauhJMCtuO8WCTRkFgFabxH1lEAQ2lE5Y9CupuD226CHVb-rXecslM4FboXDIeW6wg-LsQ3iaWZ6rlOFOqq7YxZx-ziW5gvOn1fNQBZV1EqhpetNcJs8M2X_ijtmeoOaVqTIvQfY3Dk0xaoQ"
                    alt="University" />
                <div class="absolute inset-0 academic-overlay"></div>
            </div>

            <!-- Content -->
            <div
                class="relative z-10 w-full max-w-max-width mx-auto flex flex-col md:flex-row items-center justify-between px-margin-mobile md:px-margin-desktop py-24 md:py-0">
                <!-- Left -->
                <section class="w-full md:w-1/2 text-on-primary mb-12 md:mb-0">
                    <div class="max-w-lg">
                        <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">
                            Legacy of Excellence.
                        </h1>

                        <p class="font-body-lg text-on-primary/90 mb-8 max-w-sm hidden md:block">
                            Access your scholarly resources and research gateway.
                        </p>

                        <div class="flex gap-12">
                            <div>
                                <div class="text-headline-md font-bold">150+</div>
                                <div class="text-label-md opacity-70 uppercase tracking-tighter">
                                    Years
                                </div>
                            </div>

                            <div>
                                <div class="text-headline-md font-bold">Top 1%</div>
                                <div class="text-label-md opacity-70 uppercase tracking-tighter">
                                    Research
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Right -->
                <LoginCard />
            </div>
        </main>
    </div>
</template>



<style scoped>
.academic-overlay {
    background: linear-gradient(135deg,
            rgba(0, 17, 58, 0.9) 0%,
            rgba(0, 35, 102, 0.4) 100%);
}
</style>