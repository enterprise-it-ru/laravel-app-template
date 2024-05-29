<script setup lang="ts">
import { computed, reactive } from 'vue'

const emits = defineEmits<{(event: 'update:modelValue', value: any): void }>()

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  options: {
    type: [Array, Object],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  label: {
    type: [String, Number],
    default: null
  },
  id: {
    type: String,
    default: null
  },
  error: {
    type: [String, Number, Array],
    default: null
  },
  defaultNothing: {
    type: Boolean,
    default: true
  },
  defaultNothingText: {
    type: String,
    default: null
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  multiple: {
    type: Boolean,
    default: false
  },
  displayName: {
    type: String,
    default: 'name'
  },
  help: {
    type: [String, Number],
    default: null
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

function getName (option: any) {
  return option[props.displayName]
}

function change () {
  emits('update:modelValue', inputParams.value)
}
</script>

<template>
  <div class="form-input">
    <label v-if="label" class="form-label" :for="inputParams.elementId">
      {{ label }} <span v-if="required" class="text-danger">*</span>
      <v-menu v-if="help" placement="auto" class="d-inline-block">
        <span class="badge rounded-pill bg-primary form-help-badge">?</span>
        <template #popper>
          <div class="form-help-text" v-html="help" />
        </template>
      </v-menu>
    </label>
    <select
      :id="inputParams.elementId"
      v-model="inputParams.value"
      class="form-select"
      :class="{'is-invalid': inputParams.hasError}"
      :multiple="multiple"
      :name="name"
      :disabled="disabled"
      @change="change"
    >
      <option v-if="defaultNothing" value="" v-text="defaultNothingText ?? 'Ничего не выбрано'" />
      <option v-for="(option, index) in options" :key="index" :value="option.id" v-text="getName(option)" />
    </select>
    <span v-if="inputParams.hasError" class="invalid-feedback" v-text="inputParams.errorMessage" />
  </div>
</template>

<style scoped lang="scss">
.help {
  margin-top: 0.25rem;
}
</style>
