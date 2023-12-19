import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Nav({searchContact , setSearchContact}) {
  const Location = useLocation()
  return (
    <nav className='nav'>
      <form onSubmit={(e)=>e.preventDefault}>
        <input
         type="text"
         placeholder='Search data'
         value={searchContact}
         onChange={(e)=>setSearchContact(e.target.value)}
         />
      </form>
      <div className='flex gap-2'>
        <Link to="/"
        >
        <button
        className={Location.pathname === '/'  ? 'active' : ""}
        >
          Home
        </button>
        </Link>

        <Link to="/advanced"
        >
        <button
        className={Location.pathname === '/advanced'  ? 'active' : ""}
        >
          Add contact
        </button>
        </Link>
      </div>
    </nav>
  )
}

export default Nav