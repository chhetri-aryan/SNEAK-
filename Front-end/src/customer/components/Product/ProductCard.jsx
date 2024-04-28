import React from 'react'
import { NavLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const proddetlink = `${product.id}`;
  return (
    <>

    <NavLink to={proddetlink}>
      <div className='producCard w-[15rem] m-3 transtion-all cursor-pointer hover:scale-105 hover:shadow-lg shadow-cyan-500/50 rounded-lg'>
        <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 border-4 hover:border-sky-500">
          <div className='h-[10rem]'>
            <img className="h-full w-full object-cover object-center " src={product.image} alt="" />
          </div>


          <div className="p-5 ">
            <h5 className="mb-2 text font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.brand}</p>
            <div className='flex items-center space-x-2 text-white'>
              <p className='font-semibold'>₹ {product.selling_price}</p>
              <p className='line-through'>{product.price}</p>
              <p className='text-green-600 font-semibold'>{product.discount}</p>
            </div>

          </div>
        </div>


      </div>
      </NavLink>
    </>
  )
}

export default ProductCard
