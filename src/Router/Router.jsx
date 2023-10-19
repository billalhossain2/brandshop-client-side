import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import BrandProducts from "../pages/BrandProducts/BrandProducts";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/add-product",
        element:<AddProduct></AddProduct>
      },
      {
        path:"/my-cart",
        element:<MyCart></MyCart>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/update-product/:productId",
        element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>
      },
      {
        path:"/brand-products/:brandName",
        element:<BrandProducts></BrandProducts>
      },
      {
        path:"/product-details/:productId",
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
      },
      {
        path:"/profile",
        element:<Profile></Profile>
      },
    ]
  },
]);

export default router;
