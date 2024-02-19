import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import AddProduct from './Components/AddProduct/AddProduct';
import MyCart from './Components/MyCart/MyCart';
import Login from './Components/Login/Login';
import CarList from './Components/AllCars/CarList/CarList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:
      [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/Brands')
        },
        {
          path: 'addProduct',
          element: <AddProduct></AddProduct>
        },
        {
          path: 'myCart',
          element: <MyCart></MyCart>
        },
        {
          path: 'logIn',
          element: <Login></Login>
        },
        {
          path: 'carList/:name',
          element: <CarList></CarList>,
          
        }
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
