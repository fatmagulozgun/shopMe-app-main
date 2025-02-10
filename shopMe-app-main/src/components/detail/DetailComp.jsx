import React from 'react'
import { useState } from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify'
import { addToFavorite, removeFromFavorites } from '../../redux/favoriteSlice'
import { useEffect } from 'react'

const DetailComp = ({productDetail}) => {

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const {favorites} = useSelector(state => state.favorites);

  const [favorited, setFavorited] = useState(false);


  useEffect(() => {
    setFavorited(favorites?.find(item => item.id === productDetail.id));
  }, [favorites, productDetail]);

  
  const handleFavoriteClick = (item) => {
    if (!favorited) {
      setFavorited(true);
      dispatch(addToFavorite(item));
      toast.success("Ürün favorilere eklendi.");
    } else {
      dispatch(removeFromFavorites(item.id))
      setFavorited(false);
    }
  };

  const decrement = () => {
    if(quantity > 0) setQuantity(quantity - 1);
  }

  const increment = () => {
    if(quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  }

  const addBasket = () => {
    dispatch(addToCart({id: productDetail?.id, title: productDetail?.title, 
        image: productDetail?.image, price: productDetail?.price, quantity: quantity}))
  }

  return (
    <div className='my-10 flex lg:flex-row flex-col lg:gap-10 border rounded-3xl lg:p-20 p-4'>
      <div className='lg:w-1/2 w-full h-[500px] lg:p-10 p-4'>
          <img src={productDetail?.image} alt="" className='w-full h-full object-contain' />
      </div>
      <div className='lg:w-1/2 w-full lg:p-10 p-5'>
          <div className=''>
              <div className='font-bold text-4xl'>{productDetail?.title}</div>
              <div className='bg-blue-600 text-white rounded-xl px-[4px] py-[2px] inline-block mt-2'>
                    {productDetail?.category}
              </div>
              <div className='text-base my-4'>
                {productDetail?.description}
              </div>

              <div className='text-xl flex gap-2 items-center'>
                Rating : 
                <span className='bg-cyan-400 rounded-xl p-1 
                  text-center text-sm font-semibold'>{productDetail?.rating?.rate}</span>
              </div>

              <div className='font-bold text-lg text-white bg-black 
                  rounded-3xl px-3 py-1 inline-block my-4'>
                  {productDetail?.price} TL
              </div>

              <div className='flex gap-3 items-center'>
                <div className='bg-gray-200 rounded-full w-8 h-8 p-2 flex 
                    items-center justify-center text-xl font-bold cursor-pointer 
                    hover:bg-gray-300 select-none'
                    onClick={decrement}>
                    -
                </div>
                <span className='font-bold text-xl'>{quantity}</span>
                <div className='bg-gray-200 rounded-full w-8 h-8 p-2 flex 
                    items-center justify-center text-xl font-bold cursor-pointer
                    hover:bg-gray-300 select-none'
                    onClick={increment}>
                    +
                </div>
              </div>

              <div className='text-lg my-4'>
                  Şuan stokta sadece <span className='font-bold text-lg'>{productDetail?.rating?.count}</span> adet ürün bulunuyor.
              </div>

              <div className='flex gap-2'>
                  <div className='w-full px-4 py-2 bg-gray-200 cursor-pointer
                    rounded-lg text-xl text-center hover:bg-gray-300 flex items-center justify-center'
                    onClick={()=> {
                      addBasket();
                      toast.success("Ürün sepete eklendi.")
                    }}>
                      Sepete Ekle
                  </div>
                  <div className='flex justify-center items-center rounded-lg p-2 cursor-pointer'>
                      {favorited ? <AiFillHeart size={40} onClick={() => handleFavoriteClick(productDetail)} className='text-pink-500' /> :
                          <AiOutlineHeart size={40} onClick={() => handleFavoriteClick(productDetail)} />
                      }
                  </div>
                  </div>
              </div>

          </div>
      </div>
  )
}

export default DetailComp