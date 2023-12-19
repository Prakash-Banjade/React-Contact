import React from 'react'
import { Formik , Field , Form ,ErrorMessage } from 'formik'
import AdvancedSchema from "./Schema/AdvancedScehma"
import Inputtext from './Inputtext'
import Customselect from './Customselect'
import Checkbox from './Checkbox'
import axios from 'axios'

const Advanced  = ({URL,handleSubmit}) =>{
  return(
    <Formik
    initialValues={{
      firstName : "",
      lastName : "",
      email : "",
      acceptedTerms : false ,
      jobType : " "
    }}
    validationSchema={AdvancedSchema}
    onSubmit={handleSubmit}
    >
      {({isSubmitting}) => (
      <Form className='flex flex-col gap-2 m-auto w-fit mt-10 border border-black px-6 py-6 rounded-lg'>
        <Inputtext
        label='First Name'
        name="firstName"
        type="text"
        placeholder="Enter your first Name"
        />

        <Inputtext
        label="Last Name"
        name="lastName"
        type="text"
        placeholder="Enter your last Name"
        />

        <Inputtext
        label="Email"
        name="email"
        type="text"
        placeholder="Enter your email"
        />

        <Customselect
        label="Job type"
        name="jobType"
        placeholder="Please select a job"
        >
          <option value="">Please select a job type</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value='scientist'>Scientist</option>
        </Customselect>

        <Checkbox
        type="checkbox"
        name="acceptedTerms"
        />


        <button type='submit' disabled={isSubmitting} className='submit'>
          Submit
        </button>

      </Form>
      )}
    </Formik>
  )
}

export default Advanced