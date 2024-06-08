import { computed } from 'vue';
import { ButtonStyle } from './button-style';

interface IButtonLogicOptions {
  buttonStyle: ButtonStyle;
  disabled: boolean;
  loading: boolean;
}

interface IButtonLogic {
  btnClass: ComputedRef<string>;
}

export function ButtonLogic(props: IButtonLogicOptions)
  : IButtonLogic {
  const btnClass = computed(() => {
    let baseClass = 'text-sm px-4 md:px-5 py-2 leading-6 transition rounded hover:focus:outline-none focus:ring-2 focus:ring-opacity-50 select-none hover:opacity-70 focus:opacity-90'
    switch (props.buttonStyle) {
      case 'primary':
        return `${baseClass} text-white bg-emerald-400`
      case 'secondary':
        return `${baseClass} text-[#1E293B] bg-[#EAF0F6]`
      default:
        return baseClass
    }
  })
  return { btnClass }
}