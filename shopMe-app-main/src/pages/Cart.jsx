import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCartTotal, removeFromCart, getCartTotalItems } from '../redux/cartSlice';
import Decision from '../components/alert/Decision';

const Cart = () => {

    const dispatch = useDispatch();
    const [isModal, setIsModal] = useState(false);

    const {carts, totalAmount, totalCartItem} = useSelector(state => state.carts);

    useEffect(() => {
        dispatch(getCartTotal())
        dispatch(getCartTotalItems())
    }, [dispatch])

  return (
    <div className='my-10 lg:p-10 p-2 h-screen'>
      {
        carts.length > 0 ? 
        <div className='overflow-x-auto'>
          <table className='table-auto w-full mb-5'>
            <thead>
                <tr className='bg-gray-100'>
                    <th className='px-4 py-2'>Görsel</th>
                    <th className='px-4 py-2'>Ürün başlığı</th>
                    <th className='px-4 py-2'>Fiyat</th>
                    <th className='px-4 py-2'>Miktar</th>
                    <th className='px-4 py-2'>İşlem</th>
                </tr>
            </thead>
            <tbody className='lg:text-base text-sm'>
                {
                  carts?.map((item) => (
                  <tr key={item.id} className='border'>
                    <td className='px-4 py-2 flex items-center justify-center'>
                      <img src={item?.image} alt="" className='w-20 h-20 object-contain' />
                    </td>
                    <td className='px-4 py-2 text-center'>
                      {item?.title.length>30 ? (item?.title).substring(0,30)+'...' : item?.title}
                    </td>
                    <td className='px-4 py-2 text-center'>
                      {item?.price} TL
                    </td>
                    <td className='px-4 py-2 text-center'>
                      {item?.quantity}
                    </td>
                    <td className='px-4 py-2 text-center' onClick={() => {
                      dispatch(removeFromCart(item?.id));
                      dispatch(getCartTotal());
                      dispatch(getCartTotalItems())
                      }}>
                      <div className='bg-black text-white px-2 text-lg 
                        rounded-full cursor-pointer inline-block'>X</div>
                    </td>
                </tr>
                  ))
                }
            </tbody>
          </table> 
        </div>
      : <div className='p-2 bg-yellow-200 lg:text-lg text-base 
          font-semibold text-center rounded-xl'>Sepette herhangi bir ürün bulunmuyor.</div>
      }
      <div className={`flex justify-end my-4 ${carts.length<=0 && 'hidden'}`}>
      <div className='p-4 bg-white rounded shadow-md lg:w-1/4 w-2/3 border'>
        <h2 className='text-lg font-bold mb-2'>Ara Toplam : {totalAmount} TL</h2>
        <p className='text-gray-600 mb-2'>Toplam Ürün Adedi: {totalCartItem}</p>
        <p className='text-gray-600'>Toplam Tutar: {totalAmount} TL</p>
      </div>
      </div>
      <div className='flex justify-end'>
         <button className={`p-2 bg-red-500 rounded-xl text-white text-center w-44
          hover:bg-white hover:text-red-600 hover:border hover:border-red-600 cursor-pointer
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