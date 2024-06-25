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
  <v-dropdown>
    <div class="user-profile-button d-flex align-items-center cursor-pointer">
      <user-icon class="user-profile-icon flex-shrink-0" />
      <span class="flex-grow-1 text-break">{{ userData.email }}</span>
      <chevron-down-icon class="icon-18 flex-shrink-0" />
    </div>
    <template #popper>
      <div class="list-group list-group-flush min-w-150p">
        <a
          v-close-popper
          href="#"
          class="list-group-item align-items-center d-flex"
          @click.prevent="run"
        ><arrow-left-start-on-rectangle-icon class="logout-icon me-2" /> Выйти</a>
      </div>
    </template>
  </v-dropdown>
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
