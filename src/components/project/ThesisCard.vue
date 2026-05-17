<template>
    <div
        class="bg-surface-container-lowest border-l-4 border-l-primary border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
        <div class="p-8">
            <!-- Header -->
            <div class="flex justify-between items-start mb-6">
                <div class="flex flex-col gap-2">
                    <span
                        class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>

                        Monitoring Protocol: Academic
                    </span>

                    <span class="text-[10px] font-bold text-outline uppercase">
                        Thesis Track • {{ thesis.trackId }}
                    </span>
                </div>

                <div class="flex gap-2">
                    <button class="text-primary hover:bg-primary/10 rounded-full p-2 transition-colors">
                        <span class="material-symbols-outlined text-lg">
                            edit_note
                        </span>
                    </button>

                    <button class="text-primary hover:bg-primary/10 rounded-full p-2 transition-colors">
                        <span class="material-symbols-outlined text-lg">
                            more_vert
                        </span>
                    </button>
                </div>
            </div>

            <!-- Content -->
            <h3
                class="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors min-h-18">
                {{ thesis.title }}
            </h3>

            <p class="text-body-md text-on-surface-variant mb-8 line-clamp-2">
                {{ thesis.description }}
            </p>

            <!-- Milestone -->
            <div class="mb-8 p-6 bg-surface-container-low rounded-xl">
                <div class="flex items-center justify-between mb-6">
                    <h4 class="text-[11px] font-bold text-primary uppercase tracking-widest">
                        Research Milestones
                    </h4>

                    <span
                        class="text-[10px] font-bold text-on-surface-variant bg-white px-2 py-0.5 rounded shadow-sm border border-outline-variant">
                        Stage: {{ thesis.stage }}
                    </span>
                </div>

                <div class="relative flex justify-between">
                    <div class="absolute top-2.5 left-0 w-full h-0.5 bg-outline-variant/30 -z-0"></div>

                    <div class="absolute top-2.5 left-0 h-0.5 bg-primary -z-0 transition-all duration-700"
                        :class="thesis.progressWidth"></div>

                    <div v-for="milestone in thesis.milestones" :key="milestone.label"
                        class="relative z-10 flex flex-col items-center gap-2">
                        <!-- Completed -->
                        <div v-if="milestone.status === 'completed'"
                            class="w-5 h-5 rounded-full bg-primary flex items-center justify-center ring-4 ring-white">
                            <span class="material-symbols-outlined text-[12px] text-white">
                                check
                            </span>
                        </div>

                        <!-- Active -->
                        <div v-else-if="milestone.status === 'active'"
                            class="w-5 h-5 rounded-full bg-primary ring-4 ring-white flex items-center justify-center">
                            <div class="w-2 h-2 rounded-full bg-white"></div>
                        </div>

                        <!-- Pending -->
                        <div v-else class="w-5 h-5 rounded-full bg-outline-variant/50 ring-4 ring-white"></div>

                        <span class="text-[9px] font-bold uppercase" :class="milestone.status === 'pending'
                                ? 'text-outline'
                                : milestone.status === 'completed'
                                    ? 'text-primary'
                                    : 'text-on-surface'
                            ">
                            {{ milestone.label }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div
                class="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-outline-variant xl:gap-2">
                <div class="flex items-center gap-3 xl:gap-1">
                    <div
                        class="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-xs">
                        {{ thesis.supervisor.initials }}
                    </div>

                    <div>
                        <div class="text-sm font-bold text-on-surface">
                            {{ thesis.supervisor.name }}
                        </div>

                        <div class="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">
                            {{ thesis.supervisor.role }}
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap gap-2 xl:gap-1 ">
                    <button
                        class="bg-primary text-on-primary px-4 py-2 rounded text-xs font-bold hover:shadow-md transition-all xl:px-2">
                        Submit Progress Log
                    </button>

                    <button
                        class="border border-primary text-primary px-4 py-2 rounded text-xs font-bold hover:bg-primary/5 transition-all xl:px-2">
                        Request Feedback
                    </button>

                    <button class="text-on-surface-variant hover:text-primary transition-colors xl:flex xl:items-center">
                        <span class="material-symbols-outlined text-lg">
                            history
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    thesis: {
        type: Object,
        required: true,
    },
});
</script>