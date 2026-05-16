<script setup>
import ProfileHeader from '@/components/ProfileHeader.vue'
import JourneyTracker from '@/components/JourneyTracker.vue'
import AcademicProgress from '@/components/AcademicProgress.vue'
import ResearchProjects from '@/components/ResearchProjects.vue'

// ── Data ────────────────────────────────────────────────

const student = {
  name: 'Jonathan Doe',
  level: 'Undergraduate',
  faculty: 'Faculty of Innovation',
  id: '2024-UWH-8842',
  email: 'j.doe@westholland.edu',
  degree: 'B.Sc. Cyber-Physical Systems',
  graduation: 'June 2026',
  campus: 'North Heritage Wing',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtmqSOtGFYk-TzxqLStYmt3oZ6T1apkU1BzVMiA__3yKGmChW0jUh2kEAta-mYqhStRi547oxDKKpbKecgACJRNpAlLEpHnmSav8HuSPNpzBsO4KVdhPIdBMdiLBcwX2FQZe_mDKldMZAUiLNYWGAgs80KTN53bZJ7JFoowSgRQeImo7qB4L24Oy4h-DFZAhGZqSH75lbwp-CNvQZMrqVotvyk9jx075gWH-VGJgJr_HtoF5vPxQAww9QIRPV8d-mxxnWqXFQ2gQ',
}

const journeySteps = [
  { label: 'Admission',   sub: 'Completed',          status: 'done',    icon: 'check' },
  { label: 'Enrolled',    sub: 'Semester 1',          status: 'done',    icon: 'check' },
  { label: 'Active',      sub: 'Semester 2',          status: 'active',  icon: 'play_arrow' },
  { label: 'Review',      sub: 'Internal Assessment', status: 'pending', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" class="w-5 h-5"><path d="M152 64C138.7 64 128 74.7 128 88C128 101.3 138.7 112 152 112L160 112L160 131C160 171.3 176 210 204.5 238.5L286 320L204.5 401.5C176 430 160 468.7 160 509L160 528L152 528C138.7 528 128 538.7 128 552C128 565.3 138.7 576 152 576L488 576C501.3 576 512 565.3 512 552C512 538.7 501.3 528 488 528L480 528L480 509C480 468.7 464 430 435.5 401.5L354 320L435.5 238.5C464 210 480 171.3 480 131L480 112L488 112C501.3 112 512 101.3 512 88C512 74.7 501.3 64 488 64L152 64zM320 353.9L401.5 435.4C421 455 432 481.4 432 509L432 528L208 528L208 509C208 481.4 219 455 238.5 435.5L320 353.9zM320 286L238.5 204.5C219 185 208 158.6 208 131L208 112L432 112L432 131C432 158.6 421 185 401.5 204.5L320 286.1z"/></svg>` },
  { label: 'Graduation',  sub: 'Expected 2026',       status: 'pending', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>`}
]

const courses = [
  { code: 'ADV-201', name: 'Structural Integrity Analysis',   grade: 'A-', percent: 88, lecturer: 'Dr. Elena Vance',    credits: 4 },
  { code: 'CPS-304', name: 'Neural Interfacing Fundamentals', grade: 'B+', percent: 76, lecturer: 'Prof. Marcus Thorne', credits: 6 },
  { code: 'HIS-102', name: 'Industrial Revolution Ethics',    grade: 'A',  percent: 94, lecturer: 'Dr. Sarah Jenkins',  credits: 2 },
]

const academicNotice =
  'Your academic journey is closely monitored in collaboration with senior lecturers. ' +
  'If a module grade drops below 65%, a consultation with your faculty advisor will be ' +
  'automatically scheduled to ensure your continued excellence.'

const projects = [
  {
    title: 'Project Phoenix: Graphene Conductivity',
    supervisor: 'Dr. Alan Grant',
    status: 'progress',
    icon: `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke-width="1.7" 
    stroke="#2A4386"
    class="w-6 h-6"
>
    <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M9.75 3v4.5l-4.5 7.5a4.5 4.5 0 0 0 3.857 6.75h6.786a4.5 4.5 0 0 0 3.857-6.75l-4.5-7.5V3"
    />

    <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M9.75 7.5h4.5"
    />

    <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M8.25 15c1.5-1.5 3-.75 4.5 0s3 .75 4.5-.75"
    />
</svg>`,
    members: [
      { initials: 'JD', color: 'bg-gray-200 text-gray-600' },
      { initials: 'MK', color: 'bg-indigo-100 text-indigo-700' },
      { initials: 'SL', color: 'bg-teal-100 text-teal-700' },
    ],
  },
  {
    title: 'Societal Impact of Automation',
    supervisor: 'Prof. Lydia Tár',
    status: 'completed',
    icon: `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke-width="1.7" 
    stroke="#2A4386"
    class="w-6 h-6"
>
    <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M12 6v6l4 2"
    />

    <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />

    <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M7.5 4.5 12 2.25 16.5 4.5"
    />
</svg>`,
    statusLabel: 'Status: Peer Reviewed',
  },
]

function handleAddProject() {
  alert('Initiate New Research clicked')
}
</script>

<template>
  <main class="max-w-[1280px] mx-auto px-4 md:px-8 py-12">

    <!-- Profile Header -->
    <section class="mb-12">
      <ProfileHeader :student="student" />
    </section>

    <!-- Journey Tracker -->
    <section class="mb-12">
      <JourneyTracker :steps="journeySteps" />
    </section>

    <!-- Bento Grid -->
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 lg:col-span-8">
        <AcademicProgress :courses="courses" :notice="academicNotice" />
      </div>
      <div class="col-span-12 lg:col-span-4">
        <ResearchProjects :projects="projects" @add="handleAddProject" />
      </div>
    </div>

  </main>
</template>

<style scoped></style>
