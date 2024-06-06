import { Link, NavLink } from 'react-router-dom';
import { IoCloseSharp, IoMenu } from 'react-icons/io5';
import { useContext, useEffect, useState } from 'react';
import Logo from '../assets/logo.png';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import { FaRegMoon } from 'react-icons/fa';
import { GoSun } from 'react-icons/go';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState('light');
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('Logout Successfully!');
      })
      .catch((err) => {
        toast.error(err.massage);
      });
  };
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
      {user && (
        <>
          <NavLink
            to='/add-craft-item'
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
        </>
      )}
      {user ? (
        <>
          <div className='avatar my-4'>
            <div className='w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 '>
              <img
                src={user?.photoURL}
                className='tooltip cursor-pointer tooltip-top '
                title={user?.displayName}
              />
            </div>
          </div>
          <button
            className='btn mx-4 btn-error font-playfairDisplay text-2xl my-4'
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <>
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
      )}
      <label className='swap swap-rotate mx-4'>
        {/* this hidden checkbox controls the state */}
        <input
          type='checkbox'
          onChange={handleToggle}
          className='theme-controller'
          value='synthwave'
        />

        {/* sun icon */}
        <GoSun className='swap-off  w-10 h-10'></GoSun>
        <FaRegMoon className='swap-on  w-10 h-10'></FaRegMoon>
      </label>
    </>
  );

  return (
    <nav className='relative bg-white  dark:bg-gray-800'>
      <div className='px-2  py-2 lg:flex lg:justify-between lg:items-center'>
        <div className='flex items-center justify-between'>
          <Link to='/' className='flex items-center cursor-pointer'>
            <img src={Logo} alt='' />
            <p className='font-playfairDisplay text-4xl'>
              Craf<span className='underline'>topia</span>
            </p>
          </Link>
          <div className='flex  lg:hidden'>
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
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100  ${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center`}
        >
          <div className='flex flex-col lg:items-center font-montserrat text-xl lg:flex-row lg:mx-6'>
            {navOptions}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
