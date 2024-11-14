import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
 return (
 <div className='flex items-center gap-3 bg-base-200 p-3'>
     <p className='bg-[#D72050] text-white p-2'>Latest</p> 
     {/* react-fast-marquee */}
     <Marquee pauseOnHover={true} speed={200} className='space-x-10'>
       <Link>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus inventore, aperiam veniam dolorem corrupti itaque quo sit amet dignissimos delectus placeat temporibus in, eaque et ipsa minus debitis quae.
       </Link>                       
       <Link>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus inventore, aperiam veniam dolorem corrupti itaque quo sit amet dignissimos delectus placeat temporibus in, eaque et ipsa minus debitis quae.
       </Link>                       
       <Link>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus inventore, aperiam veniam dolorem corrupti itaque quo sit amet dignissimos delectus placeat temporibus in, eaque et ipsa minus debitis quae.
       </Link>                       
    </Marquee>                                                                                    
 </div>
 );
};

export default LatestNews;