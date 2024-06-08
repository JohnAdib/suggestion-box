<template>
  <button :type :aria-label="ariaLabel" :disabled :class="btnClass" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { ButtonLogic } from '@/utils/button/button-logic'
import { buttonProps } from '@/utils/button/button-props'

export default defineComponent({
  props: {
    ...buttonProps,
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button'
    },
  },
  setup(props) {
    const { btnClass } = ButtonLogic(props)
    return { btnClass }
  }
})
</script>