import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-12 rounded-[28px] border border-stone-200 bg-stone-950 px-6 py-10 text-stone-100 lg:px-10'>
      <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <div className='text-2xl font-black tracking-tight'>EasyShop</div>
          <div className='mt-2 max-w-xl text-sm leading-6 text-stone-300'>
            React ve Redux Toolkit ile geliştirilen bu demo proje; ürün listeleme, filtreleme,
            favoriler, sepet ve arama deneyimini modern bir arayüzle sunar.
          </div>
        </div>
        <div className='text-sm font-semibold text-stone-300'>
          © 2026 EasyShop. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}

export default Footer
