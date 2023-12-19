import * as Yup from "yup"

const AdvancedSchema = Yup.object({
    firstName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         lastName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
         jobType :Yup.string().oneOf(['designer' , 'developer' ,'scientist'] , 'Invalid job Type')
         .required('Required'),
         acceptedTerms : Yup.boolean().required('Required').oneOf([true] , 'You must accept the terms & conditions')
})

export default AdvancedSchema