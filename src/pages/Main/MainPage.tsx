import { Banner } from '@/components/Banner/Banner'
import { Register } from '@/components/Register/Register'
import { UserList } from '@/components/UserList/UserList'

import c from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <div className={c.root}>
      <Banner />
      <UserList />
      <Register />
    </div>
  )
}
