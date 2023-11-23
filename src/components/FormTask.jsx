import { Formik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FormTask = () => {
  return (
    <div>
        <Formik  initialValues={
          {
            username: ''
          }
        }
        onSubmit={async (values) => {
          const navigate = useNavigate('../routes/FormTest2.jsx',{state: { name: values.username }});
        }}>
{({handleSubmit , handleChange}) => (
            <form onSubmit={handleSubmit}>
              <input type='text' name='username' onChange={handleChange}/>
              <input type='submit' />
            </form>
)
}
        </Formik>
    </div>
  )
}

export default FormTask