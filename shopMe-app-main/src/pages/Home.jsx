import React, { useState } from 'react'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'
import Footer from '../components/footer/Footer'

const Home = () => {

  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div className='mt-10 min-h-screen'>
      <SliderComp />
      <Sorting setSort={setSort}/>
      <div className='flex lg:flex-row flex-col lg:gap-0 gap-10'>
        <Category setCategory={setCategory} category={category}/>
        <Products category={category} sort={sort}/>
      </div>
    </div>
  )
}

export default Home