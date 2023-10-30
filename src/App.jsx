import { useEffect } from "react";
import "./App.css";
import ProductsGrid from "./components/ProductsGrid";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Task from "./components/Task";


function App() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
     <ProductsGrid/>
     {/* <Task/> */}
    </div>
  );
}

export default App;
