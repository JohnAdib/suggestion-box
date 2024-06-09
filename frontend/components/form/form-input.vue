<template>
  <div :class="class">
    <FormLabel :id :required>{{ label }}</FormLabel>
    <input :type :id :autocomplete :placeholder :required :value="modelValue" @input="updateValue"
      class="block w-full border border-slate-200 rounded transition focus:border-teal-500 px-4 py-1 leading-6 h-9 focus:outline-none" />
    <FormErrorMsg :msg="error" />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: String,
      default: '',
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    class: {
      type: String,
      default: ''
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
})
</script>
