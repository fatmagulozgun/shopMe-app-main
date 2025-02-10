import React, { useEffect, useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {SlBasket} from 'react-icons/sl'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import Search from '../../search/Search';
import OutsideClickHandler from 'react-outside-click-handler'

const NavbarRight = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {carts} = useSelector(state => state.carts);
  const [keyword, setKeyword] = useState("");
  const [isSearch, setIsSearch] = useState(false);
 
  
  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])

  return (
    <div className='flex items-center gap-8'>
      <div className='relative'>
        <div className='sm:flex items-center hidden gap-2 p-3 rounded-full bg-gray-200 border border-black'
          onClick={() => setIsSearch(true)}>
            <input className='outline-none mx-2 bg-transparent' type="text" 
              placeholder='Arama yapınız...' onChange={(e) => setKeyword(e.target.value)} />
            <BiSearch size={30}/>
        </div>
        <OutsideClickHandler onOutsideClick={() => setIsSearch(false)}>
        {
          isSearch && <Search keyword={keyword} setIsSearch={setIsSearch} />
        }
        </OutsideClickHandler>
      </div>
      {
        window.location.pathname === "/favorite" ? <AiFillHeart size={30} className='cursor-pointer' onClick={() => navigate("/favorite")}/> :
        <AiOutlineHeart size={30} className='cursor-pointer' onClick={() => navigate("/favorite")}/>
      }
      <div className='relative cursor-pointer' onClick={()=> navigate("/cart")}>
        <div className='absolute -top-1 -right-2 text-white flex justify-center items-center
          bg-red-500 rounded-full w-5 h-5 font-semibold'>
            {carts?.length}
        </div>
        <SlBasket size={30}/>
      </div>
    </div>
  )
}

export default NavbarRight