import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Banner } from '@/components/Banner/Banner'
import { Register } from '@/components/Register/Register'
import { UserList } from '@/components/UserList/UserList'

import c from './MainPage.module.scss'

export const MainPage = () => {
  const [searchParams] = useSearchParams()
  const [page, setPage] = useState(searchParams.get('page') ? Number(searchParams.get('page')) : 1)

  return (
    <div className={c.root}>
      <Banner />
      <UserList page={page} setPage={setPage} />
      <Register setPage={setPage} />
    </div>
  )
}
