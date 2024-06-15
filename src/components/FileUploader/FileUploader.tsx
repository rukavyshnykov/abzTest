import { useFormContext } from 'react-hook-form'

import c from './FileUploader.module.scss'

import { Button } from '../Button/Button'
import { Typography } from '../Typography/Typography'

export const FileUploader = ({ name }: FileUploaderProps) => {
  const {
    formState: { errors },
    getValues,
    register,
  } = useFormContext()

  return (
    <>
      <div className={c.root}>
        <Button as={'label'} classname={c.uploader} htmlFor={name}>
          <Typography variant={'body'}>Upload</Typography>
        </Button>
        <div className={c.file}>
          {getValues('photo') && getValues('photo').length ? (
            <Typography variant={'body'}>{getValues('photo')[0].name}</Typography>
          ) : (
            <Typography variant={'body'}>Upload your photo</Typography>
          )}
        </div>
        <input type={'file'} {...register('photo')} hidden id={name} />
      </div>
      <div>{JSON.stringify(errors.photo?.message)}</div>
    </>
  )
}

type FileUploaderProps = {
  name: string
}
