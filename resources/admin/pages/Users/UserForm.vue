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
import { useNotifications } from "../../composables/useNotifications";
import { useRoute, useRouter } from "vue-router";
import PreloaderComponent from "../../components/Common/PreloaderComponent.vue";

const {pageHeader, breadcrumbsPreset} = usePage()
const router = useRouter()
const route = useRoute()

breadcrumbsPreset.users()
pageHeader.title = 'Добавить пользователя'

useHead({
  title: 'Добавить пользователя'
})

const form = reactive({
  id: null,
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

const {run: getFormParams} = useAsync(() => axios.get('/users/get-form-params/')
  .then((response) => {
    formParams.value = response.data;
  })
)
getFormParams()

const notifications = useNotifications()
const postUrl = route.params.id ? '/users/update' : '/users/create';
const {loading, run: sendForm, validationErrors} = useAsync(() => axios.post(postUrl, form)
  .then((response) => {
    if (route.params.id) {
      notifications.success('Пользователь #' + response.data.id + ' успешно обновлен')
    } else {
      notifications.success('Пользователь #' + response.data.id + ' успешно добавлен')
    }
    router.push('/admin/users')
  })
)

const {loading: loadingForm, run: getEditForm} = useAsync(() => axios.get('/users/get-user-form/' + route.params.id)
  .then((response) => {
    form.id = response.data.id;
    form.name = response.data.name;
    form.email = response.data.email;
    form.active = response.data.active;
    form.role = response.data.role;
  })
)

if(route.params.id) {
  // Get user edit form
  getEditForm()
}

</script>

<template>
  <admin-page-layout>
    <form action="#" @submit.prevent="sendForm">
      <preloader-component v-if="loadingForm" />
      <div v-else class="row">
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
                :error="validationErrors?.errors?.name"
                name="name"
                label="Имя"
                required
                class="mb-2"
              />
              <input-text-component
                v-model="form.email"
                :error="validationErrors?.errors?.email"
                name="email"
                label="E-mail"
                required
                class="mb-2"
              />
              <extended-select-component
                v-model="form.role"
                :error="validationErrors?.errors?.role"
                name="role"
                :options="formParams.roles"
                label="Роль"
                required
                class="mb-2"
              />
              <input-text-component
                v-model="form.password"
                :error="validationErrors?.errors?.password"
                name="password"
                label="Пароль"
                type="password"
              />
              <div class="mb-2">
                <span v-if="route.params.id" class="text-secondary small">Заполняется только если нужно изменить пароль</span>
              </div>

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
