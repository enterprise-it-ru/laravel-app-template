<script setup lang="ts">
import { computed, reactive, useSlots } from 'vue'

const props = defineProps<{
  modelValue?: string | boolean,
  label?: string,
  name: string,
  id?: string | number,
  error?: string | number | [],
  help?: string | number
  disabled?: boolean,
  readonly?: boolean,
  required?: boolean,
}>()

const emits = defineEmits(['update:modelValue'])
const slots = useSlots()

const inputParams = reactive({
  value: props.modelValue,
  elementId: String(props.id ? props.id : props.name),
  hasError: computed(() => !!props.error),
  hasLabelSlot: computed(() => !!slots.label),
  errorMessage: computed(() => {
    if (Array.isArray(props.error)) {
      return props.error.join(',')
    }
    return props.error
  })
})

function updateModelValue () {
  emits('update:modelValue', inputParams.value)
}
</script>

<template>
  <div class="form-check">
    <input
      :id="inputParams.elementId"
      v-model="inputParams.value"
      :name="name"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      :class="{'is-invalid': inputParams.hasError}"
      class="form-check-input cursor-pointer"
      type="checkbox"
      @change="updateModelValue"
    >
    <label v-if="!inputParams.hasLabelSlot" class="form-check-label cursor-pointer" :for="inputParams.elementId" v-text="label" />
    <label v-if="inputParams.hasLabelSlot" class="form-check-label cursor-pointer" :for="inputParams.elementId">
      <slot name="label" />
    </label>
    <span v-if="inputParams.hasError" class="invalid-feedback mt-0" v-text="inputParams.errorMessage" />
    <div v-if="help" class="small help opacity-75" v-text="help" />
  </div>
</template>
