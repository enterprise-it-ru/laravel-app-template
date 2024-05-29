<script setup lang="ts">
import { computed, reactive, useSlots } from 'vue'
import { useDebounceFn } from '@vueuse/core'

const slots = useSlots()

interface InputProps {
  modelValue: string | number
  label?: string
  placeholder?: string
  name: string
  id?: string
  type?: string
  enterKeyHint?: string
  autocomplete?: string
  error?: string | number | any[] | null
  help?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  inputDelay?: number
}

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  label: '',
  placeholder: '',
  name: '',
  id: '',
  type: 'text',
  enterKeyHint: '',
  autocomplete: '',
  error: null,
  help: '',
  disabled: false,
  readonly: false,
  required: false,
  inputDelay: 0
})

const emits = defineEmits(['update:modelValue'])

const inputParams = reactive({
  value: props.modelValue,
  elementId: props.id ? props.id : props.name,
  hasError: computed(() => !!props.error),
  hasBefore: computed(() => !!slots.before),
  hasAfter: computed(() => !!slots.after),
  errorMessage: computed(() => {
    if (Array.isArray(props.error)) {
      return props.error.join(',')
    }
    return props.error
  }),
  pattern: computed(() => {
    if (props.type === 'number') {
      return '[0-9]*'
    }
    return null
  })
})

const updateModelValue = useDebounceFn(() => {
  emits('update:modelValue', inputParams.value)
}, props.inputDelay)
</script>

<template>
  <div>
    <label v-if="label" class="form-label" :for="inputParams.elementId">
      {{ label }} <span v-if="required" class="text-danger">*</span>
      <v-menu v-if="help" placement="auto" class="d-inline-block">
        <span class="badge rounded-pill bg-primary form-help-badge">?</span>
        <template #popper>
          <div class="form-help-text" v-html="help" />
        </template>
      </v-menu>
    </label>
    <div
      class="form-input d-flex align-items-center"
      :class=" {
        'disabled': disabled,
        'has-before-icon': inputParams.hasBefore,
        'has-after-block': inputParams.hasAfter,
        'is-invalid': inputParams.hasError,
      }"
    >
      <template v-if="inputParams.hasBefore">
        <div class="before-input-icon">
          <slot name="before" />
        </div>
      </template>
      <input
        :id="inputParams.elementId"
        v-model="inputParams.value"
        :class="[inputParams.hasError ? 'is-invalid' : '']"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :readonly="readonly"
        :enterkeyhint="enterKeyHint"
        :pattern="inputParams.pattern"
        :autocomplete="autocomplete !== '' ? autocomplete : undefined"
        class="form-control"
        @input="updateModelValue"
      >
      <div v-if="inputParams.hasAfter" ref="after">
        <div class="after-input-block">
          <slot name="after" />
        </div>
      </div>
    </div>
    <div v-if="inputParams.hasError" class="invalid-feedback" v-text="inputParams.errorMessage" />
  </div>
</template>

<style lang="scss" scoped>
.help {
  margin-top: 0.25rem;
}

.before-input-icon {
  margin: 0 0 0 14px;
  z-index: 2;
  position: relative;
}

.has-before-icon {
  .form-control {
    margin: 0 0 0 -39px;
    padding-left: 50px;
  }
}

.has-after-block {
  .form-control {
    padding-right: var(--input-right-padding, 16.5px);
  }
}

.after-input-block {
  margin-left: var(--after-input-block-margin-left, 0);
}
</style>
