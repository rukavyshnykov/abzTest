import { RegisterForm } from '@/forms/Register/RegisterForm'

import c from './Register.module.scss'

import { Typography } from '../Typography/Typography'

export const Register = () => {
  return (
    <div className={c.root}>
      <div className={c.content}>
        <Typography variant={'h1'}>Working with POST request</Typography>
        <RegisterForm />
      </div>
    </div>
  )
}
