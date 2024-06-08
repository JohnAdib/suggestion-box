import { type PropType } from 'vue'
import type { ButtonStyleType } from './button-style-type'

export const buttonProps = {
  ButtonStyleType: {
    type: String as PropType<ButtonStyleType>,
    default: "primary"
  },
  disabled: Boolean,
  ariaLabel: String,
  href: String,
}