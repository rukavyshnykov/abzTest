import { baseApi } from '@/services/baseApi'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getToken: builder.query<void, void>({
      query: () => ({
        method: 'GET',
        url: '/token',
      }),
    }),
  }),
})

export const { useGetTokenQuery } = authApi
