import React, { useState } from 'react'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'

const Home = () => {

  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');

  const handleResetFilters = () => {
    setSort('');
    setCategory('');
  };

  return (
    <div className='mt-8 min-h-screen space-y-8'>
      
      <SliderComp />
      <div className='rounded-[28px] border border-stone-200 bg-white p-3 shadow-sm lg:p-4'>
        <Sorting setSort={setSort} sort={sort}/>
      </div>
      <div className='flex items-start gap-6 lg:flex-row flex-col'>
        <Category setCategory={setCategory} category={category}/>
        <Products category={category} sort={sort} onResetFilters={handleResetFilters}/>
      </div>
    </div>
  )
}

export default Home
