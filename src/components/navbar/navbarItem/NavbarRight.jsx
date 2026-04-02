import React, { useEffect, useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {SlBasket} from 'react-icons/sl'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/cartSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import Search from '../../search/Search';
import OutsideClickHandler from 'react-outside-click-handler'

const NavbarRight = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const {carts} = useSelector(state => state.carts);
  const [keyword, setKeyword] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])

  return (
    <div className='flex items-center gap-4 sm:gap-8'>
      <div className='relative'>
        <div className='hidden items-center gap-2 rounded-full border border-stone-300 bg-stone-50 p-3 sm:flex'
          onClick={() => setIsSearch(true)}>
            <input className='mx-2 bg-transparent outline-none' type="text"
              placeholder='Ürün ara...' onChange={(e) => setKeyword(e.target.value)} />
            <BiSearch size={30}/>
        </div>
        <div className='flex items-center rounded-full border border-stone-300 bg-stone-50 px-3 py-2 sm:hidden'>
            <input
              className='w-24 bg-transparent text-sm outline-none'
              type="text"
              placeholder='Ara'
              value={keyword}
              onFocus={() => setIsSearch(true)}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <BiSearch size={22}/>
        </div>
        <OutsideClickHandler onOutsideClick={() => setIsSearch(false)}>
        {
          isSearch && <Search keyword={keyword} setIsSearch={setIsSearch} />
        }
        </OutsideClickHandler>
      </div>
      {
        location.pathname === "/favorite" ? <AiFillHeart size={30} className='cursor-pointer text-pink-500' onClick={() => navigate("/favorite")}/> :
        <AiOutlineHeart size={30} className='cursor-pointer text-stone-700' onClick={() => navigate("/favorite")}/>
      }
      <div className='relative cursor-pointer' onClick={()=> navigate("/cart")}>
        <div className='absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white font-semibold'>
            {carts?.length}
        </div>
        <SlBasket size={30} className='text-stone-700'/>
      </div>
    </div>
  )
}

export default NavbarRight
