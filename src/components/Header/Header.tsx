import logo from '@/assets/Logo.png'

import c from './Header.module.scss'

import { Button } from '../Button/Button'

export const Header = () => {
  return (
    <div className={c.root}>
      <div className={c.content}>
        <div className={c.logo}>
          <img src={logo} />
        </div>
        <div className={c.buttons}>
          <Button type={'button'}>Users</Button>
          <Button type={'button'}>Sign up</Button>
        </div>
      </div>
    </div>
  )
}
