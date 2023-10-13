import "./App.css";
import ProductsGrid from "./components/ProductsGrid";
import HeroBanner from "./components/heroBanner";
import Navbar from "./components/navbar";


function App() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
     <ProductsGrid/>
    </div>
  );
}

export default App;
