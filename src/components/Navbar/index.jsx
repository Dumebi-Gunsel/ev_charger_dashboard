import React, { useState } from 'react'
import { navItems } from '../../data'
import { HiOutlineBell } from 'react-icons/hi2'
import { NavLink, Outlet } from 'react-router-dom'
import './index.css'

function Navbar() {
    const [navIndex, setNavIndex] = useState(0)
    return (
        <div className='h-screen flex flex-col overflow-y-hidden'>
        <div className='bg-black flex justify-between  px-12 text-white relative'>
      <div className='center-self'>
        <h1 className='font-bold'>
          E<span className='text-primary'>V</span> Stations
        </h1>
      </div>
      <div className='flex space-x-10 transition-all duration-500'>
        {navItems.map((itm, idx) => (
          <NavLink 
            key={itm.name}
            onClick={() => setNavIndex(idx)}
            to={itm.path}
            className={({ isActive }) => `${isActive ? "text-primary font-bold" : ""}`}
          >
            <div className='h-10 flex flex-col justify-center nav-item py-8'>
              <div className={`nav-indicator ${idx === navIndex ? 'active' : 'inactive'} bg-primary rounded-b-lg`}></div>
              <p className='hover:text-primary transition-colors duration-500 cursor-pointer text-sm py-6'>
                {itm.name}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
      <div className='center-self'>
        <HiOutlineBell />
      </div>
    </div> 
    <div className='flex-1'>
      <Outlet/>
    </div>
       
       
        </div>
        
    )
}

export default Navbar