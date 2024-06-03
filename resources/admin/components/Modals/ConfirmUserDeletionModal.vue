<script setup lang="ts">
import { useModal } from "../../composables/useModal";
import {ExclamationTriangleIcon} from '@heroicons/vue/24/outline'
import useAsync from "../../composables/useAsync";
import axios from "axios";
import { useNotifications } from "../../composables/useNotifications";

const modal = useModal()
const props = defineProps<{
  modelValue: {
    id: number
    userDeleted: () => void
  }
}>()

const notifications = useNotifications()
const {loading, run: deleteUser} = useAsync(() => axios.post('/users/delete/' + props.modelValue.id)
  .then(() => {
    notifications.success('Пользователь #' + props.modelValue.id + ' успешно удален')
    modal.close();
    props.modelValue.userDeleted()
  })
)

</script>

<template>
  <div class="row">
    <div class="col-auto">
      <div class="alert-icon">
        <exclamation-triangle-icon class="icon-24" />
      </div>
    </div>
    <div class="col-auto flex-grow-1">
      <h5 class="confirm-title">
        Подтвердите удаление
      </h5>
      <div class="confirm-text mb-3">
        Вы действительно хотите удалить пользователя?
      </div>
      <div class="text-end">
        <button class="btn btn-outline-secondary me-2" @click.prevent="modal.close()">
          Отмена
        </button>
        <button :disabled="loading" class="btn btn-danger" @click.prevent="deleteUser">
          Подтвердить
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.alert-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgb(254 226 226 / 1);
  color: rgb(220 38 38 / 1);
}

.confirm-title {
  font-size: 1rem;
  font-weight: 600;
}

.confirm-text {
  color: rgb(107 114 128 / 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

</style>
