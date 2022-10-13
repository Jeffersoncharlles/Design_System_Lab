import { Slot } from '@radix-ui/react-slot';
import styles from './text.module.css'
import { clsx } from 'clsx'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg',
  children: React.ReactNode,
  asChild?: boolean
}

export const Text = ({ size = 'md', children, asChild }: TextProps) => {
  const Comp = asChild ? Slot : 'span'


  return (
    <Comp className={clsx(styles.text, {
      'text-xs': size === 'sm',
      'text-sm': size === 'md',
      'text-md': size === 'lg',
    })}>{children}</Comp>
  )
}
