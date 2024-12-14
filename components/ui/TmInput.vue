<template>
  <div class="form-item" :class="{ 'form-item__error': error }">
    <label class="form-item-input">
      <span
        class="text-xs mb-1 inline-block text-[#687588]"
        :class="labelClass"
      >
        {{ label }}
        <span class="text-[#E03137] text-sm" v-if="reqiredIcon">*</span>
      </span>
      <input
        :type="type"
        :class="inputClass"
        class="form-input"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue"
        ref="inputRef"
        :maxlength="maxlength"
        v-maska
        :data-maska="dataMaska"
        :disabled="disabled"
        :required="required"
      />
    </label>
    <div
      class="mt-1 flex items-center text-xs text-red-500 error-text"
      v-if="error"
    >
      <img src="/icons/alert-circle.svg" alt="alert-circle" class="mr-1" />
      <span>{{ errorText }}</span>
    </div>
  </div>
</template>
<script setup>
import { vMaska } from "maska";
const props = defineProps({
  itemClass: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  inputClass: String,
  modelValue: "",
  label: String,
  error: Boolean,
  errorText: String,
  placeholder: {
    type: String,
    default: " ",
  },
  ref: String,
  labelClass: String,
  maxlength: {
    type: String,
  },
  dataMaska: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  reqiredIcon: {
    type: Boolean,
    default: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

function updateValue(e) {
  emit("update:modelValue", e.target.value);
}
</script>
<style lang="scss" scoped>
.form-item {
  position: relative;
  width: 100%;

  &-input {
    position: relative;
  }

  input {
    padding-top: 14px;
    border: 1px solid #cbd5e0;
    background-color: transparent;
    z-index: 2;
    position: relative;
    height: 40px;
    width: 100%;
    padding: 10px 12px;
    font-size: 14px;
    line-height: 20px;
    outline: none;
    color: #687588;
  }

  &__error {
    input {
      border: 1px solid #e01f19 !important;
    }
  }
  .input-filter {
    height: 32px;
    font-size: 12px;
    padding: 0 8px;
    border-radius: 4px;
  }

  &.absolute-error-text {
    .error-text {
      position: absolute;
    }
  }
}
</style>
