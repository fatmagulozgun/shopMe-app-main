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
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-900">
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="lg:text-xl font-semibold mb-4">Sepeti Temizlemek İstediğinize Emin Misiniz?</h2>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
            onClick={handleClearCart}>
            Evet, Temizle
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            onClick={() => setIsModal(false)}>
            İptal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Decision;
