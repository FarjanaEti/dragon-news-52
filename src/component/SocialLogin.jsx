import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from 'react-icons/fa6';

const SocialLogin = () => {
  return (
   <div>
        <h2 className='font-semibold mb-3'>Login With</h2> 
        <div className='*:w-full space-y-2'>
         <button className='btn'><FaFacebook /> Login with google</button>                     
         <button className='btn'><FaGithub></FaGithub>Login with Github</button>                     
    </div>                                                                                 
  </div>
);
};

export default SocialLogin;