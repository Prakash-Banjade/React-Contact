import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Contactdetail({contact,handleDelete}) {
    const {id} = useParams();
    const currentContact = contact.find((c) => c.id.toString() === id)

    if (!currentContact){
        console.log("Contact not found")
        return null;
    }


  return (
    <div className='Card flex justify-between'>
        <div>
        <p>
            Name : {currentContact.firstName} {currentContact.lastName}
        </p>
        <p>
            Email : {currentContact.email}
        </p>
        <p>
            Job type : {currentContact.jobType}
        </p>
        </div>
        <div className='flex flex-col justify-center gap-3'>
        <Link to={`/Edit/${currentContact.id}`}>
        <button className='bg-blue-500 px-4 rounded-md'>
            Edit
        </button>
        </Link>
        <button className=' bg-red-500 rounded-md' onClick={()=>handleDelete(currentContact.id)}>
            Delete
        </button>
        </div>
    </div>
  )
}
