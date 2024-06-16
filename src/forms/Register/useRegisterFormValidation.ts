import { z } from 'zod'

import { checkPhotoSize } from './utils'

export const useRegisterFormValidation = () => {
  const phoneRE = new RegExp(/(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm)
  const MAX_SIZE = 5000000
  const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg']

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
      const dimensions = (await checkPhotoSize(files?.[0])) as { height: number; width: number }

      return dimensions.width > 70 && dimensions.height > 70
    }, 'Minimum image size is 70 x 70')

  const RegisterFormSchema = z.object({
    email: z.string().email(),
    name: z.string().min(5),
    phone: z.string().regex(phoneRE, 'Invalid number!'),
    photo: photoSchema,
    position_id: z.number(),
  })

  return RegisterFormSchema
}
