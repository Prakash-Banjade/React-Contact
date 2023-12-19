import React, { useState } from 'react'
import Detail from './Detail'
import { Link } from 'react-router-dom'

export default function Home({contact , handleDelete}) {

  return (
    <main className='flex justify-center flex-col'>
      {
        contact && contact.length > 0 ?(
          <>
          {contact.map((contact)=>(
         <Detail
         key={contact.id}
         contact={contact}
         handleDelete={handleDelete}
         />
        ))}
          </>
        ) : (
          <>
          <h1 className='text-xl'>
            Sorry no data found🥲
          </h1>
          <Link
          to="/advanced"
          >
          <button className='border border-red-700 p-2 rounded mt-4'>
            Add data
          </button>
          </Link>
          </>
        )
      }
    </main>
  )
}
