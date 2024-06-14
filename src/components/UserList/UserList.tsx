import { User } from '@/types'

import c from './UserList.module.scss'

import { Button } from '../Button/Button'
import { Typography } from '../Typography/Typography'
import { UserCard } from '../UserCard/UserCard'

export const UserList = () => {
  return (
    <div className={c.root}>
      <div className={c.content}>
        <Typography className={c.title} variant={'h1'}>
          Working with GET request
        </Typography>
        <div className={c.list}>
          <UserCard user={{} as User} />
          <UserCard user={{} as User} />
        </div>
        <Button type={'button'}>Show more</Button>
      </div>
    </div>
  )
}
