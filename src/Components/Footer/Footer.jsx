import React from 'react'
import { BsInstagram, BsLinkedin, BsX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-black text-white pb-12">
      <div className="flex justify-between items-center p-[30px] border-b-2 border-[#666]">
        <div className="footer-name">
          <h2>LATEEF COLLECTIONS</h2>
        </div>
        
        <div className="flex gap-2.5">
          <FaFacebook className='text-[22px] cursor-pointer hover:text-gray-300 transition-colors'/>
          <BsInstagram className='text-[22px] cursor-pointer hover:text-gray-300 transition-colors'/>
          <BsX className='text-[22px] cursor-pointer hover:text-gray-300 transition-colors'/>
          <BsLinkedin className='text-[22px] cursor-pointer hover:text-gray-300 transition-colors'/>
        </div>
      </div>
      
      <div className="text-center py-3.5">
        <p>LATEEF COLLECTIONS &copy; 2026. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer