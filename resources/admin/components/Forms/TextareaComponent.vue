<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useDebounceFn } from '@vueuse/core'

const emits = defineEmits<{(event: 'update:modelValue', value: any): void }>()

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  enterKeyHint: {
    type: String,
    default: ''
  },
  autocomplete: {
    type: String,
    default: ''
  },
  error: {
    type: [String, Number, Array],
    default: null
  },
  help: {
    type: [String, Number],
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  resize: {
    type: Boolean,
    default: true
  },
  inputDelay: {
    type: Number,
    default: 0
  }
})

const inputParams = reactive({
  value: props.modelValue,
  elementId: props.id ? props.id : props.name,
  hasError: computed(() => {
    return !!props.error
  }),
  errorMessage: computed(() => {
    if (Array.isArray(props.error)) {
      return props.error.join(',')
    }
    return props.error
  })
})

// Update model value event
const updateModelValue = useDebounceFn(() => {
  emits('update:modelValue', inputParams.value)
}, props.inputDelay)

</script>

<template>
  <div class="form-input" :class="{'disabled': disabled}">
    <label v-if="label" class="form-label" :for="inputParams.elementId">
      {{ label }} <span v-if="required" class="text-danger">*</span>
      <v-menu v-if="help" placement="auto" class="d-inline-block">
        <span class="badge rounded-pill bg-primary form-help-badge">?</span>
        <template #popper>
          <div class="form-help-text" v-html="help" />
        </template>
      </v-menu>
    </label>
    <textarea
      :id="inputParams.elementId"
      v-model="inputParams.value"
      :class="{'is-invalid': inputParams.hasError, 'textarea-no-resize': ! resize}"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      :enterkeyhint="enterKeyHint"
      :autocomplete="autocomplete !== '' ? autocomplete : null"
      class="form-control"
      @input="updateModelValue"
    />
    <div v-if="inputParams.hasError" class="invalid-feedback" v-text="inputParams.errorMessage" />
  </div>
</template>

<style scoped lang="scss">
.help {
  margin-top: 0.25rem;
}
</style>
