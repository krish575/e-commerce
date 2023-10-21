import getAllProducts from "../lib/getAllProducts";
import React, { useEffect, useState } from "react";
import "../styles/task.css";

const Task = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    async function ApiResponse() {
      const APIResponseData = await getAllProducts();
      console.log(APIResponseData);
      setproducts(APIResponseData);
    }
    ApiResponse();
  }, []);
  return (
    <div className="product_layout">
      {products.map((products, index) => (
        <div className="PRODUCT" key={index}>
          <div className="image_wrapper">
            <img className="product_image" src={`${products.image}`}></img>
          </div>
          <h1 className="product_title">{products.title}</h1>
          <h3 className="product_price">Price: {products.price}</h3>
          <h4 className="product_category">{products.category}</h4>
          <p className="product_desc">{products.description}</p>
          <p className="product_rating">Ratings:{products.rating.rate}</p>
          <p className="product_quantity">Quantity:{products.rating.count}</p>
        
        </div>
      ))}
    </div>
  );
};

export default Task;
