import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useGetUsersQuery } from '@/services/usersApi'

export const useUserList = ({ page, setPage }: useUserListType) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { data: users, isFetching, isLoading, isSuccess } = useGetUsersQuery({ count: 6, page })

  const sortedList = useMemo(() => {
    if (isSuccess) {
      const check = [...users.users]

      return check.sort((a, b) => b.registration_timestamp - a.registration_timestamp)
    }
  }, [users, isSuccess])

  const handleShowMoreClick = () => {
    setSearchParams({ ...Object.fromEntries(searchParams), page: String(page + 1) })
    setPage(page + 1)
  }

  return [sortedList, handleShowMoreClick, users, isFetching, isLoading] as const
}

type useUserListType = {
  page: number
  setPage: (page: number) => void
}
