<script setup lang="ts">
import AdminPageLayout from "../../components/Layout/AdminPageLayout.vue";
import { usePage } from "../../composables/page/usePage";
import { useHead } from '@unhead/vue'
import InputTextComponent from "../../components/Forms/InputTextComponent.vue";
import { reactive, ref } from "vue";
import CheckboxComponent from "../../components/Forms/CheckboxComponent.vue";
import ExtendedSelectComponent from "../../components/Forms/ExtendedSelectComponent.vue";
import useAsync from "../../composables/useAsync";
import axios from "axios";

const {pageHeader, breadcrumbsPreset} = usePage()

breadcrumbsPreset.users()
pageHeader.title = 'Добавить пользователя'

useHead({
  title: 'Добавить пользователя'
})

const form = reactive({
  name: '',
  email: '',
  active: true,
  role: 'user',
  password: '',
})

const formParams = ref({
  roles: [
    {
      id: 'admin',
      name: 'Администратор',
    },
    {
      id: 'user',
      name: 'Пользователь',
    }
  ]
})

const {loading, run: sendForm, validationErrors} = useAsync((page = 1) => axios.post('/users/create', {params: form})
  .then((response) => {
    console.log(response)
  })
)

</script>

<template>
  <admin-page-layout>
    <form action="#" @submit.prevent="sendForm">
      <div class="row">
        <div class="col-md-5">
          <div class="card form-card shadow-sm">
            <div class="card-body">
              <checkbox-component
                v-model="form.active"
                name="active"
                label="Активен"
                class="mb-2"
              />
              <input-text-component
                v-model="form.name"
                :error="validationErrors"
                name="name"
                label="Имя"
                required
                class="mb-2"
              />
              <input-text-component
                v-model="form.email"
                :error="validationErrors"
                name="email"
                label="E-mail"
                required
                class="mb-2"
              />
              <extended-select-component
                v-model="form.role"
                :error="validationErrors"
                name="role"
                :options="formParams.roles"
                label="Роль"
                required
                class="mb-2"
              />
              <input-text-component
                v-model="form.password"
                :error="validationErrors"
                name="password"
                label="Пароль"
                type="password"
                required
                class="mb-2"
              />
              <div class="mt-4">
                <button :disabled="loading" type="submit" class="btn btn-primary me-2">
                  <span v-if="loading" class="spinner-border spinner-border-sm" aria-hidden="true" />
                  Сохранить
                </button>
                <router-link to="/admin/users" class="btn btn-outline-secondary">
                  Назад
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </admin-page-layout>
</template>

<style scoped lang="scss">
.action-btn-column {
  padding: 0 0 0 8px;

  .btn {
    --bs-btn-box-shadow: none;
  }
}

</style>
