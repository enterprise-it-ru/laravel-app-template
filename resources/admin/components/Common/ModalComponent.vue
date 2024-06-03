<script setup lang="ts">
import { Modal } from 'bootstrap'
import { useModal } from '../../composables/useModal'
import { onMounted, ref } from "vue";
import {XMarkIcon} from '@heroicons/vue/24/outline'

const { init, view, params } = useModal()
const modal = ref<Element | null>(null)

onMounted(() => {
  if (modal.value) {
    // noinspection TypeScriptValidateTypes
    const modalInstance = new Modal(modal.value)
    if ('addEventListener' in modal.value) {
      modal.value.addEventListener('hidden.bs.modal', () => {
        params.isOpen = false
      })
    }
    init(modalInstance)
  }
})
</script>

<template>
  <div ref="modal" class="modal fade" :class="params.classes" tabindex="-1">
    <div class="modal-dialog" :class="{'modal-dialog-centered': params.verticalCentered, 'with-top-margin': params.withTopMargin}">
      <template v-if="params.isOpen">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Закрыть">
              <x-mark-icon class="icon-18" />
            </button>
          </div>
          <div class="modal-body">
            <!-- dynamic components, using model to share values payload -->
            <component :is="view" v-model="params.modelValue" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  --bs-modal-header-padding: 0px;
  --bs-modal-header-border-color: transparent;
  --bs-modal-header-border-width: 0;
  --bs-modal-border-width: 0;
  --bs-modal-border-radius: 15px;
  --bs-modal-padding: 0 24px 24px 24px;
}

.btn-close {
  height: 20px;
  width: 20px;
  margin: 2px 5px -15px auto;
  z-index: 1;
  --bs-btn-close-bg: none;
  --bs-btn-box-shadow: none;
  --bs-btn-close-focus-shadow: none;
  --bs-btn-padding-x: 25px;
  --bs-btn-padding-y: 10px;
}

.with-top-margin {
  @media (max-width: 576px) {
    margin-top: 120px;
  }
}

</style>
