import c from './Banner.module.scss'

import { Button } from '../Button/Button'
import { Typography } from '../Typography/Typography'

export const Banner = () => {
  return (
    <div className={c.root}>
      <div className={c.content}>
        <Typography classname={c.text} variant={'h1'}>
          Test assignment for front-end developer
        </Typography>
        <Typography classname={c.text} variant={'body'}>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
          with a vast understanding of User design thinking as they&apos;ll be building web
          interfaces with accessibility in mind. They should also be excited to learn, as the world
          of Front-End Development keeps evolving.
        </Typography>
        <Button type={'button'}>Sign up</Button>
      </div>
    </div>
  )
}
