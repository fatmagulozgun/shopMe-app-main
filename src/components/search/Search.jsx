import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchProducts } from '../../redux/searchSlice';
import Loading from '../Loading';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils/format';

const Search = ({keyword, setIsSearch}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {searchProducts, searchProductsStatus, searchProductsError} = useSelector(state => state.searchProducts);

  const searchData = searchProducts.filter(item => item.title.toUpperCase().includes(keyword.toUpperCase()));

  useEffect(() => {
    dispatch(getSearchProducts())
  },[dispatch])

  return (
    <div className='absolute left-0 top-[72px] z-50 w-[400px] max-w-[90vw] rounded-[24px] border border-stone-200 bg-white p-2 shadow-2xl'>
      {
        keyword && searchData.length <= 0 && <div className='p-3 text-center font-semibold text-red-700'>Ürün bulunamadı.</div>
      }
      {
        searchProductsStatus === "FAIL" && (
          <div className='p-3 text-center font-semibold text-red-700'>
            {searchProductsError || "Arama sonuclari yuklenemedi."}
          </div>
        )
      }
      {
        searchProductsStatus === "LOADING" ? <Loading /> :
        searchData?.slice(0,5).map((item) => (
          <div className='my-2 flex items-center justify-between rounded-2xl border border-stone-100 px-4 py-2 cursor-pointer' key={item?.id}
            onClick={() => {
              navigate(`/products/${item?.id}`);
              setIsSearch(false);
            }}>
            <img src={item?.image} alt={item?.title} className='h-14 w-14 rounded-full border border-stone-200 object-contain' />
            <div className='w-4/5'>
                <div className='text-sm underline-offset-2'>{(item?.title).substring(0,35)}...</div>
                <div className='font-bold'>{formatPrice(item?.price)}</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Search
