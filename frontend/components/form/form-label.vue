<template>
  <label :for="id"
    class="block text-slate-800 font-medium leading-5 text-xs sm:text-sm md:text-base mb-1 md:mb-2 select-none"
    title="Required to fill in">
    <slot></slot>
    <span v-if="required" class="text-red-400 inline-block" id="required-description">*</span>
  </label>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false
    }
  },
})
</script>