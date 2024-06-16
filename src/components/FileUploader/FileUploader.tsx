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
        <div className={c.row}>
          <Button
            as={'label'}
            className={c.uploader + ` ${errors.photo ? c.warning : ''}`}
            htmlFor={name}
          >
            <Typography variant={'body'}>Upload</Typography>
          </Button>
          <div className={c.file + ` ${errors.photo ? c.warning : ''}`}>
            {getValues('photo') && getValues('photo').length ? (
              <Typography variant={'body'}>{getValues('photo')[0].name}</Typography>
            ) : (
              <Typography variant={'body'}>Upload your photo</Typography>
            )}
          </div>
        </div>
        <input type={'file'} {...register('photo')} hidden id={name} />
        <div className={c.errors}>{errors.photo?.message?.toString()}</div>
      </div>
    </>
  )
}

type FileUploaderProps = {
  name: string
}
