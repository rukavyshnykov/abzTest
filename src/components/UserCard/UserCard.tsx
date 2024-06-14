import mock from '@/assets/bg.png'
import { User } from '@/types'

import c from './UserCard.module.scss'

import { Typography } from '../Typography/Typography'

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className={c.root}>
      <div className={c.content}>
        <div className={c.photo}>
          <img src={mock} />
        </div>
        <Typography className={c.name} variant={'body'}>
          Name
        </Typography>
        <Typography variant={'body'}>Position</Typography>
        <Typography variant={'body'}>Email</Typography>
        <Typography variant={'body'}>Phone</Typography>
      </div>
    </div>
  )
}

type UserCardProps = {
  user: User
}
