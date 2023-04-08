import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import Renderpage from './Renderpage'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string, number, date, InferType } from 'yup';

function Pagecover() {
    const formInitialValues = {firstName: '', lastName: '', industry: '', email: '', country: 'India', phone: ''};
    const validationSchema = object({
      firstName: string().required('Your First Name is required!'),
      lastName: string().required('Your Last Name is required!'),
      industry: string().required('Select at least one option!'),
      email: string().email('Invalid Email!').required('Your Email is required!'),
      country: string(),
      phone: number().required('Your Phone Number is required!'),
    })
    const [formIndex, setFormIndex] = useState(0)
    const submitForm = (values) => {
      console.log(values)
      axios.post('https://eo3oi83n1j77wgp.m.pipedream.net', values)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  return (
    <div>
        <div className='h-16 w-screen flex flex-row'>
            <div className='w-[50%] pl-4 flex items-center'>
                <img className='w-24' src={logo} alt='Logo'></img>
            </div>
        </div>
        <div className='w-full flex items-center justify-center' style={{minHeight: 'calc(100vh - 4.5rem)'}}>
            <div className='text-white w-[80vw] min-h-[20rem] translate-y-[-2rem] sm:w-[75vw] lg:w-[800px] flex flex-col justify-center items-start font-[Gilroy400] text-[25px] font-s'>
            <Formik
               initialValues={formInitialValues}
               validationSchema={validationSchema}
               onSubmit={submitForm}
             >
               {({ isSubmitting, values }) => (
                 <Form className="w-full">
                  <Renderpage idx={formIndex} setFormIndex={setFormIndex} values={values} isSubmitting={isSubmitting}/>
                 </Form>
               )}
            </Formik>
            </div>
        </div>
    </div>
  )
}

export default Pagecover