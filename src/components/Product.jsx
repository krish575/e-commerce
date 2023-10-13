import { Link } from "react-router-dom";
import "../styles/product.css";
import ColorVariants from "./ColorVariants";
import { useEffect } from "react";

const Product = ({ product_details, ...props }) => {
  
  const dummy = (param) => {
    let product = document.getElementById(product_details.id);
    product.style.backgroundImage = "url(" + param + ")";
    console.log('product.style.backgroundImage',product.style.backgroundImage);
  };
  useEffect(()=>{
    dummy(product_details.variants.colors[0].image)
  }, [])

  useEffect(()=>{
    //logic
  },[
    //dependency
  ])

  

  return (
    <div className="product_wrapper">
      <Link className="product" id={`${product_details.id}`} to={`/products/${product_details.id}`}>
        <div className="product_utility-container">
          <div className="product-head-container">
            {product_details.bestSeller && (
              <div className="Best_Seller">Best-Seller</div>
            )}
            <div className="product_utilities">
              <div className="wishlist">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill={`${product_details.wishlist ? "red" : "none"}`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                    stroke={`${product_details.wishlist ? "red" : "black"}`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="compare" title="Compare">
                <svg
                  fill="#000000"
                  width="20px"
                  height="20px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M10.08,7l1,1,3.44-3.45L11,1,10,2l1.8,1.8H2v1.4h9.82ZM5.86,9l-1-1L1.42,11.5,4.91,15l1-1L4.1,12.2H14V10.8H4.1Z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="product-footer-container">
            <div className="size">
              <p className="size_text">x, s, sm</p>
            </div>
            <div className="product_promo_utilities">
              <div className="quick_view">
                <p>Quick-View</p>
                <div className="quick_view_icon">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="quick_view">
                <p>Quick-shop</p>
                <div className="quick_view_icon">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 9C5 7.89543 5.89543 7 7 7H17C18.1046 7 19 7.89543 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 7V6C15 4.34315 13.6569 3 12 3V3C10.3431 3 9 4.34315 9 6V7"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 11L9 12C9 13.6569 10.3431 15 12 15V15C13.6569 15 15 13.6569 15 12L15 11"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="product_details">
        {/* ternary operator */}
        {product_details.price.type === "range" ? (
          <strong
            style={{
              color: "red",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <h5>$00</h5> &ndash; <h5>$00</h5>
          </strong>
        ) : (
          <h5>$00</h5>
        )}
        <h4>{product_details.name}</h4>
        <ColorVariants
          dummyFn={(e) => dummy(e)}
          colors={product_details.variants?.colors}
        />
      </div>
    </div>
  );
};

export default Product;
