import React from 'react'

export default function Footer({contact}) {
  return (
    <div className='bg-red-600 h-11 flex justify-center items-center '>
        <p className='text-center text-white text-xl'>
            There are currently {contact.length} contact Details in your book
        </p>
    </div>
  )
}
