'use client'

import React, { useState } from 'react'

export default function Search() {
  const [isBuy, setIsBuy] = useState(true)

  function handleClick() {
    setIsBuy(!isBuy)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className='relative max-w-[750px] z-10'>
      <div className='flex'>
        <button
          onClick={handleClick}
          className={[
            'py-3 px-8',
            isBuy ? 'bg-[#FEFEFF] font-medium text-main' : 'bg-transparent text-[#A6A6A6]',
          ].join(' ')}
        >
          Buy
        </button>
        <button
          onClick={handleClick}
          className={[
            'py-3 px-8',
            !isBuy ? 'bg-[#FEFEFF] font-medium text-main' : 'bg-transparent text-[#A6A6A6]',
          ].join(' ')}
        >
          Rent
        </button>
      </div>
      <div className='bg-[#FEFEFF] p-8'>
        <form className='flex justify-between' onSubmit={handleSubmit}>
          <div>
            <label className='text-title'>Location</label>
            <select className='text-[#A6A6A6] block'>
              <option>Bogor, Jawa Barat</option>
            </select>
          </div>
          <div>
            <label className='text-title'>Type</label>
            <select className='text-[#A6A6A6] block'>
              <option>Home</option>
              <option>Vila</option>
            </select>
          </div>
          <div>
            <label className='text-title'>Price Range</label>
            <select className='text-[#A6A6A6] block'>
              <option>$200 - $350</option>
              <option>$350 - $550</option>
            </select>
          </div>
          <button type='submit' className='py-[18px] px-12 bg-main text-white font-medium'>Search</button>
        </form>
      </div>
    </div>
  )
}
