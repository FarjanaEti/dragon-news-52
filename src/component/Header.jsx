import React from 'react';
import logo from '../assets/assets/logo.png'
import moment from 'moment/moment';
const Header = () => {
  return (
  <div className='flex flex-col items-center text-center gap-2 my-4'>
     <img className='w-[300px]' src={logo} alt="" />  
     <p className='text-gray-400 font-poppins'>Journalism Without Fear or Favour</p>   
     {/*moment.js display */}
     <p>{moment().format("dddd, MMMM Do YYYY")}</p>
  </div>
 );
};

export default Header;