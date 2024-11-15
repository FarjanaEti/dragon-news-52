import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import CategoryNme from './Pages/CategoryNme';
import AuthLayout from './layout/AuthLayout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import NewsDetaails from './Pages/NewsDetaails';

const router =createBrowserRouter([
 {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
       {
         path:"",
         element:<Navigate to={'/category/01'}></Navigate>
       },
       {
        path: '/category/:id',
        element: <CategoryNme />,
        loader: async ({ params }) => {
          const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch data'); // Handle errors if needed
          }
          const result = await response.json();
          return { data: result.data || result }; 
        },
      }
      
    ]
  },
 {
    path: "/news/:id",
    element:<NewsDetaails></NewsDetaails> ,
    loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
 {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:'/auth/login',
        element: <Login></Login>
      },
      {
        path:'/auth/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
])

export default router;