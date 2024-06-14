import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '@/components/Button/Button'
import { RadioInput } from '@/components/RadioInput/RadioInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { RadioGroup, TextField } from '@mui/material'
import { z } from 'zod'

import c from './RegisterForm.module.scss'

export const RegisterForm = () => {
  const options = [
    {
      id: 1,
      name: 'Front',
    },
    {
      id: 2,
      name: 'Back',
    },
  ]

  const phoneRE = new RegExp(/(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm)

  const RegisterFormSchema = z.object({
    email: z.string().email(),
    name: z.string().min(5),
    phone: z.string().regex(phoneRE, 'Invalid number!'),
    position_id: z.number(),
  })

  type RegisterFormType = z.infer<typeof RegisterFormSchema>

  const methods = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterFormSchema),
  })

  const onSubmit = (data: RegisterFormType) => {
    console.log('lol')
    console.log(data)
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
          error={methods.formState.errors.position_id}
          label={'Select your position'}
          name={'position_id'}
          options={options}
        />
        <Button type={'submit'}>Sign up</Button>
      </form>
    </FormProvider>
  )
}
