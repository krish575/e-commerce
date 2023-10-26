import getAllProducts from "../lib/getAllProducts";
import React, { useEffect, useState } from "react";
import "../styles/task.css";
import priceSorting from "../utils/priceSorting";
import Dropdown from "./Dropdown";
import Loader from "./Loader";

const Task = () => {
  const [products, setproducts] = useState([]);
  const [category, setCategory] = useState("");
  const [dropdownValues, setDropdownValues] = useState([]);
  const sortProducts = (array) => {
    const sortedArray = priceSorting(array);
    setproducts(sortedArray);
  };
  // const filterProductsByCategory = (array, category) => {
  //   console.log('category',category)
  //   console.log('array',array)

  //   const filteredProductsByCategory = array.filter(
  //     (x) => x.category === category
  //   );
  //   console.log('filteredProductsByCategory',filteredProductsByCategory)
  //   setproducts(filteredProductsByCategory);
  // };
  useEffect(() => {
    async function ApiResponse() {
      //fetching the products data
      const APIResponseData = await getAllProducts();
      // used useState of setproducts to set the fetched data
      setproducts(APIResponseData);
      // stored the array of categories (an array of string) using map() into categories variable
      const categories = APIResponseData.map((x, i) => x.category);
      setCategory(categories[0]);
      // we needed dropdown values, so we used Set() on the categories to remove duplicate values and then we type-casted it to the Array
      let dropdownValues = Array.from(new Set(categories));
      // we used useState of setDropdownValues to set the dropdownValues as an array to be passed to the dropdown component.
      setDropdownValues(dropdownValues);
    }
    // fetching the data
    ApiResponse();
  }, []);

  return (
    <>
      <Dropdown
        data={dropdownValues}
        // we accessed the selected value by using callback function that holds the pushed value. and passed it to the function filterProductsByCategory as a parameter.
        // we used filterProductsByCategory to filter the products by using 2 parameters i.e., an array of products and the selected value that we pushed out.
        onChange={(e) => setCategory(e)}
      />
      <div className="product_layout">
        <button onClick={() => sortProducts(products)}>sort</button>
        {products.length === 0 ? (
          <Loader />
        ) : (
          products
            .filter((x) => x.category === category)
            .map((product, index) => {
              console.log("product", product);
              return (
                <div className="PRODUCT" key={index}>
                  <div className="image_wrapper">
                    <img
                      className="product_image"
                      src={`${product.image}`}
                    ></img>
                  </div>
                  <h1 className="product_title">{product.title}</h1>
                  <h3 className="product_price">Price: {product.price}</h3>
                  <h4 className="product_category">{product.category}</h4>
                  <p className="product_desc">{product.description}</p>
                  <p className="product_rating">
                    Ratings:{product.rating.rate}
                  </p>
                  <p className="product_quantity">
                    Quantity:{product.rating.count}
                  </p>
                </div>
              );
            })
        )}
      </div>
    </>
  );
};

export default Task;
