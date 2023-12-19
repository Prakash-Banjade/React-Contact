import { useField } from 'formik'
import React from 'react'

export default function Customselect({label,...props}) {
   const [field , meta] =useField(props)
  return (
    <div className='flex flex-col'>
      <label htmlFor="">
        {label}
      </label>
      <select
    {...field}
    {...props}
    className='border border-black p-1 mt-1'
    />
    {meta.touched && meta.error ? <div className='text-red-600 text-sm'>{meta.error}</div > : null}
    </div>
  )
}
