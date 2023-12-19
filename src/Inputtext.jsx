import { useField } from 'formik'
import React from 'react'

export default function Inputtext({label, ...props}) {
  const[field,meta] = useField(props)
  return (
    <div className='flex flex-col gap-1'>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className='text-input' {...field} {...props} />
        {meta.touched && meta.error ? (
            <div className='text-red-600 text-sm'>{meta.error}</div>
        ) : null}
    </div>
  )
}
