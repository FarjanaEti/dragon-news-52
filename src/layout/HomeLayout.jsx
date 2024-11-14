import React from 'react';
import Header from '../component/Header';
import LatestNews from '../component/LatestNews';
import Navbar from '../component/Navbar';
import LeftNavbar from '../component/LayoutComponent/LeftNavbar';
import Rightnavbar from '../component/LayoutComponent/Rightnavbar';
import { Outlet } from 'react-router-dom';
import CategoryNme from '../Pages/CategoryNme';

const HomeLayout = () => {
  return (
  <div className='font-poppins'>
   <header>
     <Header></Header>                                                                                     
     <section className='w-11/12 mx-auto'>
      <LatestNews></LatestNews>
     </section>
   </header>
     <nav  className='w-11/12 mx-auto p-2'>
      <Navbar></Navbar>
     </nav>
     <main  className='w-11/12 mx-auto grid md:grid-cols-12 gap-3 mt-5'>
     <aside className='left col-span-3'><LeftNavbar></LeftNavbar></aside>
     <section className='col-span-6'>
      <Outlet></Outlet>
      <CategoryNme></CategoryNme>
      </section> 
     <aside className='col-span-3'><Rightnavbar></Rightnavbar></aside>
     </main>
  </div>
 );
};

export default HomeLayout;