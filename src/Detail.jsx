import React from 'react'
import { Link } from 'react-router-dom'

export default function Detail({contact}) {
  return (
    <>
    <Link to={`/Detail/${contact.id}`}>
    <div className='Card flex justify-between'>
        <div>
        <p>Name : {contact.firstName} {contact.lastName}</p>
        <p>
            Email✉️ : {contact.email}
        </p>
        <p>Job type : {contact.jobType}</p>
        </div>
    </div>
    </Link>
    </>
  )
}
