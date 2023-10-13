import { product_details } from "/productData.js";
import Product from "./Product";
import getAllProducts from "../lib/getAllProducts";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsGrid = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    async function responseData() {
      const response = await getAllProducts();
      console.log(response);
      setproducts(response);
    }
      responseData();
  },[getAllProducts]);

  return (
    <div className="product_grid">
      {
            products?.map((product, index)=> <Link to={`/products/${product.id}`} key={index}>{product.title}</Link>)
          }
      {/* {product_details.map((a, i) => {
        return <Product product_details={a} key={i} />;
      })} */}
    </div>
  );
};

export default ProductsGrid;
