import { createRouter, createWebHistory } from "vue-router";
import { authStore } from "@/stores/appStore";

import MainLayout from "@/layouts/MainLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

import HomeView from "@/views/HomeView.vue";
import AdmissionsView from "@/views/AdmissionsView.vue";
import ProjectWorkspaceView from "@/views/ProjectWorkspaceView.vue";
import CampusServicesView from "@/views/CampusServicesView.vue";
import StudentProfileView from "@/views/StudentProfileView.vue";
import LoginView from "@/views/LoginView.vue"


const routes = [
  {
    path: "/",
    component: MainLayout,

    children: [
      {
        path: "",
        component: HomeView,
      },
      {
        path: "admissions",
        component: AdmissionsView
      },
      {
        path: "projects",
        component: ProjectWorkspaceView,
        meta: { requiresAuth: true }
      },
      {
        path: "campus-services",
        component: CampusServicesView,
        meta: { requiresAuth: true }
      },
      {
        path: "student-profile",
        component: StudentProfileView,
        meta: { requiresAuth: true }
      }
    ],
  },

  {
    path: "/login",
    component: AuthLayout,

    children: [
      {
        path: "",
        component: LoginView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard: redirect to login if not authenticated
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !authStore.isAuthenticated()) {
    next("/login");
  } else {
    next();
  }
});

export default router;
