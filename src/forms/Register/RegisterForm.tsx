import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '@/components/Button/Button'
import { FileUploader } from '@/components/FileUploader/FileUploader'
import { RadioInput } from '@/components/RadioInput/RadioInput'
import { useAddUserMutation, useGetPositionsQuery } from '@/services/usersApi'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField } from '@mui/material'
import { z } from 'zod'

import c from './RegisterForm.module.scss'

export const RegisterForm = () => {
  const { data: positions, isFetching, isLoading } = useGetPositionsQuery()
  const [addUser, {}] = useAddUserMutation()

  const options = [
    {
      id: 1,
      position: 'Front',
    },
    {
      id: 2,
      position: 'Back',
    },
  ]

  const phoneRE = new RegExp(/(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm)

  const MAX_SIZE = 5000000
  const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg']

  const checkPhotoSize = (photo: File) =>
    new Promise(resolve => {
      const image = new Image()

      image.onload = () => {
        resolve({
          height: image.naturalHeight,
          width: image.naturalWidth,
        })
      }
      image.src = URL.createObjectURL(photo)
    })

  const photoSchema = z
    .any()
    .refine(files => files?.length >= 1, 'Required')
    .refine(files => files?.[0]?.size <= MAX_SIZE, 'Max file size is 5MB')
    .refine(
      files => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'Invalid file. Only .jpg, .jpeg formats are supported.'
    )
    .refine(async files => {
      if (files?.length === 0) {
        return
      }
      const dimensions = await checkPhotoSize(files?.[0])

      return dimensions.width > 70 && dimensions.height > 70
    }, 'Minimum image size is 70 x 70')

  const RegisterFormSchema = z.object({
    email: z.string().email(),
    name: z.string().min(5),
    phone: z.string().regex(phoneRE, 'Invalid number!'),
    photo: photoSchema,
    position_id: z.number(),
  })

  type RegisterFormType = z.infer<typeof RegisterFormSchema>

  const methods = useForm<RegisterFormType>({
    mode: 'onChange',
    resolver: zodResolver(RegisterFormSchema),
  })

  const onSubmit = (data: RegisterFormType) => {
    const formData = new FormData()

    for (const field in data) {
      console.log(field, data[field])
      typeof data[field] === 'object'
        ? formData.append('photo', data[field][0] as File)
        : formData.append(field, data[field])
    }

    addUser(formData)
  }

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
        <DevTool control={methods.control} />
      </form>
    </FormProvider>
  )
}
