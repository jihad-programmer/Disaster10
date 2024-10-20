import React from 'react'
import NavTitle from '../DashBoard/NavbarAll/NavTitle'

function Locations() {
  return (
    <>

    <NavTitle P='Incidents - DR-4699 March 2023 Severe Storms' H='DR-4699 March 2023 Severe Storms' B='+New Location'/>

    <div className='w-[100%] grid md:flex'>

      <div className='md:w-[50%] w-fit h-[1582.5px] space-y-10 m-5 p-5 bg-slate-200'>
           <div className='w-[] h-[123px] space-y-[45px]'>
               <div className='h-[39px] flex gap-2'>
                  <div>
                    <img src="/LO.png" alt="" />
                  </div>
                  <div>
                    <h1 className='text-[14px] text-[#6B7280] font-[400] font-onest'>Location</h1>
                    <p className='font-[700] text-[20px] font-onest'>Tulare County,  Los Angles, CA 23415</p>
                  </div>
               </div>
               <div className='h-[39px] flex gap-2'>
                  <div>
                    <img src="/LO.png" alt="" />
                  </div>
                  <div>
                    <h1 className='text-[14px] text-[#6B7280] font-[400] font-onest'>Approx. Cost:</h1>
                    <p className='font-[700] text-[20px] font-onest'>$60,607,456.00</p>
                  </div>
               </div>
           </div>
      </div>
      
      <div className='w-[50%] h-[565px] m-5 space-y-5 bg-sky-400'>

      </div>
    </div>
        
    </>
  )
}

export default Locations