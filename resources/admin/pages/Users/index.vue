<script setup lang="ts">
import AdminPageLayout from "../../components/Layout/AdminPageLayout.vue";
import { usePage } from "../../composables/page/usePage";
import { useHead } from '@unhead/vue'
import InputTextComponent from "../../components/Forms/InputTextComponent.vue";
import ExtendedSelectComponent from "../../components/Forms/ExtendedSelectComponent.vue";
import useAsync from "../../composables/useAsync";
import axios from "axios";
import PreloaderComponent from "../../components/Common/PreloaderComponent.vue";
import { FilterOptions, UserListPage } from "../../types/Users";
import { reactive, ref } from "vue";
import { Bars3Icon } from "@heroicons/vue/24/outline"
import { useModal } from "../../composables/useModal";
import ConfirmUserDeletionModal from "../../components/Modals/ConfirmUserDeletionModal.vue";
import { useRoute, useRouter } from "vue-router";
import LaravelRouterPagination from "../../components/Pagination/LaravelRouterPagination.vue";

const {pageHeader, breadcrumbsPreset} = usePage()
const router = useRouter()
const route = useRoute()

breadcrumbsPreset.users()
pageHeader.title = 'Пользователи'

useHead({
  title: 'Пользователи'
})

const filter = reactive({
  query: route.query.query as string | '',
  active: route.query.active as string | '',
  role: route.query.role as string | '',
  page: route.query.page as string | undefined,
})

const filterOptions = ref<FilterOptions>()
const {run: getFilters} = useAsync(() => axios.get('/users/list-filters')
  .then((response) => {
    filterOptions.value = response.data
  })
)
getFilters()


const pageData = ref<UserListPage>()
const {loading, run: getUsers} = useAsync(() => axios.get('/users', {params: filter})
  .then((response) => {
    pageData.value = response.data
  })
)
getUsers()

const modal = useModal()

function confirmDeleteUser(userId: number) {
  modal.open({
    component: ConfirmUserDeletionModal,
    classes: '',
    modelValue: {
      id: userId,
      userDeleted: () => {
        getUsers()
      }
    }
  })
}

function setFilter() {
  // reset pagination when filter is changed
  filter.page = undefined

  // remove empty values from filter for clean url
  const cleanedFilter = Object.fromEntries(
    Object.entries(filter).filter(([, value]) => {
      return value !== '' && value !== null && value !== undefined;
    })
  );

  router.options.history.push(router.resolve({name: 'Users', query: cleanedFilter}).fullPath)
  getUsers()
}

</script>

<template>
  <admin-page-layout>
    <div v-if="filterOptions" class="filter row">
      <div class="col-12 col-md-4 mb-2 mb-md-3-2">
        <input-text-component
          v-model="filter.query"
          :input-delay="500"
          name="query"
          label="Поиск"
          placeholder="Ведите запрос"
          autocomplete="off"
          @update:model-value="setFilter()"
        />
      </div>
      <div class="col-12 col-md-2 mb-2 mb-md-3">
        <extended-select-component
          v-model="filter.active"
          name="active"
          :options="filterOptions.active"
          label="Активность"
          placeholder="Активность"
          can-clear
          @update:model-value="setFilter()"
        />
      </div>
      <div class="col-12 col-md-2 mb-3">
        <extended-select-component
          v-model="filter.role"
          name="active"
          :options="filterOptions.roles"
          label="Роль"
          placeholder="Выберите роль"
          can-clear
          @update:model-value="setFilter()"
        />
      </div>
      <div class="col-auto flex-grow-1 text-md-end align-self-end mb-3">
        <router-link to="/admin/users/create" class="btn btn-primary">
          Добавить
        </router-link>
      </div>
    </div>
    <preloader-component v-if="loading" class="mt-5" centered />
    <div v-if="pageData && !loading" class="table-responsive">
      <table class="table simple-table table-hover simple-table-striped table-borderless shadow-sm">
        <thead>
          <tr class="border-bottom">
            <th style="width: 1px;" />
            <th>#</th>
            <th>Имя</th>
            <th>Активность</th>
            <th>E-mail</th>
            <th>Роль</th>
            <th>Дата создания</th>
            <th>Дата изменения</th>
            <th>Создал</th>
            <th>Изменил</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="pageData.data.length > 0">
            <tr
              v-for="user of pageData.data"
              :key="user.id"
              class="cursor-pointer"
              @click="router.push({name: 'EditUser', params: {id: user.id}})"
            >
              <td class="action-btn-column align-middle" @click.stop>
                <v-dropdown>
                  <button class="btn btn-sm">
                    <bars3-icon class="icon-24" />
                  </button>
                  <template #popper>
                    <div class="list-group list-group-flush min-w-150p">
                      <router-link :to="{name: 'EditUser', params: {id: user.id}}" class="list-group-item">
                        Изменить
                      </router-link>
                      <a v-close-popper href="#" class="list-group-item text-danger" @click.prevent="confirmDeleteUser(user.id)">Удалить</a>
                    </div>
                  </template>
                </v-dropdown>
              </td>
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.active ? 'Да' : 'Нет' }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.role }}</td>
              <td>{{ user.createdAt }}</td>
              <td>{{ user.updatedAt }}</td>
              <td>{{ user.createdBy }}</td>
              <td>{{ user.updatedBy }}</td>
            </tr>
          </template>
          <tr v-else>
            <td colspan="9" class="text-center">
              Список пуст
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <laravel-router-pagination v-if="pageData" :data="pageData" />
  </admin-page-layout>
</template>

<style scoped lang="scss">
.filter {
  --bs-body-bg: #fff;
}

.action-btn-column {
  padding: 0 0 0 8px;

  .btn {
    --bs-btn-box-shadow: none;
  }
}

</style>
