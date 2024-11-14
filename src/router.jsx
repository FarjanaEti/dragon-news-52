import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import CategoryNme from './Pages/CategoryNme';

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
    path: "/news",
    element: <div>News</div>,
  },
 {
    path: "/auth",
    element: <div>Auth</div>,
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
])

export default router;