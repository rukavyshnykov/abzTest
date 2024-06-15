import { Controller, FieldError, useFormContext } from 'react-hook-form'

import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

import c from './RadioInput.module.scss'

import { Typography } from '../Typography/Typography'

export const RadioInput = ({ label, name, options }: RadioInputProps) => {
  const { control } = useFormContext()

  return (
    <div className={c.root}>
      {label && (
        <FormLabel id={label}>
          <Typography variant={'body'}>{label}</Typography>
        </FormLabel>
      )}
      <Controller
        control={control}
        defaultValue={options[0].id}
        name={name}
        render={({ field }) => (
          <FormControl fullWidth>
            <RadioGroup
              {...field}
              aria-labelledby={label}
              className={c.radioGroup}
              onChange={(_, value) => field.onChange(Number(value))}
              value={field.value}
            >
              {options.map(option => (
                <FormControlLabel
                  control={<Radio sx={{ p: 0 }} />}
                  key={option.id}
                  label={option.name}
                  sx={{ gap: '12px', ml: 0 }}
                  value={option.id}
                />
              ))}
            </RadioGroup>
          </FormControl>
        )}
      />
    </div>
  )
}

type RadioInputProps = {
  label?: string
  name: string
  options: Option[]
}

type Option = {
  id: number
  name: string
}
