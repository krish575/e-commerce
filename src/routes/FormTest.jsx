import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';

const FormTest = () => {
    const navigate = useNavigate();

    const [counter, setCounter] = useState(0)

    const incrementCounter = useCallback(() => {
        setCounter(counter + 1);
    },[counter]);
  return (
    
    <div>
    <Navbar/>
        <Formik  initialValues={
          {
            username: ''
          }
        }
        onSubmit={async (values) => {
            console.log(values.username);
            const DATA = {counter, ...values}
            navigate("/FormTest2",{state: DATA});

        }}>
{({handleSubmit , handleChange, isSubmitting}) => (
            <form 
            onSubmit={handleSubmit}>
              <input type='text' name='username' onChange={handleChange}/> <br></br>
              <input type='number' name='factorialInput' onChange={handleChange}/>
              <input type='submit' disabled={isSubmitting}/>
            </form>
)
}
        </Formik>
        <h1>{counter}</h1>
    <button onClick={() => {incrementCounter(); }}>+</button>
    </div>
  )
}

export default FormTest