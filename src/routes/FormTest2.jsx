import React from 'react'
import { useLocation } from 'react-router-dom';


const FormTest2 = () => {
  const location = useLocation();
  const {state} = location;
  const factorial= (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
  return (
    <div>
      <h1>{state.username}</h1>
      <h1>{state.counter}</h1>
      <h1>{factorial(state.factorialInput)}</h1>
    </div>
  )
}

export default FormTest2
