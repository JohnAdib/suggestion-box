import { type PropType } from 'vue'
import { ButtonStyle } from './button-style'

export const buttonProps = {
  buttonStyle: {
    type: String as PropType<ButtonStyle>,
    default: ButtonStyle.Primary
  },
  disabled: Boolean,
  ariaLabel: String,
  href: String,
}