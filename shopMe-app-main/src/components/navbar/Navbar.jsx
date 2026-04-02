import React from 'react'
import NavbarLeft from './navbarItem/NavbarLeft'
import NavbarRight from './navbarItem/NavbarRight'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-40 my-5 flex items-center justify-between rounded-[28px] border border-stone-200 bg-white/90 px-4 py-4 shadow-sm backdrop-blur lg:px-6'>
      <NavbarLeft />
      <NavbarRight />
    </div>
  )
}

export default Navbar
