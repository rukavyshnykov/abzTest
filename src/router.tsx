import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Layout } from './pages/Layout/Layout'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
