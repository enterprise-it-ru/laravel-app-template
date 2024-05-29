import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Dashboard',
    path: '/admin',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./pages/index.vue')
  },
  {
    name: 'Login',
    path: '/admin/login',
    meta: {
      onlyGuests: true,
    },
    component: () => import('./pages/login.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router