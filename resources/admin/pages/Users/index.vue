<script setup lang="ts">
import AdminPageLayout from "../../components/Layout/AdminPageLayout.vue";
import { usePage } from "../../composables/page/usePage";
import { useHead } from '@unhead/vue'
import InputTextComponent from "../../components/Forms/InputTextComponent.vue";
import ExtendedSelectComponent from "../../components/Forms/ExtendedSelectComponent.vue";
import useAsync from "../../composables/useAsync";
import axios from "axios";
import PreloaderComponent from "../../components/Common/PreloaderComponent.vue";
import { UserListPage } from "../../types/Users";
import { reactive, ref } from "vue";

const {pageHeader, breadcrumbsPreset} = usePage()

breadcrumbsPreset.users()
pageHeader.title = 'Пользователи'

useHead({
  title: 'Пользователи'
})

interface FilterOptions {
  active: [],
  roles: []
}

const filterOptions = ref<FilterOptions>()
const filter = reactive({
  query: "",
  active: null,
  role: ""
})

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

</script>

<template>
  <admin-page-layout>
    <preloader-component v-if="loading" />
    <div v-if="filterOptions" class="filter row mb-3">
      <div class="col-4">
        <input-text-component
          v-model="filter.query"
          :input-delay="500"
          name="query"
          label="Поиск"
          placeholder="Ведите запрос"
          @update:model-value="getUsers()"
        />
      </div>
      <div class="col-2">
        <extended-select-component
          v-model="filter.active"
          name="active"
          :options="filterOptions.active"
          label="Активность"
          placeholder="Активность"
          can-clear
          @update:model-value="getUsers()"
        />
      </div>
      <div class="col-2">
        <extended-select-component
          v-model="filter.role"
          name="active"
          :options="filterOptions.roles"
          label="Роль"
          placeholder="Выберите роль"
          can-clear
          @update:model-value="getUsers()"
        />
      </div>
      <div class="col-auto flex-grow-1 text-end align-self-end">
        <button class="btn btn-primary">
          Добавить
        </button>
      </div>
    </div>

    <table v-if="pageData" class="table simple-table table-hover table-borderless">
      <thead>
        <tr class="border-bottom">
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
          <tr v-for="user of pageData.data" :key="user.id">
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
  </admin-page-layout>
</template>

<style scoped lang="scss">

</style>
