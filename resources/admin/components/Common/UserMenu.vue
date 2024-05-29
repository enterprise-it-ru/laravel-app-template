<script setup lang="ts">
import { UserIcon, ChevronDownIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/vue/24/outline'
import { authStore } from "../../stores/authStore";
import useAsync from "../../composables/useAsync";
import { useAdminAuth } from "../../composables/useAdminAuth";

const {userData, checkAuth} = authStore()
const {logout} = useAdminAuth()
const {run} = useAsync(() => logout().then(() => {
  checkAuth().then((response) => {
    if (!response) {
      document.location.reload();
    }
  })
}))

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
        <a class="dropdown-item align-items-center d-flex" href="#" @click.prevent="run">
          <arrow-left-start-on-rectangle-icon class="logout-icon me-1" />
          Выйти
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.logout-icon {
  width: 20px;
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
