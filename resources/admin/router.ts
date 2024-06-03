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
  {
    name: 'Users',
    path: '/admin/users',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./pages/Users/index.vue')
  },
  {
    name: 'CreateUser',
    path: '/admin/users/create',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./pages/Users/UserForm.vue')
  },
  {
    name: 'EditUser',
    path: '/admin/users/edit/:id',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./pages/Users/UserForm.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
