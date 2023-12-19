import { useField } from 'formik'
import React from 'react'

export default function Checkbox({label , ...props}) {
  const [ field , meta] = useField(props)
  return (
    <>
    <div className='flex  items-center gap-1 justify-center'>
      <input {...field} {...props} />
      <span>I accept the terms & condition</span>
    </div>
      {meta.touched && meta.error ? <div className='text-red-600' >Please accept the terms</div> : null}
    </>
  )
}
