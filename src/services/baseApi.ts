import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://frontend-test-assignment-api.abz.agency/api/v1',
  }),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['User'],
})
