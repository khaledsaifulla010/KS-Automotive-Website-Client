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
import ErrorPage from './Components/ErrorPage/ErrorPage';
import CarDetails from './Components/CarDetails/CarDetails';
import Register from './Components/Register/Register';
import AuthProvider from './Components/Firebase/AuthProvider/AuthProvider';
import PrivateRoute from './Components/Firebase/PrivateRoute/PrivateRoute';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:
      [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/Brands')
        },
        {
          path: 'addProduct',
          element: (<PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>)
        },
        {
          path: 'myCart',
          element: (<PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>),
          loader: () => fetch('http://localhost:5000/MyCart')
        },
        {
          path: 'logIn',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'carList/:name',
          element: (<PrivateRoute>
            <CarList></CarList>
          </PrivateRoute>)

        },
        {
          path: 'carDetail/:id',
          element: (<PrivateRoute>
            <CarDetails></CarDetails>
          </PrivateRoute>),
          loader: ({ params }) => fetch(`http://localhost:5000/AllCar/${params.id}`)
        }
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
