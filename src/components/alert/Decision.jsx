import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart, getCartTotal } from '../../redux/cartSlice';

const Decision = ({ setIsModal }) => {

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(getCartTotal());
    setIsModal(false);
  };

  return (
    <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="rounded-[24px] bg-white p-6 shadow-md">
        <h2 className="mb-4 font-semibold lg:text-xl">Sepeti temizlemek istediğinize emin misiniz?</h2>
        <div className="flex justify-end">
          <button
            className="mr-2 rounded-md bg-red-500 px-4 py-2 text-white"
            onClick={handleClearCart}>
            Evet, Temizle
          </button>
          <button
            className="rounded-md bg-gray-300 px-4 py-2 text-gray-800"
            onClick={() => setIsModal(false)}>
            İptal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Decision;
