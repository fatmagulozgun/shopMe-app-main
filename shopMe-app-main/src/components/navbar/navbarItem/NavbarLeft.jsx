import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLeft = () => {
  return (
    <Link to={"/"} className='sm:text-6xl text-3xl font-semibold'>
        EasyShop
    </Link>
  )
}

export default NavbarLeft