import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromFavorites } from '../redux/favoriteSlice';
import { formatPrice } from '../utils/format';
import StatusView from '../components/common/StatusView';

const Favorite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {favorites} = useSelector(state => state.favorites);

  if (!favorites || favorites.length === 0) {
    return (
      <div className='mt-10 min-h-screen'>
        <div className='my-10 text-center text-5xl font-extralight'>
          Favori urunlerim
        </div>
        <StatusView
          title="Henuz favori urun eklemedin"
          description="Begendigin urunleri favorilere ekleyerek daha sonra hizlica tekrar ulasabilirsin."
          action={
            <Link to="/" className='rounded-2xl bg-stone-900 px-5 py-3 text-sm font-bold text-white'>
              Alisverise don
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className='my-10 min-h-screen'>
      <div className='my-10 text-center text-4xl font-extralight lg:text-5xl'>
        Favori urunlerim
      </div>
      <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
        {favorites?.map((item) => (
          <div key={item.id} className='relative h-80 rounded-[28px] border border-stone-200 bg-white p-4 shadow-sm'>
            <div className='absolute top-0 right-0 inline-block rounded-2xl bg-black p-2 text-xl font-semibold text-white'>
              {formatPrice(item?.price)}
            </div>
            <div className='flex items-center justify-center p-4'>
                <img src={item.image} alt={item.title} className='h-[180px] object-contain' />
            </div>
            <div>
                <div className='text-center font-semibold'>{(item?.title).substring(0,30)}...</div>
                <div className='my-2 flex gap-2'>
                  <button className='w-full rounded-xl bg-gray-200 p-2 cursor-pointer'
                    onClick={() => navigate(`/products/${item.id}`)}>
                    Incele
                  </button>
                  <button className='rounded-xl bg-red-500 p-2 text-white cursor-pointer'
                    onClick={() => dispatch(removeFromFavorites(item?.id))}>
                    Kaldir
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
