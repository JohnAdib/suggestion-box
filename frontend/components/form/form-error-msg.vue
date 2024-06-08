<template>
  <span v-if="msg" class="text-red-500 text-sm">{{ msg }}</span>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
})
</script>
