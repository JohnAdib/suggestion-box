<template>
  <NuxtLink :to="href" :aria-label="ariaLabel" :class="btnClass">
    <slot></slot>
  </NuxtLink>
</template>

<script lang="ts">
import { ButtonLogic } from '@/utils/button/button-logic'
import { buttonProps } from '@/utils/button/button-props'

export default defineComponent({
  props: {
    ...buttonProps,
    href: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { btnClass } = ButtonLogic(props)
    return { btnClass }
  }
})
</script>