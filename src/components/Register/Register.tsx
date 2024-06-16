import { RegisterForm } from '@/forms/Register/RegisterForm'

import c from './Register.module.scss'

import { Typography } from '../Typography/Typography'

export const Register = ({ setPage }: RegisterProps) => {
  return (
    <div className={c.root} id={'register'}>
      <div className={c.content}>
        <Typography variant={'h1'}>Working with POST request</Typography>
        <RegisterForm setPage={setPage} />
      </div>
    </div>
  )
}

type RegisterProps = {
  setPage: (page: number) => void
}
