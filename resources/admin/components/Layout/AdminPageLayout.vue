<script setup lang="ts">
import SidebarComponent from "../Common/SidebarComponent.vue";
import HeaderComponent from "../Common/HeaderComponent.vue";

</script>

<template>
  <div class="wrapper d-flex">
    <sidebar-component class="sidebar-column" />
    <div class="content-column flex-grow-0">
      <header-component />
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar-column {
  width: 260px;
  height: 100%;
  position: fixed;
  overflow-y: auto;
}

.content-column {
  padding: 30px 30px 30px 290px;
  width: 100%;
}
</style>
