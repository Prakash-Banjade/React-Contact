import React, { useEffect, useState } from 'react'
import Form from './Form'
import Advanced from './Advanced'
import Api from './API/Api'
import Nav from './Nav'
import Header from './Header'
import Contactdetail from './Contactdetail'
import Editcontact from './Editcontact'
import Home from './Home'
import Footer from './Footer'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'


export default function App() {
  const URL = "http://localhost:3000/users"
  const [ contact , setContact]= useState([])
  const [searchContact , setSearchContact] = useState('')
  const [firstName , setFirstName]=useState('')
  const [lastName , setLastName]= useState('')
  const [email , setEmail] = useState('')
  const [searchResult , setSearchResult] =useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    const fetchContact = async ()=>{
      try {
        const response = await Api.get('/users');
        setContact(response.data)
      } catch (error) {
        console.log(`Error${error}`)
      }
    }
    fetchContact();
  },[])


  useEffect(()=>{
    const filterResult = contact.filter((contact)=>(
      contact.firstName.toLowerCase().includes(searchContact.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchContact.toLowerCase())
    ))

    setSearchResult(filterResult.reverse())

  }, [contact,searchContact])

 console.log(searchContact)


  const handleDelete = async (id) =>{
    try {
      await Api.delete(`${URL}/${id}`)
      const contactList = contact.filter((contact)=>contact.id !== id)
      setContact(contactList)
      navigate('/')
    } catch (error) {
      console.log(`Error ${error.Message}`)
    }
  }

  const handleSubmit =async (values , action) =>{
   try {
    const response = await Api.post(URL, values)
    setContact(prevContact => ([...prevContact ,response.data]))
    console.log('Form submitted successfully', values)
    action.resetForm()
    navigate('/')
   } catch (error) {
    console.error('Error submitting form' , error)
   }
  }

  const handleEdit = async (id) =>{
    const updatedContact = {
      id,
      firstName,
      lastName,
      email,
      jobType : jobType
    }
    try{
      const response = await Api.put(`/Edit/${id}`,updatedContact)
      setContact(contact.map(con => con.id === id ? {...response.data} : con))
      setFirstName('')
      setLastName('')
      setEmail('')
      navigate('/')
      console.log('edited')
    }catch(err){
      console.log(`Error`)
    }
  }

  return (
    <main className='App'>
      <Header/>
      <Nav
      searchContact={searchContact}
      setSearchContact={setSearchContact}
      placeholder={""}
      />
      <Routes>
        <Route path='/' element={<Home
        contact={searchResult}
        handleDelete={handleDelete}
        />}/>
        <Route path='/advanced' element={<Advanced
        URL={URL}
        handleSubmit={handleSubmit}
        />}/>
        <Route path='Detail/:id' element={<Contactdetail
        contact={contact}
        handleDelete={handleDelete}
        />}/>
        <Route path='Edit/:id' element={<Editcontact
        contact={contact}
        email={email}
        setEmail={setEmail}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        handleEdit={handleEdit}
        />}/>
      </Routes>
      <Footer
      contact={contact}
      />
    </main>
  )
}
