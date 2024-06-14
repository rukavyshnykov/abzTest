import { ComponentPropsWithoutRef, ElementType } from 'react'

import c from './Typography.module.scss'

export const Typography = <T extends ElementType = 'span'>(props: TypographyProps<T>) => {
  const { as: Component = 'span', children, classname, variant, ...rest } = props

  return (
    <Component className={c[variant] + ` ${classname ? classname : ''}`} {...rest}>
      {children}
    </Component>
  )
}

type TypographyProps<T extends ElementType = 'span'> = {
  as?: T
  classname?: string
  variant: 'body' | 'h1'
} & ComponentPropsWithoutRef<'button'>
