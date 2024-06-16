import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import { useGetTokenQuery } from '@/services/authApi'
import { useAddUserMutation } from '@/services/usersApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { useRegisterFormValidation } from './useRegisterFormValidation'

export const useRegisterForm = ({ setPage }: useRegisterFormProps) => {
  const [addUser] = useAddUserMutation()
  const { data: token } = useGetTokenQuery()
  const [searchParams, setSearchParams] = useSearchParams()
  const RegisterFormSchema = useRegisterFormValidation()

  type RegisterFormType = z.infer<typeof RegisterFormSchema>

  const methods = useForm<RegisterFormType>({
    mode: 'onChange',
    resolver: zodResolver(RegisterFormSchema),
  })

  const onSubmit = (data: RegisterFormType) => {
    const user = { ...data, photo: data.photo[0] as File, token: token!.token }

    setPage(1)
    setSearchParams({ ...Object.fromEntries(searchParams), page: '1' })
    addUser(user)
  }

  return [methods, onSubmit] as const
}

type useRegisterFormProps = {
  setPage: (page: number) => void
}
