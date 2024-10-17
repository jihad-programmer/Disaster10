import React from 'react'
import { NavLink } from 'react-router-dom'

function MobileMenu({Toggle}) {
  return (
    <div className='lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-y-hidden'>
       <div className='flex justify-between items-center pb-6'>
            <div className='w-[131px] h-[36px]'>
            <img src="/Logo.png" alt="" />
            </div>
             <button className='text-black text-2xl self-end' aria-label="Close Menu" onClick={Toggle}>
                &times;
            </button>
        </div>

 <div className='grid gap-[35px] font-[400] text-secondary'>
    <NavLink to="/">Dashboard</NavLink> 
  <NavLink to="/Incident">Incidents</NavLink>
  <NavLink to="/Locations">Locations</NavLink> 
    <NavLink to="/Activities">Activities</NavLink> 
    <NavLink to="/Documents">Documents</NavLink> 
    <NavLink to="/Cypher AI">Cypher AI</NavLink> 
</div> 


    </div>
    
  )
}

export default MobileMenu