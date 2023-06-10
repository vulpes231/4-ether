import React, { useState } from 'react'

import { logo } from '../assets'
import { links } from '../constants'

import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <header className='w-full'>
      {/* navbar */}
      <nav className='max-w-[1000px] flex justify-between items-center p-4 mx-auto'>
        {/* logo */}
        <div className="flex flex-row items-center gap-2">
          <img src={logo} alt="logo-image" className='bg-white rounded-full p-1 w-[30px]' />
          <h1 className='text-3xl font-bold text-white'>4-Ether</h1>
        </div>
        {/* links */}
        <ul className={toggle ? 'absolute text-white top-32 left-0 w-full flex flex-col gap-4 justify-center items-center' : 'hidden md:flex gap-4 text-white'}>
          {links.map((link) => (
              <li className='cursor-pointer mt-2' key={link.id}>
                <a className='p' href={`/${link.id}`}>{link.title}</a>
              </li>
          ))}
          <li className='bg-[#2952e3] py-2 px-4 rounded-full text-white cursor-pointer hover:bg-[#2546bd]'>
            <a href="">Login</a>
          </li>
        </ul>
        <div 
          onClick={handleToggle} 
          className='text-2xl text-white font-extrabold sm:hidden'
        >
            {toggle ? <AiOutlineClose /> : <HiMenuAlt4 /> }
        </div>
      </nav>
    </header>
  )
}

export default Header