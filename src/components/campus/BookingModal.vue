<script setup>
</script>
<template>
    <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-primary/40 backdrop-blur-sm">
        <div
            class="bg-surface w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div class="bg-primary p-8 text-on-primary relative">
                <button class="absolute top-6 right-6 text-on-primary/60 hover:text-on-primary">
                    <span class="material-symbols-outlined">close</span>
                </button>
                <h2 class="font-headline-lg text-headline-lg">Complete Your Booking</h2>
                <p class="text-on-primary/80 mt-1">Football Field (West) • Friday, Oct 18</p>
            </div>
            <form class="p-8 space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-1">
                        <label class="font-label-md text-label-md text-on-surface-variant block">Full Name</label>
                        <input
                            class="w-full bg-surface-container border-outline-variant rounded-lg p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            type="text" value="Alexander West" />
                    </div>
                    <div class="space-y-1">
                        <label class="font-label-md text-label-md text-on-surface-variant block">Student / Staff
                            ID</label>
                        <input
                            class="w-full bg-surface-container border-outline-variant rounded-lg p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            type="text" value="WH-2024-9981" />
                    </div>
                    <div class="space-y-1">
                        <label class="font-label-md text-label-md text-on-surface-variant block">Preferred Date</label>
                        <div class="relative">
                            <input
                                class="w-full bg-surface-container border-outline-variant rounded-lg p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                type="date" value="2024-10-18" />
                        </div>
                    </div>
                    <div class="space-y-1">
                        <label class="font-label-md text-label-md text-on-surface-variant block">Time Slot</label>
                        <select
                            class="w-full bg-surface-container border-outline-variant rounded-lg p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                            <option>05:00 PM - 06:30 PM</option>
                            <option>06:30 PM - 08:00 PM</option>
                            <option>08:00 PM - 09:30 PM</option>
                        </select>
                    </div>
                </div>
                <div class="p-4 bg-secondary-container/30 border border-secondary-container rounded-lg flex gap-4">
                    <span class="material-symbols-outlined text-on-secondary-container">info</span>
                    <p class="text-sm text-on-secondary-container">Your student card will be required for entry at the
                        Athletics Center reception. Please arrive 10 minutes before your slot.</p>
                </div>
                <div class="flex gap-4 pt-4">
                    <button
                        class="flex-1 px-8 py-3 border border-outline text-primary font-label-md rounded-lg hover:bg-surface-container transition-all"
                        type="button">Cancel</button>
                    <button
                        class="flex-1 px-8 py-3 bg-primary text-on-primary font-label-md rounded-lg shadow-lg hover:bg-primary-container transition-all"
                        type="submit">Confirm Booking</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped></style>