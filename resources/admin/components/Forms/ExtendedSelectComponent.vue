<script setup lang="ts">
import Multiselect from '@vueform/multiselect'
import '@vueform/multiselect/themes/default.css'
import { computed, reactive } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number, Array],
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
  mode: {
    type: String,
    default: 'single'
  },
  label: {
    type: [String, Number],
    default: null
  },
  placeholder: {
    type: [String],
    default: ''
  },
  noOptionsText: {
    type: [String],
    default: 'Список пуст'
  },
  noResultsText: {
    type: [String],
    default: 'Ничего не найдено'
  },
  id: {
    type: String,
    default: null
  },
  error: {
    type: [String, Number, Array],
    default: null
  },
  withoutLabel: {
    type: Boolean,
    default: false
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
  searchable: {
    type: Boolean,
    default: false
  },
  canClear: {
    type: Boolean,
    default: false
  },
  appendNewOption: {
    type: Boolean,
    default: false
  },
  hideSelected: {
    type: Boolean,
    default: false
  },
  closeOnSelect: {
    type: Boolean,
    default: true
  },
  displayName: {
    type: String,
    default: 'name'
  },
  valueProp: {
    type: String,
    default: 'id'
  },
  help: {
    type: [String, Number],
    default: null
  }
})

const emits = defineEmits(['update:modelValue'])

const inputParams = reactive({
  value: props.modelValue,
  elementId: props.id ? props.id : props.name,
  hasError: computed(() => !!props.error),
  errorMessage: computed(() => {
    if (Array.isArray(props.error)) {
      return props.error.join(',')
    }
    return props.error
  })
})

function change () {
  emits('update:modelValue', inputParams.value)
}

function clear () {
  inputParams.value = ''
  change()
}

function multipleSelectLabel (value: any) {
  const resultValue = []
  for (const index in value) {
    resultValue.push(value[index][props.displayName ?? ''])
  }
  return resultValue.join(', ')
}

</script>

<template>
  <div class="extended-select">
    <label v-if="label" class="form-label">
      {{ label }} <span v-if="required" class="text-danger">*</span>
      <v-menu v-if="help" placement="auto" class="d-inline-block">
        <span class="badge rounded-pill bg-primary form-help-badge">?</span>
        <template #popper>
          <div class="form-help-text" v-html="help" />
        </template>
      </v-menu>
    </label>
    <multiselect
      v-model="inputParams.value"
      :mode="mode"
      :class="[inputParams.hasError ? 'is-invalid' : '']"
      :options="options"
      :multiple-label="multipleSelectLabel"
      :value-prop="valueProp"
      :track-by="displayName"
      :label="displayName"
      :required="required"
      :disabled="disabled"
      :searchable="searchable"
      :multiple="multiple"
      :append-new-option="appendNewOption"
      :hide-selected="hideSelected"
      :close-on-select="closeOnSelect"
      :placeholder="placeholder"
      :no-options-text="noOptionsText"
      :no-results-text="noResultsText"
      :can-clear="canClear"
      @select="change"
      @clear="clear"
      @deselect="change"
    />
    <div v-if="inputParams.hasError" class="invalid-feedback" v-text="inputParams.errorMessage" />
  </div>
</template>

<style lang="scss">
.extended-select {
  --ms-tag-bg: var(--bs-primary);
  --ms-bg-disabled: #e9ecef;
  --ms-option-bg-selected: #e9ecef;
  --ms-option-bg-selected-pointed: #e9ecef;
  --ms-option-color-selected: #000;
  --ms-option-color-selected-pointed: #000;
  --ms-border-color: var(--bs-border-color);
  --ms-py: 0.4375rem;
  --ms-border-radius: 5px;
  --ms-radius: 5px;
  --ms-dropdown-border-color: var(--bs-border-color);

  .multiselect {
    &.is-active {
      --ms-border-color: var(--bs-primary);
      box-shadow: none;
    }

    &.is-invalid {
      --ms-border-color: var(--bs-danger);
    }
  }

  .multiselect-tags {
    padding-left: 10px;
  }
}
</style>
