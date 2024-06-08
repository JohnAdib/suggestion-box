<!-- TODO: auto height -->
<template>
  <div :class="containerClass">
    <FormLabel :id :required>{{ label }}</FormLabel>
    <textarea :id :required :value @input="updateValue"
      class="block w-full border border-slate-200 rounded transition focus:border-teal-500 px-4 py-1 leading-6 h-fit min-h-24 max-h-80 focus:outline-none"></textarea>
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
    updateValue(event: Event) {
      this.$emit('update:value', (event.target as HTMLInputElement).value);
    }
  }
})
</script>
