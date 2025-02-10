import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';
import { useState } from 'react';

const Category = ({setCategory, category}) => {

  const dispatch = useDispatch();

  const {categories} = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(getCategories());
  },[dispatch])
  return (
    <div className='lg:w-1/6 w-full bg-gray-100'>
        <ul>
          <li className='font-bold p-2 text-xl text-center border-b mx-4'>KATEGORİ</li>
          {categories.map((item,i) => (
            <li className={`p-3 w-full text-center text-lg
            hover:bg-gray-200 cursor-pointer ${category === item && 'border border-black'}`} key={i}
              onClick={() => setCategory(item)}>
                {item}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Category