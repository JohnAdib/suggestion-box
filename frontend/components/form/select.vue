<template>
  <div :class="containerClass">
    <FormLabel :id :required>{{ label }}</FormLabel>
    <select :id :required :value @input="updateValue"
      class="block w-full border border-slate-200 rounded transition focus:border-teal-500 px-4 py-1 leading-6 h-9 focus:outline-none select-none">
      <option v-if="!value" value="">Please select {{ label }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
    </select>
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
    options: {
      type: Array as () => { value: string, text: string }[],
      required: true,
      default: () => []
    },
    value: {
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
    containerClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('update:value', event.target.value);
    }
  }
})
</script>
