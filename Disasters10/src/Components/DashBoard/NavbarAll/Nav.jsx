import React, { useState } from 'react'
import DashContainer from '../../common/DashContainer'
import { Link, NavLink, Outlet } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import NavTitle from './NavTitle'
import DashBoard from './DashBoard'

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
const toggleMenu = ()=> {
  setIsMenuOpen(!isMenuOpen)
}

  return (
    <nav>
    
    <DashContainer className='py-4 font-onest space-y-5  bg-[#E4E4E780] '>
     <div className='flex justify-around items-center gap-[15px]'>
     <div className='w-[131px] h-[36px]'>
            <img src="/Logo.png" alt="" className='w-fit'/>
        </div>

        <div className=' h-[18px] hidden lg:flex justify-around items-center gap-[35px] font-[400] text-secondary'>
                 <NavLink to="/DashBoard">Dashboard</NavLink> 
               <NavLink to="/Incident">Incidents</NavLink>
               <NavLink to="/Locations">Locations</NavLink> 
                 <NavLink to="/Activities">Activities</NavLink> 
                 <NavLink to="/Documents">Documents</NavLink> 
                 <NavLink to="/CypherAI">Cypher AI</NavLink> 
        </div>        




       <div className='flex gap-2 justify-center items-center'>
        
        <button className='lg:hidden block text-accent' onClick={toggleMenu}>
                            <div className='space-y-1'>
                                <span className='block w-6 h-0.5 bg-black'/>
                                <span className='block w-6 h-0.5 bg-black'/>
                                <span className='block w-6 h-0.5 bg-black'/>
                                </div>
                            </button>

              <div className='flex gap-2.5 md:hidden'>
            <img src="/Bell.png" alt="" />
            <img src="/Man.png" alt="" />
          </div>        

        <div className='hidden md:flex w-[248px] h-10  gap-3 justify-center items-center'>

          <div>
            <img src="/Bell.png" alt="" />
            
          </div>

          <div>
          <img src="/Man.png" alt="" />
          </div>

          <div>
            <p  className='text-[#A1A1AA] text-[16px] font-semibold'>Usman Zafar</p>
            <p className='text-[#A1A1AA] text-[14px] font-[400]'>usmanzafar@gmail.com</p>
          </div>

        </div>
        </div>
                 
     </div>

    


    </DashContainer>
    {isMenuOpen && <MobileMenu Toggle={toggleMenu}/>}

    
    <Outlet/>
    </nav>
    
  )
}

export default Navbar