// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./routes/Shop.jsx";
import WomenClothingWear from "./routes/WomenClothingWear.jsx";
import ProductDetail from "./routes/ProductDetail.jsx";
import Products from "./routes/Products.jsx";
import Form from "./components/Form.jsx";
import TestRoute from "./routes/TestRoute.jsx";
import TestRoute2 from "./routes/TestRoute2.jsx";

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
    path: "products/:id",
    element: <ProductDetail/>
  },
  {
    path: '/shop/products',
    element: <Products/>
  },
  {
    path: '/auth/form',
    element: <Form/>
  },
  {
    path: '/test',
    element: <TestRoute/>
  },
  {
    path: '/test2',
    element: <TestRoute2/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
