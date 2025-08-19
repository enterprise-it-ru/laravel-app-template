<script setup lang="ts">
import SidebarComponent from "../Common/SidebarComponent.vue";
import HeaderComponent from "../Common/HeaderComponent.vue";
import ModalComponent from "../Common/ModalComponent.vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<template>
  <div class="mobile-header shadow-sm d-flex d-md-none justify-content-between align-items-center">
    <div class="logo ps-3">
      <div class="logo-image">
        <router-link to="/admin/">
          <img src="../../assets/logo.png" class="img-fluid" alt="" style="max-width: 150px; max-height: 35px;">
        </router-link>
      </div>
    </div>
    <div class="pe-2">
      <button class="btn btn-outline-light btn-sm sidebar-toggle-btn" @click="toggleSidebar">
        <bars3-icon class="sidebar-toggle-icon" />
      </button>
    </div>
  </div>
  <div :class="['overlay', { active: isSidebarOpen }]" @click="toggleSidebar" />

  <div class="wrapper d-flex">
    <sidebar-component class="sidebar-column" :class="{ open: isSidebarOpen }" />
    <div class="content-column flex-grow-0">
      <header-component />
      <slot />
      <div>
        <modal-component />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar-column {
  width: 260px;
  height: 100%;
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  color: white;
  transition: transform 0.3s ease;
  z-index: 1000;

  @media (max-width: 767px) {
    transform: translateX(-100%);
    &.open {
      transform: translateX(0);
    }
  }
}

.content-column {
  padding: 30px 30px 30px 290px;
  width: 100%;

  @media (max-width: 767px) {
    padding: 65px 15px 15px 15px;
  }
}

.overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 900;
  transition: opacity 0.3s ease;

  &.active {
    display: block;
  }
}

.mobile-header {
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  height: 50px;
  z-index: 1000;
}

.sidebar-toggle-btn {
  --bs-btn-color: #6b7280;
}

.sidebar-toggle-icon {
  width: 30px;
}
</style>
