import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "@/layouts/MainLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

import HomeView from "@/views/HomeView.vue";
import AdmissionsView from "@/views/AdmissionsView.vue";
import ProjectWorkspaceView from "@/views/ProjectWorkspaceView.vue";
import CampusServicesView from "@/views/CampusServicesView.vue";
import StudentProfileView from "@/views/StudentProfileView.vue";
import LoginView from "@/views/LoginView.vue";

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
        component: ProjectWorkspaceView
      },
      {
        path: "campus-services",
        component: CampusServicesView
      },
      {
        path: "student-profile",
        component: StudentProfileView
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

export default router;
