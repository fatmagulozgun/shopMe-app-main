import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromFavorites } from '../redux/favoriteSlice';

const Favorite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {favorites} = useSelector(state => state.favorites);


  if (!favorites || favorites.length === 0) {
    return (
      <div className='mt-10 min-h-screen'>
        <div className='text-5xl font-extralight my-10 text-center'>
          Favori Ürünlerim
        </div>
        <div className='text-xl text-gray-500 text-center font-semibold'>
          Favori ürün bulunamadı.
        </div>
      </div>
    );
  }

  return (
    <div className='my-10 min-h-screen'>
      <div className='lg:text-5xl text-4xl font-extralight my-10 border-gray-300 text-center'>
        Favori Ürünlerim
      </div>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full lg:gap-8 gap-4'>
        {favorites?.map((item) => (
          <div key={item.id} className='border border-gray-300 h-80 rounded-2xl p-4 relative'>
            <div className='bg-black p-2 rounded-2xl text-white inline-block 
              absolute top-0 right-0 text-xl font-semibold'>
              {item?.price} TL
            </div>
            <div className='flex items-center justify-center p-4'>
                <img src={item.image} alt='' className='h-[180px] object-contain' />
            </div>
            <div>
                <div className='text-center font-semibold'>{(item?.title).substring(0,30)}...</div>
                <div className='flex gap-2 my-2'>
                  <button className='bg-gray-200 w-full p-2 rounded-xl cursor-pointer'
                    onClick={() => navigate(`/products/${item.id}`)}>
                    İncele
                  </button>
                  <button className='bg-red-500 text-white p-2 cursor-pointer rounded-xl'
                    onClick={() => dispatch(removeFromFavorites(item?.id))}>
                    Kaldır
                  </button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;