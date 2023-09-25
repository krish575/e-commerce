import './App.css';
import HeroBanner from './components/heroBanner';
import Navbar from './components/Navbar';
import Product from './components/Product';


function App() {
  return (
    <>
      <Navbar/>
      <HeroBanner />
      <div className='product_grid'>
        <Product />
        </div>
    </>
  )
}

export default App
