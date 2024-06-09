import { computed } from 'vue';
import type { ButtonStyleType } from './button-style-type';

interface IButtonLogicOptions {
  ButtonStyleType: ButtonStyleType;
  disabled: boolean;
}

interface IButtonLogic {
  btnClass: ComputedRef<string>;
}

export function ButtonLogic(props: IButtonLogicOptions)
  : IButtonLogic {
  const btnClass = computed(() => {
    let baseClass = 'text-xs sm:text-sm px-2 sm:px-4 md:px-5 py-2 leading-6 transition rounded hover:focus:outline-none focus:ring-2 focus:ring-opacity-50 select-none hover:opacity-70 focus:opacity-90';
    switch (props.ButtonStyleType) {
      case 'primary':
        return `${baseClass} text-white bg-emerald-400`;
      case 'secondary':
        return `${baseClass} text-[#1E293B] bg-[#EAF0F6]`;
      default:
        return baseClass;
    }
  });
  return { btnClass };
}
