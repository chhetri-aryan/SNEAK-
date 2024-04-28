import React from "react";
import { NavLink } from "react-router-dom";

const HomeSectionCard = ({ product }) => {
const product_link = `product/${product.id}`;

  return (
    <>
    <NavLink to = {product_link} >
    <div className='cursor-pointer flex flex-col bg-white-400 rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 
      hover:border-sky-500 border-4'>

      <div className='h-[18rem] w-[15rem] items-center hover:scale-110 bg-white  rounded-lg'>
        <img className='object-cover object-center w-full h-full ' src={product.image} alt="Error" />
      </div>

      <div className='mt-5 p-4'>
        <h3 className='text-lg font-sm text-gray-900'>{product.brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
      </div>

    </div>
    </NavLink>
    </>
  )
}

export default HomeSectionCard
