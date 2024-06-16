import { User } from '@/services/types'

import c from './UserCard.module.scss'

import { Typography } from '../Typography/Typography'

export const UserCard = ({ user: { email, name, phone, photo, position } }: UserCardProps) => {
  return (
    <div className={c.root}>
      <div className={c.content}>
        <div className={c.photo}>
          <img alt={`${name}'s photo`} loading={'lazy'} src={photo} />
        </div>
        <Typography className={c.name} variant={'body'}>
          {name}
        </Typography>
        <Typography variant={'body'}>{position}</Typography>
        <Typography variant={'body'}>{email}</Typography>
        <Typography variant={'body'}>{phone}</Typography>
      </div>
    </div>
  )
}

type UserCardProps = {
  user: User
}
