import { useMemo } from 'react'

import { useGetUsersQuery } from '@/services/usersApi'
import { User } from '@/types'

import c from './UserList.module.scss'

import { Button } from '../Button/Button'
import { Typography } from '../Typography/Typography'
import { UserCard } from '../UserCard/UserCard'

export const UserList = () => {
  const { data: users, isFetching, isLoading } = useGetUsersQuery({ count: 20, page: 1 })

  const sortedList = useMemo(() => {
    return users && users.users.sort((a, b) => a.registration_timestamp - b.registration_timestamp)
  }, [users])

  if (isLoading || isFetching) {
    return <>Loading...</>
  }

  return (
    <div className={c.root}>
      <div className={c.content}>
        <Typography className={c.title} variant={'h1'}>
          Working with GET request
        </Typography>
        <div className={c.list}>
          {sortedList?.length ? (
            sortedList.map(u => <UserCard key={u.id} user={u} />)
          ) : (
            <>Nothing here</>
          )}
        </div>
        <Button type={'button'}>Show more</Button>
      </div>
    </div>
  )
}
