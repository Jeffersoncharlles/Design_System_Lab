import styles from './CheckBox.module.css'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';


export interface CheckBoxProps {
  // children: React.ReactNode
}



export const CheckBox = ({ }: CheckBoxProps) => {
  return (
    <CheckboxPrimitive.Root className={styles.checkbox} >
      <CheckboxPrimitive.Indicator asChild>
        <Check className={styles.checkboxIcon} weight="bold" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
