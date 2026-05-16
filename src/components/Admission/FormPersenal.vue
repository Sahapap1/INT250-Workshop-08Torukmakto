<template>
  <div class="mb-12 mt-8">
    <div class="lg:col-span-8 space-y-12">
      <!-- Section 1: Full Name -->
      <section>
        <div class="flex items-center gap-3 mb-6 mt-10">
          <span class="material-symbols-outlined text-primary" data-icon="person">person</span>
          <h2 class="font-headline-md text-headline-md text-primary">Legal Identity</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div class="flex flex-col gap-2">
            <label class="font-label-md text-on-surface-variant">First Name</label>
            <input v-model="store.personal.firstName"
              class="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary h-12 px-4 bg-gray-200 text-black"
              placeholder="e.g., Julian" type="text" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="font-label-md text-on-surface-variant">Middle Name (Optional)</label>
            <input v-model="store.personal.middleName"
              class="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary h-12 px-4 bg-gray-200 text-black"
              placeholder="e.g., Alexander" type="text" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="font-label-md text-on-surface-variant">Last Name</label>
            <input v-model="store.personal.lastName"
              class="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary h-12 px-4 bg-gray-200 text-black"
              placeholder="e.g., Van den Berg" type="text" />
          </div>
        </div>
      </section>

      <!-- Section 2: Biographical Data -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div class="flex flex-col gap-2">
          <label class="font-label-md text-on-surface-variant">Date of Birth</label>
          <input v-model="store.personal.dateOfBirth"
            class="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary h-12 px-4 bg-gray-200 text-black"
            type="date" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-label-md text-on-surface-variant">Gender</label>
          <select v-model="store.personal.gender"
            class="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary h-12 px-4 bg-white text-black">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-label-md text-on-surface-variant">Nationality</label>
          <input v-model="store.personal.nationality"
            class="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary h-12 px-4 bg-gray-200 text-black"
            placeholder="e.g., Dutch" type="text" />
        </div>
      </section>

      <hr class="border-outline-variant" />

      <!-- Section 3: Contact Details -->
      <section>
        <div class="flex items-center gap-3 mb-6">
          <span class="material-symbols-outlined text-primary" data-icon="alternate_email">alternate_email</span>
          <h2 class="font-headline-md text-headline-md text-primary">Contact Details</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-6">
          <div class="flex flex-col gap-2">
            <label class="font-label-md text-on-surface-variant">Email Address</label>
            <input v-model="store.personal.email"
              class="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary h-12 px-4 bg-gray-200 text-black"
              placeholder="julian@example.com" type="email" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="font-label-md text-on-surface-variant">Phone Number</label>
            <input v-model="store.personal.phone"
              class="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary h-12 px-4 bg-gray-200 text-black"
              placeholder="+31 6 12345678" type="tel" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-label-md text-on-surface-variant">Permanent Home Address</label>
          <textarea v-model="store.personal.address"
            class="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary px-4 py-3 bg-gray-200 text-black"
            placeholder="Street Address, City, Postal Code, Country" rows="3"></textarea>
        </div>
      </section>

      <hr class="border-outline-variant" />

      <!-- Section 4: Identity Verification -->
      <section>
        <div class="flex items-center gap-3 mb-6">
          <span class="material-symbols-outlined text-primary" data-icon="verified_user">verified_user</span>
          <h2 class="font-headline-md text-headline-md text-primary">Identity Verification</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div class="flex flex-col gap-2">
            <label class="font-label-md text-on-surface-variant">Passport or National ID Number</label>
            <input v-model="store.personal.idNumber"
              class="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary h-12 px-4 bg-gray-200 text-black"
              placeholder="Enter ID number" type="text" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="font-label-md text-on-surface-variant">Primary Identity Document (Upload PDF/JPG)</label>
            <div class="relative group h-12">
              <input class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" type="file" />
              <div
                class="w-full h-full border border-dashed border-outline-variant rounded-lg flex items-center justify-center gap-2 group-hover:bg-surface-container transition-colors">
                <span class="material-symbols-outlined text-on-surface-variant"
                  data-icon="upload_file">upload_file</span>
                <span class="text-on-surface-variant font-label-md">Select Document</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { admissionStore as store } from '@/stores/admissionStore';
</script>
