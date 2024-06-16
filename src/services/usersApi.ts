import { baseApi } from '@/services/baseApi'
import { User } from '@/types'

import { PositionsResponse, UsersResponse } from './types'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addUser: builder.mutation<void, FormData>({
      query: body => ({
        body,
        method: 'POST',
        url: '/users',
      }),
    }),
    getPositions: builder.query<PositionsResponse, void>({
      query: () => ({
        method: 'GET',
        url: '/positions',
      }),
    }),
    getUsers: builder.query<UsersResponse, { count: number; page: number }>({
      query: params => ({
        method: 'GET',
        params,
        url: '/users',
      }),
    }),
  }),
})

export const { useAddUserMutation, useGetPositionsQuery, useGetUsersQuery } = authApi
