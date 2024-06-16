import { baseApi } from '@/services/baseApi'
import { User } from '@/types'

import { PositionsResponse, UsersResponse } from './types'

export const usersApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addUser: builder.mutation<
      void,
      { photo: File; position_id: number; token: string } & Omit<
        User,
        'id' | 'photo' | 'position' | 'position_id' | 'registration_timestamp'
      >
    >({
      invalidatesTags: ['User'],
      // invalidatesTags: ['User'],
      query: body => {
        const formData = new FormData()
        const user = {
          email: body.email,
          name: body.name,
          phone: body.phone,
          photo: body.photo,
          position_id: body.position_id,
        }

        for (const field in user) {
          formData.append(field, user[field])
        }

        return {
          body: formData,
          headers: { Token: body.token },
          method: 'POST',
          url: '/users',
        }
      },
    }),
    getPositions: builder.query<PositionsResponse, void>({
      query: () => ({
        method: 'GET',
        url: '/positions',
      }),
    }),
    getUsers: builder.query<UsersResponse, { count: number; page: number }>({
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      merge: (currentCache, newItems) => {
        if (newItems.page === 1) {
          return newItems
        } else {
          currentCache.users.push(...newItems.users)
        }
      },
      providesTags: ['User'],
      query: params => ({
        method: 'GET',
        params,
        url: '/users',
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
    }),
  }),
})
export const { invalidateTags } = usersApi.util
export const { useAddUserMutation, useGetPositionsQuery, useGetUsersQuery } = usersApi
