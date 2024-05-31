<script setup lang="ts">
import AdminPageLayout from "../../components/Layout/AdminPageLayout.vue";
import { usePage } from "../../composables/page/usePage";
import { useHead } from '@unhead/vue'
import InputTextComponent from "../../components/Forms/InputTextComponent.vue";
import { reactive } from "vue";
import CheckboxComponent from "../../components/Forms/CheckboxComponent.vue";

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
  role: '',
  password: '',
})


</script>

<template>
  <admin-page-layout>
    <form action="#">
      <div class="row">
        <div class="col-md-5">
          <div class="card form-card shadow-sm">
            <div class="card-body ">
              <checkbox-component
                v-model="form.active"
                name="active"
                label="Активен"
                class="mb-2"
              />
              <input-text-component
                v-model="form.name"
                name="name"
                label="Имя"
                required
                class="mb-2"
              />
              <input-text-component
                v-model="form.email"
                name="email"
                label="E-mail"
                required
                class="mb-2"
              />
              <input-text-component
                v-model="form.password"
                name="password"
                label="Пароль"
                type="password"
                required
                class="mb-2"
              />
              <div class="mt-4">
                <button class="btn btn-primary me-2">
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
