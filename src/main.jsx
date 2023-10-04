import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from './components/layout/Root';
import Home from './components/Home/Home';
import Login from './components/Home/Login/Login';
import Register from './components/Home/Register/Register';
import AuthProvider from './components/Provider/AuthProvider';
import NewsDetails from './shared/News/NewsDetails';
import PrivateRoute from './components/Rout/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/news.json')
      },
      {
        path: '/news/:id',
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
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
