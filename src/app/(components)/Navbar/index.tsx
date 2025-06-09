'use client'

import { Bell, Menu, Settings, Sun } from 'lucide-react'
import React from 'react'
import { navSearch, notificationBell } from '../../../styles/navbar_style'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={`flex justify-between items-center w-full mb-7`}>
      {/* LEFT SIDE NAV */}
      {/* Menu */}
      <div className='flex justify-between items-center gap-5'>
        <button
          className={`px-3
          bg-gray-100
          rounded-full
          hover:bg-blue-100`}
          onClick={() => {}}
        >
          <Menu className='w-4 h-4' />
        </button>

        {/* Search bar */}
        <div className='relative'>
          <input
            className={navSearch}
            type='search'
            placeholder='Search groups & products'
          />
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none:'>
            <Bell className='text-gray-500' size={20} />
          </div>
        </div>
      </div>
      {/* RIGHT SIDE NAV */}
      <div className='flex justify-between items-center gap-5'>
        <div className='hidden md:flex justify-between items-center gap-5'>
          <div>
            <button className='null'>
              <Sun className='cursor-pointer text-gray-500' size={24} />
            </button>
          </div>
          <div className='relative'>
            <Bell className='cursor-pointer text-gray-500' size={24} />
            <span className={notificationBell}>3</span>
          </div>
          <hr className='w-0 h-7 border border-solid border-l border-gray-300 mx-3' />
          <div className='flex items-center gap-3 cursor-pointer'>
            <div className='w-9 h-9'>image</div>
            <span className='font-semibold'>Noi</span>
          </div>
        </div>
        <Link href='/settings'>
          <Settings className='cursor-pointer text-gray-500' size={24} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
