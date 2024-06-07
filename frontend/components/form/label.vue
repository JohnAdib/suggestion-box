<template>
  <label :for="id" class="block text-gray-700">{{ text }}</label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
})
</script>
