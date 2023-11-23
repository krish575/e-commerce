import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const incrementCounter = useCallback(() => {
        setCounter(counter + 1);
    },[counter]);

    // const navigate = useNavigate();
    // const sendData = () => {
    //   navigate('/FormTest2',{state: counter});
    // }
    
    return (
    <div>
       <h1>{counter}</h1>
    <button onClick={() => {incrementCounter(); }}>+</button>
    </div>
  )
}

export default Counter;
