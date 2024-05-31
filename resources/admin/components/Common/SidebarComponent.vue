<script setup lang="ts">
import { HomeIcon, UsersIcon, GlobeAltIcon } from '@heroicons/vue/24/outline'
import UserMenu from "./UserMenu.vue";
import { onMounted, ref } from "vue";

const appName = ref('');

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  appName.value = import.meta.env.VITE_APP_NAME
})

const menu = [
  {
    icon: HomeIcon,
    route: '/admin',
    name: 'Главная',
  },
  {
    icon: UsersIcon,
    route: '/admin/users',
    name: 'Пользователи',
    hidden: false,
  },
  {
    icon: GlobeAltIcon,
    route: '/',
    external: true,
    name: 'Перейти на сайт',
  },
];
</script>

<template>
  <div class="sidebar d-flex flex-column min-vh-100">
    <div class="sidebar-logo">
      <router-link to="/admin/" class="logo">
        <div class="logo-image">
          <img src="../../assets/logo.png" class="img-fluid" alt="" style="max-width: 150px;">
        </div>
        <div class="logo-text">
          {{ appName }}
        </div>
      </router-link>
    </div>

    <div class="sidebar-user">
      <user-menu />
    </div>

    <div class="sidebar-menu">
      <div class="menu mt-2">
        <template v-for="(item, index) in menu" :key="index">
          <template v-if="!item.hidden">
            <!-- Router links -->
            <router-link v-if="!item.external" exact-active-class="active" class="menu-item" :to="item.route">
              <component :is="item.icon" class="menu-icon" />
              <div>{{ item.name }}</div>
            </router-link>

            <!-- External links -->
            <a v-else :href="item.route" class="menu-item" :class="[item.active ? 'active' : '']">
              <component :is="item.icon" class="menu-icon" />
              <div>{{ item.name }}</div>
            </a>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  border-right: 1px solid rgb(17 24 39 / 0.05);
  background: #ffffff;
}

.sidebar-logo {
  border-bottom: 1px solid rgb(17 24 39 / 0.05);
  padding: 15px 20px 15px 20px;
}

.sidebar-menu {
  padding: 10px;
}

.sidebar-user {
  border-bottom: 1px solid rgb(17 24 39 / 0.05);
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  opacity: 0.7;
  margin-bottom: 5px;
  color: #000000;

  &.active {
    background: #f3f3f3;
    opacity: 1;
    color: var(--bs-primary);
  }

  &:hover {
    opacity: 1
  }

  .menu-icon {
    flex-grow: 0;
    margin-right: 10px;
    width: 20px;
  }
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;

  .logo-text {
    font-weight: 700;
    font-size: 16px;
  }

  .logo-image {
    width: 57px;
    margin-right: 13px;
    text-align: center;

    img {
      height: 37px;
    }
  }
}
</style>
