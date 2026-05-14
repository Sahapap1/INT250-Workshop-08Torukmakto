<script setup>


</script>

<template>
    <section class="bg-surface-container-lowest p-10 mt-10 rounded-xl border border-outline-variant shadow-sm">
        <div class="flex items-center gap-3 mb-6">
            <span class="material-symbols-outlined text-primary text-2xl">person_search</span>
            <h2 class="font-headline-md text-headline-md text-primary">Identify Your Status</h2>
        </div>
        <p class="font-body-md text-body-md text-on-surface-variant mb-8">
            Choose the category that best describes your current academic situation to tailor the application form.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Option 1: Regular Student -->
            <div
                class="border border-outline-variant p-6 rounded-lg cursor-pointer transition-all hover:border-primary-fixed hover:bg-surface-container">
                <span class="material-symbols-outlined text-primary mb-4"
                    style="font-variation-settings: 'FILL' 1;">school</span>
                <h3 class="font-headline-md text-[18px] text-primary mb-1">Regular Student</h3>
                <p class="font-label-md text-[12px] text-on-primary-fixed-variant leading-tight">Dutch High School
                    graduate (VWO/HAVO)</p>
            </div>
            <!-- Option 2: Polytechnic -->
            <div
                class="border border-outline-variant p-6 rounded-lg cursor-pointer transition-all hover:border-primary-fixed hover:bg-surface-container">
                <span class="material-symbols-outlined text-on-surface-variant mb-4">account_balance</span>
                <h3 class="font-headline-md text-[18px] text-on-surface mb-1">Polytechnic</h3>
                <p class="font-label-md text-[12px] text-on-surface-variant leading-tight">HBO Propedeuse or full
                    Diploma holders</p>
            </div>
            <!-- Option 3: International -->
            <div
                class="border border-outline-variant p-6 rounded-lg cursor-pointer transition-all hover:border-primary-fixed hover:bg-surface-container">
                <span class="material-symbols-outlined text-on-surface-variant mb-4">public</span>
                <h3 class="font-headline-md text-[18px] text-on-surface mb-1">International</h3>
                <p class="font-label-md text-[12px] text-on-surface-variant leading-tight">Non-Dutch qualifications
                    &amp; International applicants</p>
            </div>
        </div>
    </section>
    <!-- Main Form Section -->
    <section class="bg-surface-container-lowest p-10 rounded-xl border border-outline-variant shadow-sm space-y-10">
        <div class="flex items-center gap-3 mb-2">
            <span class="material-symbols-outlined text-primary text-2xl">menu_book</span>
            <h2 class="font-headline-md text-headline-md text-primary">Academic Background</h2>
        </div>
        <div class="grid grid-cols-1 gap-6">
            <div class="space-y-2">
                <label class="font-label-md text-label-md text-on-surface-variant">Institution Name</label>
                <input
                    class="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 focus:ring-2 focus:ring-primary-container focus:border-primary transition-all font-body-md"
                    placeholder="e.g. Amsterdam International High School" type="text" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                    <label class="font-label-md text-label-md text-on-surface-variant">BSN Number</label>
                    <input
                        class="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 focus:ring-2 focus:ring-primary-container focus:border-primary transition-all font-body-md"
                        placeholder="123 456 789" type="text" />
                    <span class="text-[12px] italic text-on-surface-variant">Dutch Burgerservicenummer</span>
                </div>
                <div class="space-y-2">
                    <label class="font-label-md text-label-md text-on-surface-variant">VWO Profile Selection</label>
                    <select
                        class="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 focus:ring-2 focus:ring-primary-container focus:border-primary transition-all font-body-md appearance-none">
                        <option>Nature &amp; Health</option>
                        <option>Nature &amp; Technology</option>
                        <option>Economy &amp; Society</option>
                        <option>Culture &amp; Society</option>
                    </select>
                </div>
            </div>
        </div>
        <!-- Advanced Polytechnic Entry (Conditional Style) -->
        <div class="p-8 border-2 border-dashed border-outline-variant rounded-xl bg-surface-container-low/50 space-y-6">
            <div class="flex items-center gap-2 text-on-secondary-container">
                <span class="material-symbols-outlined text-[20px]">info</span>
                <h4 class="font-label-md text-label-md">Advanced Polytechnic Entry</h4>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-4">
                    <label class="font-label-md text-label-md text-on-surface-variant block">Current Status</label>
                    <div class="flex items-center gap-6">
                        <label class="flex items-center gap-2 cursor-pointer group">
                            <input class="w-5 h-5 text-primary border-outline focus:ring-primary-fixed"
                                name="hbo-status" type="radio" />
                            <span class="font-body-md text-on-surface group-hover:text-primary">Propedeuse</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer group">
                            <input class="w-5 h-5 text-primary border-outline focus:ring-primary-fixed"
                                name="hbo-status" type="radio" />
                            <span class="font-body-md text-on-surface group-hover:text-primary">Full Diploma</span>
                        </label>
                    </div>
                </div>
                <div class="space-y-2">
                    <label class="font-label-md text-label-md text-on-surface-variant">Current GPA</label>
                    <input
                        class="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 focus:ring-2 focus:ring-primary-container focus:border-primary transition-all font-body-md"
                        placeholder="8.5" type="text" />
                </div>
            </div>
            <div class="space-y-2">
                <label class="font-label-md text-label-md text-on-surface-variant">Detailed Examination of
                    Studies</label>
                <textarea
                    class="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 focus:ring-2 focus:ring-primary-container focus:border-primary transition-all font-body-md"
                    placeholder="Please list specific relevant coursework or major subjects..." rows="4"></textarea>
            </div>
        </div>
        <!-- International Credentials -->
        <div class="p-8 bg-surface-container rounded-xl space-y-6">
            <div class="flex items-center gap-2 text-primary">
                <span class="material-symbols-outlined text-[20px]">language</span>
                <h4 class="font-label-md text-label-md">International Credentials</h4>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                    <label class="font-label-md text-label-md text-on-surface-variant">Country of Origin</label>
                    <select
                        class="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 focus:ring-2 focus:ring-primary-container focus:border-primary transition-all font-body-md appearance-none">
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>Germany</option>
                        <option>India</option>
                        <option>China</option>
                    </select>
                </div>
                <div class="space-y-2">
                    <label class="font-label-md text-label-md text-on-surface-variant">English Proficiency
                        (IELTS/TOEFL)</label>
                    <input
                        class="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 focus:ring-2 focus:ring-primary-container focus:border-primary transition-all font-body-md"
                        placeholder="e.g. IELTS 7.5" type="text" />
                </div>
            </div>
            <div class="space-y-2">
                <label class="font-label-md text-label-md text-on-surface-variant">Study Equivalency Document</label>
                <div
                    class="border-2 border-dashed border-outline-variant rounded-lg p-10 flex flex-col items-center justify-center bg-surface-container-lowest transition-all hover:bg-surface-container-low cursor-pointer">
                    <span class="material-symbols-outlined text-4xl text-primary mb-3">cloud_upload</span>
                    <p class="font-body-md text-on-surface"><strong>Click to upload</strong> or drag and drop</p>
                    <p class="font-label-md text-[12px] text-on-surface-variant">PDF, JPG (MAX. 5MB)</p>
                </div>
            </div>
        </div>
    </section>
</template>