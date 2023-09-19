// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./routes/Shop.jsx";
import WomenClothingWear from "./routes/WomenClothingWear.jsx";
import ProductDetail from "./routes/ProductDetail.jsx";
import Products from "./routes/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/shop',
    element: <Shop />,
    children: [
    ],
  },
  {
    path: "/shop/women",
    element: <WomenClothingWear />,
  },
  {
    path: "shop/women/:id",
    element: <ProductDetail/>
  },
  {
    path: '/shop/products',
    element: <Products/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
