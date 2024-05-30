<script setup lang="ts">
import AdminPageLayout from "../../components/Layout/AdminPageLayout.vue";
import { usePage } from "../../composables/page/usePage";
import { useHead } from '@unhead/vue'
import InputTextComponent from "../../components/Forms/InputTextComponent.vue";
import ExtendedSelectComponent from "../../components/Forms/ExtendedSelectComponent.vue";

const { pageHeader, breadcrumbsPreset } = usePage()

breadcrumbsPreset.users()
pageHeader.title = 'Пользователи'

useHead({
  title: 'Пользователи'
})

const filterOptions = [
  {
    id: 1,
    name: 'Активен',
  },
  {
    id: 2,
    name: 'Блокирован',
  }
]

const roles = [
  {
    id: 1,
    name: 'Администратор',
  },
  {
    id: 2,
    name: 'Пользователь',
  }
]

</script>

<template>
  <admin-page-layout>
    <div class="filter mb-3">
      <div class="row">
        <div class="col-4">
          <input-text-component
            name="query"
            label="Поиск"
            placeholder="Ведите запрос"
          />
        </div>
        <div class="col-2">
          <extended-select-component
            name="active"
            :options="filterOptions"
            label="Активность"
            placeholder="Активность"
            can-clear
          />
        </div>
        <div class="col-2">
          <extended-select-component
            name="active"
            :options="roles"
            label="Роль"
            placeholder="Выберите роль"
            can-clear
          />
        </div>
        <div class="col-auto flex-grow-1 text-end align-self-end">
          <button class="btn btn-primary">
            Добавить
          </button>
        </div>
      </div>
    </div>

    <table class="table simple-table table-hover table-borderless">
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
        <tr>
          <td>1</td>
          <td>Админов Админ Админович</td>
          <td>Yes</td>
          <td>email@example.com</td>
          <td>Администратор</td>
          <td>31.01.2024 14:45:34</td>
          <td>31.01.2024 14:45:34</td>
          <td>Система</td>
          <td>Система</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Админов Админ Админович</td>
          <td>Yes</td>
          <td>email@example.com</td>
          <td>Администратор</td>
          <td>31.01.2024 14:45:34</td>
          <td>31.01.2024 14:45:34</td>
          <td>Система</td>
          <td>Система</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Админов Админ Админович</td>
          <td>Yes</td>
          <td>email@example.com</td>
          <td>Администратор</td>
          <td>31.01.2024 14:45:34</td>
          <td>31.01.2024 14:45:34</td>
          <td>Система</td>
          <td>Система</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Админов Админ Админович</td>
          <td>Yes</td>
          <td>email@example.com</td>
          <td>Администратор</td>
          <td>31.01.2024 14:45:34</td>
          <td>31.01.2024 14:45:34</td>
          <td>Система</td>
          <td>Система</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Админов Админ Админович</td>
          <td>Yes</td>
          <td>email@example.com</td>
          <td>Администратор</td>
          <td>31.01.2024 14:45:34</td>
          <td>31.01.2024 14:45:34</td>
          <td>Система</td>
          <td>Система</td>
        </tr>
      </tbody>
    </table>
  </admin-page-layout>
</template>

<style scoped lang="scss">

</style>
