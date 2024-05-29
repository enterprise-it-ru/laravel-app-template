<script setup lang="ts">
import { UserIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { authStore } from "../../stores/authStore";

const { userData } = authStore()

function logout() {
  alert('logout')
}

</script>

<template>
  <div class="position-relative dropdown-center">
    <div class="user-profile-button d-flex align-items-center cursor-pointer" data-bs-toggle="dropdown" aria-expanded="false">
      <user-icon class="user-profile-icon flex-shrink-0" />
      <span class="flex-grow-1 text-break">{{ userData.email }}</span>
      <chevron-down-icon class="icon-18 flex-shrink-0" />
    </div>
    <ul class="dropdown-menu w-75">
      <li>
        <a class="dropdown-item align-items-center d-flex" href="#" @click.prevent="logout">
          <ion-icon :icon="logOutOutline" class="logout-icon me-1" />
          Выйти
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.logout-icon {
  font-size: 20px;
}

.user-profile-button {
  padding: 5px 20px;
  margin: 10px 0;
  color: var(--bs-gray-800);

  .user-profile-icon {
    width: 20px;
    margin-right: 10px;
    margin-left: -2px;
  }
}
</style>
