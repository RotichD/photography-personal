//Works, Blog, Contact
'use client';
import { useState } from 'react';
import Link from 'next/link';

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className='text-2xl font-ovo'>
      <div className='py-5 px-4 lg:px-8 flex justify-between'>
        <div>
          <p className='hover:text-gray-500 transition duration-300 hover:scale-105'>
            <Link href='/'>Dylan Rotich</Link>
          </p>
        </div>

        <div className='hidden md:block'>
          <ul className='flex space-x-8'>
            <li className='hover:text-gray-500 hover:scale-105 transition duration-300'>
              <Link href={'/works'}>Works</Link>
            </li>
            <li className='hover:text-gray-500 hover:scale-105 transition duration-300'>
              <Link href={'/blog'}>Blog</Link>
            </li>
            <li className='hover:text-gray-500 hover:scale-105 transition duration-300'>
              <Link href={'/presets'}>Presets</Link>
            </li>
          </ul>
        </div>

        <button
          onClick={toggleMenu}
          className='md:hidden flex justify-center items-center'
        >
          {!isOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-8 h-8'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-8 h-8'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          )}
        </button>
      </div>

            {/* Mobile Menu ↓ */}
      {isOpen && (
        <div className='absolute z-10 bg-white flex flex-col items-center space-y-4 py-4 border-y mb-5 w-full md:hidden'>
          <button onClick={toggleMenu} className=' focus:text-gray-500 transition duration-300'>
            <Link href={'/works'}>Works</Link>
          </button>

          <button onClick={toggleMenu} className='focus:text-gray-500 transition duration-300'>
            <Link href={'/blog'}>Blog</Link>
          </button>

          <button className='focus:text-gray-500 transition duration-300'>
            <Link href={'/presets'}>Presets</Link>
          </button>
        </div>
      )}
      <div className=' h-px border-b xl:mx-8'></div>
    </nav>
  );
}

export default NavBar;
