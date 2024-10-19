import React from 'react'
import DashContainer from '../common/DashContainer'
import Button from '../common/Button'
import { NavLink } from 'react-router-dom'
function ThirdPage() {
  return (
    <>
        <div>
        <DashContainer className='font-onest grid space-y-5  md:space-y-0 justify-center place-items-center md:flex md:justify-between items-center px-7 bg-[#E4E4E780] '>
            <div className='flex justify-center items-start gap-2'>

            
           <img src="/cross.png" alt="" />
            <div className='w-fit h-[70px] space-y-0 leading-[16px] '>
                
                <p className='text-[12px] font-[400] text-primary'>Home - Incidents - New Incident</p> <br />
                <h1 className='text-[26px] font-bold text-primary'>New Incident</h1>
            </div>
            </div>
            
            <div>
                <img src="/SecondPageStep.png" alt="" className='w-fit' />
            </div>
           
          <div className='space-x-4'>
            <NavLink to={'/SecondPage'}> <Button className='bg-white text-black hover:bg-[#F26922] hover:text-white'>Back</Button> </NavLink>   
            <NavLink to={'/LastPage'}> <Button>Next step</Button> </NavLink>   
        </div>                      
  
        </DashContainer>
    </div>

          <div className='w-[500px] md:w-[752px] md:h-[366px] mx-auto my-10 space-y-5'>
               <div className='w-fit h-[128px] space-y-7'>
                     <div className='w-fit h-[54px]'>
                          
                          <h1 className='font-bold font-onest text-[24px] text-primary'>Let’s give the incident a title?</h1>
                          <p className='text-[14px] text-secondary font-onest font-[400]'>Make a title that will easily identify the incidents</p>

                        </div> 
                        <div className='w-[500px] md:w-[752px] h-[50px]'>
                            <input type="text" placeholder='Add title here' className='w-full p-2 rounded-[6px] border text-secondary bg-[#F4F4F5] ' />
                        </div> 
               </div>

               <div className='w-fit h-[128px] space-y-9'>
                     <div className='w-fit h-[54px]'>
                          
                          <h1 className='font-bold font-onest text-[24px] text-primary'>Describe what happened during the incident? </h1>
                          <p className='text-[14px] text-secondary font-onest font-[400]'>Share some information about the incident. The when, where, how. </p>

                        </div> 
                        <div className='w-[500px] md:w-[752px] h-[50px]'>
                            <textarea name="" id="" placeholder='Type Here' className='w-full p-2 rounded-[6px] border text-secondary bg-[#F4F4F5] h-[100px] md:h-[127px] '></textarea>
                        </div> 
               </div>
          </div>
        
    </>
  )
}

export default ThirdPage