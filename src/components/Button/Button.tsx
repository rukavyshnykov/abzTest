import { ComponentPropsWithoutRef, ElementType } from 'react'

import c from './Button.module.scss'

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', children, className, ...rest } = props

  return (
    <Component className={c.button + ` ${className ? className : ''}`} {...rest}>
      {children}
    </Component>
  )
}

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  classname?: string
} & ComponentPropsWithoutRef<T>
