import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://frontend-test-assignment-api.abz.agency/api/v1',
})

export const baseQueryWithReauth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      { method: 'POST', url: '/v1/auth/refresh-token' },
      api,
      extraOptions
    )

    if (refreshResult.meta?.response && refreshResult.meta.response.status === 204) {
      result = await baseQuery(args, api, extraOptions)
    } else {
      //   console.log('dshfksjhdgfjksd')
      // TODO: get some help
    }
  }

  return result
}
