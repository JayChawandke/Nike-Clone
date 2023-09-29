import React from 'react'
import { hamburger } from '../assets/icons';
import {headerLogo} from '../assets/images';
import { navLinks} from '../Constents/Index';
const Nav = () => {
  return (
   <header className='padding-x py-8 
   absolute z-10 w-full'>
    <nav className='flex 
    justify-between item-center
    max-container'>
        <a href="/">
            <img src={headerLogo}
            alt='Logo'
            width={130}
            height={29}
            />
        </a>
        <ul className='flex-1 flex
        justify-center item-center
        gap-16 max-lg:hidden'> 
        {navLinks.map((item)=>(
          <li key={item.label}>
            <a href={item.href}
            className='fonts-monts errat leading-normal
            text-lg text-slate-gray'>
              {item.label}
            </a>
            
          </li>
        
        ))}  

        </ul>
        <div>
          <img className="hidden max-lg:block"
          src={hamburger}
          alt='Hamburger'
          width={25}
          height={29}></img>
        </div>
    </nav>
   </header>
  )
}

export default Nav;
