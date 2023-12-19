import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Editcontact({contact , handleEdit,email ,setEmail , firstName, setFirstName , lastName , setLastName}) {
    const {id} = useParams();
    const Newcontact = contact.find(c=>(c.id).toString() === id)

    useEffect(()=>{
        if(Newcontact){
            setFirstName(Newcontact.firstName)
            setLastName(Newcontact.lastName)
            setEmail(Newcontact.email)
        }
    },[Newcontact , setEmail , setFirstName ,setLastName])


  return (
    <form className='basicform'>
        <label htmlFor="firstName">Edit first name</label>
        <input
        type="text"
        name='firstName'
        id='firstName'
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}
        placeholder='Edit your first name'
        />
        <label htmlFor="lastName">Edit last name</label>
        <input
        type="text"
        name='lastName'
        id='lastName'
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}
        placeholder='Edit your last name'
        />
        <label htmlFor="email">Edit email</label>
        <input
        type="text"
        name='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Edit your email'
        />
        <button className='submit' type='submit' onClick={(e)=>handleEdit(e, {id: Newcontact.id, firstName, lastName, email })}>
            Save Edit
        </button>
    </form>
  )
}

export default Editcontact