import React from 'react'

const Products = () => {
  return (
    <>
     <div className='p-10 grid grid-cols-4 '>
        <div className='w-75 border rounded-3xl h-100 p-3 shadow-2xl'>
             <div className='w-full h-40'>
<img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="" className='w-full h-full overflow-hidden' />
             </div>
             <div className='my-2 text-xl flex flex-col'>
 <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
             <span>3.9</span>
        <span>109.95$</span>
        <p>men's clothing</p>
             </div>
            
<button className='bg-orange-400 hover:bg-orange-500 rounded-full px-4 py-2 w-70 my-2 text-xl text-white'>Add to cart</button>
        </div>
        
    </div>
    
    </>
    
  )
}

export default Products