import React from 'react'
import DashContainer from '../common/DashContainer'
import { NavLink } from 'react-router-dom'
import Button from '../common/Button'
import SecondPageCard from './SecondPageCard'
import { SecondPageData } from '../../lib/Db'
function SecondPage() {
  return (
    <>
        <div>
        <DashContainer className='font-onest grid space-y-5  md:space-y-0 justify-center place-items-center md:flex md:justify-between items-center px-7 bg-[#E4E4E780] '>
            <div className='w-[137px] h-[70px] space-y-0 leading-[16px]'>
                <p className='text-[12px] font-[400] text-primary'>Home - Incidents - New Incident</p> <br />
                <h1 className='text-[26px] font-bold text-primary'>New Incident</h1>
            </div>

            <div>
                <img src="/SecondPageStep.png" alt="" className='w-fit' />
            </div>
           
          <div className='space-x-4'>
            <NavLink to={'/FirstPage'}> <Button className='bg-white text-black hover:bg-[#F26922] hover:text-white'>Back</Button> </NavLink>   
            <NavLink to={'/ThirdPage'}> <Button>Next step</Button> </NavLink>   
        </div>                      
  
        </DashContainer>
    </div>

      <div>
         <div className='md:w-[753px] h-[445px] md:mx-auto my-8 p-5 '>
            <div>
                <h1 className='font-onest text-primary font-bold text-[24px] p-2'>Which of these best describes the incident?</h1>
            </div>
             
             <div className='grid grid-flow-row grid-cols-2 md:flex md:flex-wrap  items-center w-full md:w-[600px] lg:w-[753px]  h-[389px] space-x-2 space-y-5 md:space-y-0  '>
                
                             {SecondPageData.map( (data,i)=> (
                   
                   <SecondPageCard key={i} {...data}/>
                         
                 
                     ) )} 
             </div>
            
         </div>
      </div>
    </>
  )
}

export default SecondPage