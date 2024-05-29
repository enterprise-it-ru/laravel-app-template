<script setup lang="ts">
import { authStore } from "../stores/authStore";
import { useAdminAuth } from "../composables/useAdminAuth";
import useAsync from "../composables/useAsync";
import { reactive, ref } from "vue";
import { AuthLoginForm } from "../types/auth";
import { useRouter } from "vue-router";
import InputTextComponent from "../components/Forms/InputTextComponent.vue";
import CheckboxComponent from "../components/Forms/CheckboxComponent.vue";

const router = useRouter()
const form = reactive<AuthLoginForm>({
  email: '',
  password: '',
  remember: true
})
const error = ref(null)

const {loading: checkingAuth, run: checkAuth} = useAsync(() => authStore()
  .checkAuth()
  .then(() => {
    router.push('/admin')
  })
)

const {login} = useAdminAuth()
const {loading, run: sendForm, validationErrors} = useAsync(() => login(form)
  .then(() => {
    checkAuth()
  })
  .catch((response) => {
    if (response.response?.status === 401 && response.response?.data?.message) {
      error.value = response.response.data.message;
    } else {
      throw response
    }
  })
)

</script>

<template>
  <div class="d-block mt-5 login-page">
    <div class="col-md-5 mx-auto">
      <div>
        <h2 class="mt-6 text-center text-3xl fw-bolder text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div class="card shadow mt-4 border-0">
        <div class="card-body">
          <form class="mt-8 space-y-6" action="#" method="POST" @submit.prevent="sendForm">
            <div v-if="error" class="alert alert-danger">
              {{ error }}
            </div>

            <input-text-component
              v-model="form.email"
              :error="validationErrors?.errors?.email"
              label="E-mail"
              placeholder="E-mail"
              name="email"
              autocomplete="email"
              type="email"
              class="mb-4"
              required
            />
            <input-text-component
              v-model="form.password"
              :error="validationErrors?.errors?.password"
              label="Password"
              placeholder="Password"
              name="password"
              autocomplete="current-password"
              type="password"
              class="mb-3"
              required
            />
            <checkbox-component
              v-model="form.remember"
              :error="validationErrors?.errors?.remember"
              name="remember"
              label="Remember me"
              class="mb-3"
            />

            <button type="submit" class="btn btn-primary w-100" :disabled="loading || checkingAuth">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-body {
  --mo-card-spacer-y: 3rem;
  --mo-card-spacer-x: 3rem;
}
</style>
