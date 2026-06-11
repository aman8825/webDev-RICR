import React from 'react'
import { FaStore } from "react-icons/fa6";
import { Link } from 'react-router-dom'
const Header = () => {
  return (
<>
 <div  className='bg-blue-600 flex justify-between p-3'>
    <div>
<h2 className='text-white text-4xl hover:text-gray-400 '>
    <Link to="/" ><FaStore /></Link>
      
  </h2>
    </div>
    <div className='flex gap-4'>
        <Link to="/" className="text-white hover:underline text-xl">Home</Link>
      
          <Link to="/aabout" className="text-white hover:underline text-xl ">About</Link>
           <Link to="/product" className="text-white hover:underline text-xl">Product</Link>
            <Link to="/contact" className="text-white hover:underline text-xl">Contact</Link>
        
    </div>
 </div>
</>
   
  )
}

export default Header