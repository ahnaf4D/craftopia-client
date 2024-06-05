import { Link, NavLink } from 'react-router-dom';
import { IoCloseSharp, IoMenu } from 'react-icons/io5';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navOptions = (
    <>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive
            ? 'mt-2 transition-colors duration-300 font-bold transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200'
            : 'mt-2 font-medium transition-colors duration-300 text-black transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200'
        }
      >
        Home
      </NavLink>
      <NavLink
        to='/all-art-crafts'
        className={({ isActive }) =>
          isActive
            ? 'mt-2 transition-colors duration-300 font-bold transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200'
            : 'mt-2 font-medium transition-colors duration-300 text-black transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200'
        }
      >
        All Art & Crafts
      </NavLink>
      <NavLink
        to='/all-craft'
        className={({ isActive }) =>
          isActive
            ? 'mt-2 transition-colors duration-300 font-bold transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200'
            : 'mt-2 font-medium transition-colors duration-300 text-black transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200'
        }
      >
        Add Craft Item
      </NavLink>
      <NavLink
        to='/my-art-craft-list'
        className={({ isActive }) =>
          isActive
            ? 'mt-2 transition-colors duration-300 font-bold transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200'
            : 'mt-2 font-medium transition-colors duration-300 text-black transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200'
        }
      >
        My Art & Craft List
      </NavLink>
      <Link to='/login'>
        <button className='btn mr-2 btn-warning font-playfairDisplay text-xl my-4'>
          Login
        </button>
      </Link>
      <Link to='/register'>
        <button className='btn btn-error font-playfairDisplay text-xl'>
          Register
        </button>
      </Link>
    </>
  );

  return (
    <nav className='relative bg-white  dark:bg-gray-800'>
      <div className='px-6 py-4 md:flex md:justify-between md:items-center'>
        <div className='flex items-center justify-between'>
          <a href='#'>
            <img
              alt=''
              className='w-auto h-6 sm:h-7'
              src='https://merakiui.com/images/full-logo.svg'
            />
          </a>
          <div className='flex md:hidden lg:hidden'>
            <button
              aria-label='toggle menu'
              onClick={toggleMenu}
              className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
              type='button'
            >
              {isOpen ? (
                <IoCloseSharp className='size-6' />
              ) : (
                <IoMenu className='size-6' />
              )}
            </button>
          </div>
        </div>
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 ${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center`}
        >
          <div className='flex flex-col lg:items-center font-montserrat text-xl md:flex-row md:mx-6'>
            {navOptions}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
