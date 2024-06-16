import { baseApi } from '@/services/baseApi'

import { TokenResponse } from './types'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getToken: builder.query<TokenResponse, void>({
      query: () => ({
        method: 'GET',
        url: '/token',
      }),
    }),
  }),
})

export const { useGetTokenQuery } = authApi
