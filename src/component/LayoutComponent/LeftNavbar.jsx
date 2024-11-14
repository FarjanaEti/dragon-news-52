import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
     const [ categories,setCategory]=useState([])
     useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then((res)=>res.json())  
        .then((data)=>setCategory(data.data.news_category))                    
     },[])                         
    return (
 <div className='flex flex-col gap-3'>
    <h1 className='font-semibold text-center mb-3'>All Category({categories.length})</h1>
    {
      categories.map((category)=>(
        <NavLink to={`/category/${category.category_id}`} className='btn bg-base-200 gap-2'
         key={category.category_id}>{category.category_name}
         </NavLink>                      
      ))                        
    }                                                                                      
  </div>
 );
};

export default LeftNavbar;