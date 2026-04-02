import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';
import { formatCategory } from '../../utils/format';

const Category = ({setCategory, category}) => {

  const dispatch = useDispatch();

  const {categories, categoriesStatus} = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(getCategories());
  },[dispatch])

  return (
    <aside className='lg:sticky lg:top-28 lg:w-1/4 w-full rounded-[28px] border border-stone-200 bg-white p-5 shadow-sm'>
        <div className='mb-4 text-xs font-black uppercase tracking-[0.25em] text-stone-400'>Kategoriler</div>
        {categoriesStatus === "LOADING" ? (
          <div className='rounded-2xl bg-stone-50 px-4 py-6 text-center text-sm font-semibold text-stone-500'>
            Kategoriler yukleniyor...
          </div>
        ) : (
        <ul className='space-y-2'>
          <li
            className={`rounded-2xl border px-4 py-3 text-center text-base font-semibold capitalize transition ${
              category === '' ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 hover:border-stone-900 hover:bg-stone-50'
            }`}
            onClick={() => setCategory('')}
          >
            Tümü
          </li>
          {categories.map((item,i) => (
            <li className={`rounded-2xl border px-4 py-3 text-center text-base font-semibold capitalize transition ${
              category === item ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 hover:border-stone-900 hover:bg-stone-50'
            }`} key={i}
              onClick={() => setCategory(item)}>
                {formatCategory(item)}
            </li>
          ))}
        </ul>
        )}
    </aside>
  )
}

export default Category
