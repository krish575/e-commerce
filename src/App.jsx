import "./App.css";
import HeroBanner from "./components/heroBanner";
import Navbar from "./components/navbar";
import Product from "./components/Product";
import {product_details} from '../productData.js';
import Practice from "./components/Practice";


function App() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <div className="product_grid">
         { product_details.map((a, i) => {
            return <Product product_details={a} key={i} />;
          })}
        {/* { product_details.map((a, i) => {
          return <Practice product_details={a} key={i}/>;
        })} */}
      </div>
    </div>
  );
}

export default App;
