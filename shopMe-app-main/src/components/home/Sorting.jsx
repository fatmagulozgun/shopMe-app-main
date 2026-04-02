import React from 'react'

const Sorting = ({setSort, sort}) => {

  return (
    <div className='flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between'>
        <div>
            <div className='text-xs font-black uppercase tracking-[0.22em] text-stone-400'>Ürünler</div>
            <div className='mt-0.5 text-2xl font-black text-stone-900'>Koleksiyonu keşfet</div>
        </div>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className='rounded-2xl border border-stone-300 bg-white px-4 py-2.5 font-semibold text-stone-700 outline-none transition focus:border-stone-900' name="sorting" id="sorting">
            <option value="">Sıralama seçin</option>
            <option value="inc">Artan</option>
            <option value="dec">Azalan</option>
        </select>
    </div>
  )
}

export default Sorting
