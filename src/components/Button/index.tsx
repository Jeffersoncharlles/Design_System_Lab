import { Slot } from '@radix-ui/react-slot';
import styles from './Button.module.css'
import { clsx } from 'clsx'

export interface ButtonProps {
  children: React.ReactNode,
  asChild?: boolean
}

export const Button = ({ children, asChild }: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'


  return (
    <Comp className={clsx(styles.button
    )}>{children}</Comp>
  )
}
