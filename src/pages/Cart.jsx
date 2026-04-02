import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, getCartTotal, increaseQuantity, removeFromCart, getCartTotalItems } from '../redux/cartSlice';
import Decision from '../components/alert/Decision';
import { formatPrice } from '../utils/format';

const Cart = () => {

    const dispatch = useDispatch();
    const [isModal, setIsModal] = useState(false);

    const {carts, totalAmount, totalCartItem} = useSelector(state => state.carts);

    useEffect(() => {
        dispatch(getCartTotal())
        dispatch(getCartTotalItems())
    }, [dispatch, carts])

  return (
    <div className='my-10 min-h-screen lg:p-10 p-2'>
      {
        carts.length > 0 ?
        <div className='overflow-x-auto rounded-[28px] border border-stone-200 bg-white p-4 shadow-sm'>
          <table className='table-auto w-full mb-5'>
            <thead>
                <tr className='bg-stone-100'>
                    <th className='px-4 py-2'>Görsel</th>
                    <th className='px-4 py-2'>Ürün başlığı</th>
                    <th className='px-4 py-2'>Fiyat</th>
                    <th className='px-4 py-2'>Miktar</th>
                    <th className='px-4 py-2'>Toplam</th>
                    <th className='px-4 py-2'>İşlem</th>
                </tr>
            </thead>
            <tbody className='text-sm lg:text-base'>
                {
                  carts?.map((item) => (
                  <tr key={item.id} className='border-b border-stone-100'>
                    <td className='px-4 py-2 flex items-center justify-center'>
                      <img src={item?.image} alt={item?.title} className='w-20 h-20 object-contain' />
                    </td>
                    <td className='px-4 py-2 text-center'>
                      {item?.title.length>30 ? (item?.title).substring(0,30)+'...' : item?.title}
                    </td>
                    <td className='px-4 py-2 text-center'>
                      {formatPrice(item?.price)}
                    </td>
                    <td className='px-4 py-2 text-center'>
                      <div className='flex items-center justify-center gap-2'>
                        <button
                          className='flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-lg font-bold'
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        >
                          -
                        </button>
                        <span className='min-w-[24px] text-center font-semibold'>{item?.quantity}</span>
                        <button
                          className='flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 text-lg font-bold text-white'
                          onClick={() => dispatch(increaseQuantity(item.id))}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className='px-4 py-2 text-center font-semibold'>
                      {formatPrice(item.price * item.quantity)}
                    </td>
                    <td className='px-4 py-2 text-center' onClick={() => dispatch(removeFromCart(item?.id))}>
                      <div className='inline-block cursor-pointer rounded-full bg-black px-3 py-1 text-lg text-white'>X</div>
                    </td>
                </tr>
                  ))
                }
            </tbody>
          </table>
        </div>
      : <div className='rounded-[28px] border border-dashed border-stone-300 bg-white p-8 text-center text-lg font-semibold text-stone-500 shadow-sm'>Sepette henüz ürün bulunmuyor.</div>
      }
      <div className={`my-4 flex justify-end ${carts.length<=0 && 'hidden'}`}>
      <div className='w-full rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm lg:w-[340px]'>
        <h2 className='mb-2 text-lg font-bold'>Ara Toplam: {formatPrice(totalAmount)}</h2>
        <p className='mb-2 text-gray-600'>Toplam ürün adedi: {totalCartItem}</p>
        <p className='text-gray-600'>Toplam tutar: {formatPrice(totalAmount)}</p>
      </div>
      </div>
      <div className='flex justify-end'>
         <button className={`w-44 rounded-2xl bg-red-500 p-3 text-center font-semibold text-white transition hover:border hover:border-red-600 hover:bg-white hover:text-red-600
          ${carts.length<=0 && 'hidden'}`}
          onClick={() => setIsModal(true)}>
            Sepeti Temizle
          </button>
      </div>
      {
        isModal && <Decision setIsModal={setIsModal} />
      }
    </div>
  )
}

export default Cart
