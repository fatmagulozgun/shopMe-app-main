import React from 'react'

const Sorting = ({setSort}) => {

  return (
    <div className='my-5 p-5 bg-gray-100 flex justify-end items-center'>
        <select onChange={(e) => setSort(e.target.value)} className='py-2 px-5' name="" id="">
            <option value="" disabled>SEÇİNİZ</option>
            <option value="inc">Artan</option>
            <option value="dec">Azalan</option>
        </select>
    </div>
  )
}

export default Sorting