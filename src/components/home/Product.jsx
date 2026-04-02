import React from 'react'
import { useNavigate } from 'react-router-dom'
import { formatCategory, formatPrice } from '../../utils/format';

const Product = ({product}) => {

  const navigate = useNavigate();

  return (
    <div className='group rounded-[28px] border border-stone-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
        <div className='mb-4 flex items-center justify-between gap-3'>
          <div className='rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-700'>
            {formatCategory(product.category)}
          </div>
          <div className='text-sm font-semibold text-stone-400'>#{product.id}</div>
        </div>
        <div onClick={()=> navigate(`/products/${product.id}`)} className='overflow-hidden rounded-[24px] bg-stone-50'>
          <img src={product.image} alt={product.title} className='h-64 w-full cursor-pointer object-contain p-6 transition duration-300 group-hover:scale-105'/>
        </div>
        <div className='mt-5 min-h-[56px] text-lg font-bold text-stone-900'>
          {product.title.length > 42 ? `${product.title.substring(0,42)}...` : product.title}
        </div>
        <div className='mt-2 text-sm leading-6 text-stone-500'>
          {product.description?.length > 85 ? `${product.description.substring(0,85)}...` : product.description}
        </div>
        <div className='mt-5 flex items-center justify-between gap-4'>
            <div className='rounded-2xl bg-stone-900 px-4 py-2 text-lg font-bold text-white'>{formatPrice(product.price)}</div>
            <div className='rounded-2xl border border-stone-300 px-4 py-2 cursor-pointer bg-white text-base font-semibold text-stone-800 transition hover:border-stone-900 hover:bg-stone-900 hover:text-white'
                onClick={()=> navigate(`/products/${product.id}`)}>
                  İncele
            </div>
        </div>
    </div>
  )
}

export default Product
