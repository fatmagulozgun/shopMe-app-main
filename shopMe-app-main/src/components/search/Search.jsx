import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchProducts } from '../../redux/searchSlice';
import Loading from '../Loading';
import { useNavigate } from 'react-router-dom';

const Search = ({keyword, setIsSearch}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {searchProducts, searchProductsStatus} = useSelector(state => state.searchProducts);

  const searchData = searchProducts.filter(item => item.title.toUpperCase().includes(keyword.toUpperCase()));

  useEffect(() => {
    dispatch(getSearchProducts())
  },[dispatch])

  return (
    <div className='border border-black w-[400px] rounded-xl  absolute top-[65px] left-0 z-50 p-1 bg-gray-100'>
      {
        searchData.length <= 0 && <div className='p-2 text-center text-red-700'>Ürün bulunamadı!</div>
      }
      {
        searchProductsStatus === "LOADING" ? <Loading /> :
        searchData?.slice(0,5).map((item) => (
          <div className='flex justify-between items-center border-b rounded-xl 
            px-4 py-2 my-2 cursor-pointer' key={item?.id}
            onClick={() => {
              navigate(`/products/${item?.id}`);
              setIsSearch(false);
            }}>
            <img src={item?.image} alt="" className='w-14 h-14 object-contain border border-black rounded-full' />
            <div className='w-4/5'>
                <div className='text-sm underline-offset-2'>{(item?.title).substring(0,35)}...</div>
                <div className='font-bold'>{item?.price} TL</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Search