import c from './UserList.module.scss'

import { Button } from '../Button/Button'
import { Loader } from '../Loader/Loader'
import { Typography } from '../Typography/Typography'
import { UserCard } from '../UserCard/UserCard'
import { useUserList } from './useUserList'

export const UserList = ({ page, setPage }: UserListProps) => {
  const [sortedList, handleShowMoreClick, users, isFetching, isLoading] = useUserList({
    page,
    setPage,
  })

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={c.root} id={'userList'}>
      <div className={c.content}>
        <Typography className={c.title} variant={'h1'}>
          Working with GET request
        </Typography>
        <div className={c.list}>
          {sortedList && sortedList.map(u => <UserCard key={u.id} user={u} />)}
          <div className={c.loader + ` ${isFetching ? c.fetching : ''}`}>
            <Loader />
          </div>
        </div>
        <Button
          className={users?.total_pages === page ? c.hidden : ''}
          onClick={handleShowMoreClick}
          type={'button'}
        >
          Show more
        </Button>
      </div>
    </div>
  )
}

type UserListProps = {
  page: number
  setPage: (page: number) => void
}
