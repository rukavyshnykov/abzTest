import { CircularProgress } from '@mui/material'

import c from './Loader.module.scss'

export const Loader = () => {
  return (
    <div className={c.root}>
      <CircularProgress />
    </div>
  )
}
