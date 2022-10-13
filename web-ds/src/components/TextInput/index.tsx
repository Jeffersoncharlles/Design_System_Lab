import styles from './TextInput.module.css'

import { Slot } from '@radix-ui/react-slot'

export interface TextInputRoot {
  children: React.ReactNode
}
export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export interface TextInputIcon {
  children: React.ReactNode
}



const TextInputRoot = ({ children }: TextInputRoot) => {
  return (
    <div className={styles.textInputRoot} >
      {children}
    </div>
  )
}


const TextInputIcon = ({ children }: TextInputIcon) => {
  return (
    <Slot className={styles.textIcon} >
      {children}
    </Slot>
  )
}


const TextInputInput = ({ ...rest }: TextInputProps) => {
  return (
    <input  {...rest} className={styles.textInputRoot} />
  )
}



export const TextInput = {
  root: TextInputRoot,
  input: TextInputInput,
  icon: TextInputIcon
}
