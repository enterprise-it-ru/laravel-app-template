import axios from 'axios';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// Axios base api url
axios.defaults.baseURL = '/admin-api/v1'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import router from './router';
import AppComponent from "./App.vue";
import {authStore} from "./stores/authStore";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { createHead } from '@unhead/vue/client'

import './scss/app.scss'

import 'bootstrap';
import 'floating-vue/dist/style.css'

import {
  // Directives
  vTooltip,
  vClosePopper,
  // Components
  Dropdown,
  Tooltip,
  Menu
} from 'floating-vue'

const app = createApp(AppComponent)
app.use(createPinia())
app.use(createHead())
app.use(Toast, {
  transition: 'Vue-Toastification__slideBlurred',
  maxToasts: 4,
  newestOnTop: true
})

app.directive('tooltip', vTooltip)
app.directive('close-popper', vClosePopper)

app.component('VDropdown', Dropdown)
app.component('VTooltip', Tooltip)
app.component('VMenu', Menu)


// Check auth
router.beforeEach((to) => {
  const auth = authStore();
  if (to.meta.requiresAuth && !auth.userData) {
    return '/admin/login'
  }

  // Redirect authorized users from guest pages
  if (to.meta.onlyGuests && auth.userData) {
    return '/admin'
  }
})

const auth = authStore();

// Checking auth and mount app
auth.checkAuth()
  .finally(() => {
    app.use(router)
    app.mount('#app')
  });
