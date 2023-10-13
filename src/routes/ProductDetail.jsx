import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getSingleProduct from "../lib/getSingleProduct";

const ProductDetail = () => {
  let { id } = useParams();
  
  let [product, setProduct] = useState({});

  useEffect(() => {

    async function getProduct(id) {
      const response = await getSingleProduct(id);
      console.log(response);
      setProduct(response);
    }

    getProduct(id);
    
  }, [getSingleProduct]);

  return (
    <>
      <div>ProductDetail {id}</div>
      <div>ProductDetail {JSON.stringify(product)}</div>
    </>
  );
};

export default ProductDetail;
