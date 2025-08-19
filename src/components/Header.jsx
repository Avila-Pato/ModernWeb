import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets } from '../assets/data'
import Navbar from './Navbar'

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpened(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if(location.pathname === '/') {
        setActive(window.scrollY > 10);
      }else {
        setActive(true);
      }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

  return (
    <header className={`${active ? 'bg-primary py-3 shadow-md' : 'bg-none py-5'} fixed w-full z-30 transition-all`}>
      <div className='max-padd-container'>
        {/* Contenedor */}
        <div className='flexBetween'>
          {/* Logo */}
          <div className=' flex flex-1'>
            <Link to={"/"} >
            <img src={assets.logoImg} alt="Logo" className=  {` ${!active && "invert"} h-11`} />
            </Link>
          </div>
          {/* Navbar */}
          <Navbar 
  setMenuOpened={setMenuOpened}
  containerStyles={`${menuOpened ? "flex items-center flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white shadow-md w-52 ring-1 ring-slate-900/5 rounded-xl z-50" : "hidden lg:flex gap-x-5 xl:gap-x-1 p-1"} ${!menuOpened && !active ? "text-white" : ""}`}
/>

          {/* Botones, perfil y buscador */}
          <div className='flex sm:flex-1 items-center sm:justify-center gap-x-4 sm:gap-x-8'>
            {/* Serachbar */}
            <div>
              SearchBar
            </div>
            {/* menu toogle */}
            <>
            {menuOpened ? (
              <img src={assets.close} alt='closeIcob' onClick={toggleMenu} className={`${!active && "invert"} lg:hidden cursor-pointer text-xl`} />
            ) : (
               <img src={assets.menu} alt='openIcon' onClick={toggleMenu} className={`${!active && "invert"} lg:hidden cursor-pointer text-xl`} />
            )}
            </>
            {/* User */}
            <div>
              <div>
                 <button  className='btn-secondary flexCenter gap-2 rounded-full'>
                  Login
                  <img src={assets.user} alt="User Icon" className='w-6 h-6' />
                 </button>
              </div>
            </div>



          </div>
        </div>
      </div>
    </header>
  )
}

export default Header