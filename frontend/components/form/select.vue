<template>
  <div class="mb-4">
    <Label :id="id" :text="label" />
    <select
      :id="id"
      v-model="value"
      @change="$emit('update:modelValue', $event.target.value)"
      class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
    </select>
    <span v-if="error" class="text-red-500 text-sm">{{ error }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Label from './Label.vue'

export default defineComponent({
  components: {
    Label
  },
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
      required: true
    },
    value: {
      type: String,
      required: true
    },
    error: String
  },
  emits: ['update:modelValue']
})
</script>
