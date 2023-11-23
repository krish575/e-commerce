import { useEffect } from "react";
import "./App.css";
import ProductsGrid from "./components/ProductsGrid";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Task from "./components/Task";
import FormTask from "./components/FormTask";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import FormTest from "./routes/FormTest";
import FormTest2 from "./routes/FormTest2";



function App() {
  return (
     <div>
       <Navbar />
      <HeroBanner />
      <ProductsGrid/> 
     <Task/>
    </div>
  );
}

export default App;
