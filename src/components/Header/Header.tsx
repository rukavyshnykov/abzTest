import logo from '@/assets/Logo.png'
import { AnchorScroll } from '@/utils'

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
          <Button onClick={e => AnchorScroll(e, 'userList')} type={'button'}>
            Users
          </Button>
          <Button onClick={e => AnchorScroll(e, 'register')} type={'button'}>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  )
}
