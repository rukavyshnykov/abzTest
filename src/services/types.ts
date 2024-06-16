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

export type TokenResponse = {
  success: boolean
  token: string
}

export type User = {
  email: string
  id: string
  name: string
  phone: string
  photo: string
  position: string
  position_id: string
  registration_timestamp: number
}
