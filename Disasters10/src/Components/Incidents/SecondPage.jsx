import React from 'react'
import DashContainer from '../common/DashContainer'
import { NavLink } from 'react-router-dom'
import Button from '../common/Button'
function SecondPage() {
  return (
    <div>
        <div>
        <DashContainer className='font-onest grid space-y-5  md:space-y-0 justify-center place-items-center md:flex md:justify-between items-center px-7 bg-[#E4E4E780] '>
            <div className='w-[137px] h-[70px] space-y-0 leading-[16px]'>
                <p className='text-[12px] font-[400] text-primary'>Home - Incidents - New Incident</p> <br />
                <h1 className='text-[26px] font-bold text-primary'>New Incident</h1>
            </div>
           
          <div className='space-x-4'>
            <NavLink to={'/FirstPage'}> <Button className='bg-white text-black hover:bg-[#F26922] hover:text-white'>Back</Button> </NavLink>   
            <NavLink to={'/ThirdPage'}> <Button>Next step</Button> </NavLink>   
        </div>                      
                
                
            
        </DashContainer>
    </div>
    </div>
  )
}

export default SecondPage