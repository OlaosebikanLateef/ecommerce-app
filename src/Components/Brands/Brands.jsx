import React from 'react'
import { MdStarBorderPurple500 } from "react-icons/md";

const Brand = () => {
  return (
    <section className="relative top-2 h-40 md:h-52 -mt-43  w-full  overflow-hidden">
 
      {/* Top Strip */}
      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rotate-[5deg] bg-black py-4">
        <ul className="flex justify-between items-center text-white font-semibold whitespace-nowrap">
         
          <li className="flex items-center gap-2">
            <MdStarBorderPurple500 />
            Unique Designs
          </li>
        
          <li className="flex items-center gap-2">
            <MdStarBorderPurple500 />
            Hot Fashion
          </li>
          
          <li className="flex items-center gap-2">
            <MdStarBorderPurple500 />
            Hot Fashion
          </li>
            <li className="flex items-center gap-2">
            <MdStarBorderPurple500 />
            Unique Designs
          </li>
          
         
        </ul>
      </div>

      {/* Bottom Strip */}
      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 -rotate-[5deg] bg-black py-4">
        <ul className="flex justify-between  items-center text-white font-semibold whitespace-nowrap">
             <li className="flex items-center gap-2">
            <MdStarBorderPurple500 />
            Unique Designs
          </li>
       
          <li className="flex items-center gap-2">
            <MdStarBorderPurple500 />
            Hot Fashion
          </li>
            
          <li className="flex items-center gap-2">
            <MdStarBorderPurple500 />
            Hot Fashion
          </li>
            <li className="flex items-center gap-2">
            <MdStarBorderPurple500 />
            Unique Designs
          </li>
          
        </ul>
      </div>

    </section>
  );
};

export default Brand;