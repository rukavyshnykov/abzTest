import { Banner } from '@/components/Banner/Banner'
import { UserList } from '@/components/UserList/UserList'

import c from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <div className={c.root}>
      <Banner />
      <UserList />
    </div>
  )
}
