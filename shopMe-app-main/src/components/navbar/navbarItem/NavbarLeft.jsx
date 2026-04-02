import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLeft = () => {
  return (
    <Link to={"/"} className='text-3xl font-black tracking-tight text-stone-900 sm:text-5xl'>
        EasyShop
    </Link>
  )
}

export default NavbarLeft
