import { FormProvider } from 'react-hook-form'

import { Button } from '@/components/Button/Button'
import { FileUploader } from '@/components/FileUploader/FileUploader'
import { RadioInput } from '@/components/RadioInput/RadioInput'
import { useGetPositionsQuery } from '@/services/usersApi'
import { TextField } from '@mui/material'

import c from './RegisterForm.module.scss'

import { useRegisterForm } from './useRegisterForm'

export const RegisterForm = ({ setPage }: RegisterFormType) => {
  const { data: positions, isFetching, isLoading } = useGetPositionsQuery()
  const [methods, onSubmit] = useRegisterForm({ setPage })

  if (isLoading || isFetching) {
    return <>Loading...</>
  }

  return (
    <FormProvider {...methods}>
      <form className={c.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <TextField
          {...methods.register('name')}
          error={!!methods.formState.errors.name}
          fullWidth
          helperText={methods.formState.errors.name?.message}
          label={'Your name'}
        />
        <TextField
          {...methods.register('email')}
          error={!!methods.formState.errors.email}
          fullWidth
          helperText={methods.formState.errors.email?.message}
          label={'Email'}
        />
        <TextField
          {...methods.register('phone')}
          error={!!methods.formState.errors.phone}
          fullWidth
          helperText={methods.formState.errors.phone?.message}
          label={'Phone'}
        />
        <RadioInput
          label={'Select your position'}
          name={'position_id'}
          options={positions!.positions}
        />
        <FileUploader name={'photo'} />
        <Button disabled={!methods.formState.isDirty || !methods.formState.isValid} type={'submit'}>
          Sign up
        </Button>
      </form>
    </FormProvider>
  )
}

type RegisterFormType = {
  setPage: (page: number) => void
}
