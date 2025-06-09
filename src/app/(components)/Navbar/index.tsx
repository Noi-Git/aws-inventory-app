import { Menu } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className={`flex justify-between items-center w-full mb-7`}>
      {/* LEFT SIDE NAV */}
      <div className='flex justify-between items-center gap-5'>
        <button
          className={`px-3
          bg-gray-100
          rounded-full
          hover:bg-blue-100`}
          // onClick={() => {}}
        >
          <Menu className='w-4 h-4' />
        </button>
      </div>
      {/* RIGHT SIDE NAV */}
    </div>
  )
}

export default Navbar
