import { User } from '@/types'

export type UsersResponse = {
  count: number
  links: {
    next_url: null | string
    prev_url: null | string
  }
  page: number
  success: boolean
  total_pages: number
  total_users: number
  users: User[]
}

export type PositionsResponse = {
  positions: Position[]
  success: boolean
}

export type Position = {
  id: number
  name: string
}
