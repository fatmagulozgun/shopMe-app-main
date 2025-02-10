import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {

  const navigate = useNavigate();

  return (
    <div className='border p-4 flex flex-col items-center gap-4'>
        <div onClick={()=> navigate(`/products/${product.id}`)}>
          <img src={product.image} alt="" className='w-60 h-60 object-contain cursor-pointer'/>
        </div>
        <div className='text-lg font-bold'>{(product.title).substring(0,30)}...</div>
        <div className='flex gap-4'>
            <div className='font-bold text-lg text-white bg-black rounded-3xl px-3 py-1'>{product.price} TL</div>
            <div className='px-4 py-1 rounded-full bg-gray-200 border 
                cursor-pointer hover:bg-gray-300 text-lg'
                onClick={()=> navigate(`/products/${product.id}`)}>
                  İncele
            </div>
        </div>
    </div>
  )
}

export default Product