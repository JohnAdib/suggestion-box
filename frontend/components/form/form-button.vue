<template>
  <button :type :aria-label="ariaLabel" :disabled :class="btnClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { ButtonLogic } from '@/utils/button/button-logic';
import { buttonProps } from '@/utils/button/button-props';

export default defineComponent({
  props: {
    ...buttonProps,
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button'
    },
    onClick: Function as PropType<() => void>
  },
  setup(props) {
    const { btnClass } = ButtonLogic(props)

    const handleClick = () => {
      if (props.onClick) {
        props.onClick();
      }
    };

    return { btnClass, handleClick }
  }
})
</script>