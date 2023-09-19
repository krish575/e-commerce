import { useState } from 'react';
import './App.css';
import Component_heroBanner from './components/heroBanner';
import Component_navbar from './components/navbar';


function App() {
  return (
    <>
      <Component_navbar/>
      <Component_heroBanner/>
    </>
  )
}

export default App
