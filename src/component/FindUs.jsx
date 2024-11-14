import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
  return (
  <div>
    <h2 className='font-semibold mb-3'>Find Us</h2>
    <div className="join flex join-vertical *:bg-base-100">
  <button className="btn join-item justify-start"><FaFacebook></FaFacebook> FaceBook</button>
  <button className="btn join-item justify-start"><FaTwitter></FaTwitter> Twitter</button>
  <button className="btn join-item justify-start"><FaInstagram></FaInstagram>Instragram</button>
</div>                                                                                      
  </div>
 );
};

export default FindUs;