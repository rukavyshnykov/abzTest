import { Banner } from '@/components/Banner/Banner'
import { Register } from '@/components/Register/Register'
import { UserList } from '@/components/UserList/UserList'
import { useGetTokenQuery } from '@/services/authApi'

import c from './MainPage.module.scss'

export const MainPage = () => {
  const { isFetching } = useGetTokenQuery()

  return (
    <div className={c.root}>
      <Banner />
      <UserList />
      <Register />
    </div>
  )
}
