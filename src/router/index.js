import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "@/layouts/MainLayout.vue";
import HomeView from "@/views/HomeView.vue";
import AdmissionsView from "@/views/AdmissionsView.vue";

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
      }
    ],
  },

  // {
  //   path: "/login",
  //   component: AuthLayout,

  //   children: [
  //     {
  //       path: "",
  //       component: LoginView,
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
