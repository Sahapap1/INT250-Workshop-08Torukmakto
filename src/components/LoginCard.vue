<template>
  <section class="w-full md:w-[440px]">
    <div class="bg-surface-container-lowest/95 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-2xl border border-outline-variant/30">
      <div class="mb-8 text-center">
        <h2 class="font-headline-md text-primary">Secure Sign In</h2>
      </div>

      <!-- Form -->
      <form class="space-y-6" @submit.prevent="handleLogin">
        <div class="relative">
          <p v-if="errorMessage" class="text-error text-sm font-medium">
            {{ errorMessage }}
          </p>
          <span class="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-outline">
            account_circle
          </span>

          <input v-model="form.username" type="text" placeholder="University ID" @input="errorMessage = ''" :class="[
            'w-full pl-8 pr-4 py-3 border-b bg-transparent text-on-surface focus:ring-0 transition-all font-body-md placeholder:text-outline',
            errorMessage
              ? 'border-error focus:border-error'
              : 'border-outline-variant focus:border-primary'
          ]" />
        </div>

        <div class="relative">
          <span class="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-outline">
            lock
          </span>

          <input v-model="form.password" type="password" placeholder="Password" @input="errorMessage = ''" :class="[
            'w-full pl-8 pr-4 py-3 border-b bg-transparent text-on-surface focus:ring-0 transition-all font-body-md placeholder:text-outline',
            errorMessage
              ? 'border-error focus:border-error'
              : 'border-outline-variant focus:border-primary'
          ]" />
        </div>

        <div class="flex items-center justify-between">
          <label class="flex items-center gap-2 cursor-pointer">
            <input v-model="form.remember" type="checkbox"
              class="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" />

            <span class="font-label-md text-on-surface-variant text-sm">
              Remember me
            </span>
          </label>

          <a href="#" class="font-label-md text-primary text-sm font-semibold hover:underline">
            Forgot?
          </a>
        </div>

        <button type="submit"
          class="w-full bg-primary text-on-primary py-4 rounded font-label-md hover:opacity-90 transition-all shadow-lg active:scale-[0.99]">
          Sign In
        </button>
      </form>

      <div class="mt-10 text-center">
        <RouterLink to="/admissions"
          class="inline-flex items-center gap-2 font-label-md text-primary hover:opacity-80 transition-opacity">
          Need access?

          <span class="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'

import { useRouter } from "vue-router";

import { authStore } from "@/stores/appStore";

const router = useRouter();

const activeTab = ref('student')
const errorMessage = ref("");

const form = reactive({
  username: '',
  password: '',
  remember: false
})



const handleLogin = () => {
  errorMessage.value = "";

  const result = authStore.login(
    form.username,
    form.password,
    form.remember
  );

  if (!result.success) {
    errorMessage.value = result.message;
    return;
  }

  router.push("/");
};

onMounted(() => {
  const rememberedId =
    authStore.getRememberedUniversityId();

  if (rememberedId) {
    form.username = rememberedId;
    form.remember = true;
  }
});
</script>

<style scoped>
.tab-active {
  color: #00113a;
  font-weight: 600;
}

.tab-active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #002366;
}
</style>