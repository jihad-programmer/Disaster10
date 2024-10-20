import React from 'react'
import NavTitle from '../DashBoard/NavbarAll/NavTitle'
import Card from './Card'
import { LocationPageData } from '../../lib/Db'
import ActivitiesDoc from './ActivitiesDoc'
function Locations() {
  return (
    <>

    <NavTitle P='Incidents - DR-4699 March 2023 Severe Storms' H='DR-4699 March 2023 Severe Storms' B='+New Location'/>

    <div className='w-[100%] grid md:flex gap-8 md:gap-[60px] lg:gap-[94px]'>
   
      <div className='md:w-[50%] w-fit h-[1582.5px] space-y-10 m-5 p-5 '>
         {/* First section start */}
           <div className=' h-[123px] space-y-[45px]'>
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
                    <img src="/yt.png" alt="" />
                  </div>
                  <div>
                    <h1 className='text-[14px] text-[#6B7280] font-[400] font-onest'>Approx. Cost:</h1>
                    <p className='font-bold text-[20px] font-onest'>$60,607,456.00</p>
                  </div>
               </div>
           </div>
             {/* First section End */}
         <div className='border border-[#E4E4E7]'></div>
         {/* Description section */}

         <div className='w-fit h-fit md:h-[85px] lg:h-[102px]'>
                <h1 className='font-bold text-[14px] font-onest text-[#000000]'>Description</h1>
                <p className='font-[400] text-[16px] text-[#71717A] font-onest'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
         </div>
  {/* Description section end */}
  <div className='border border-[#E4E4E7]'></div>

  {/* Locations section Start */}
  <div className='h-fit md:h-[525.5px] space-y-3 z-50'>
    <div className='flex justify-between'>
    <p className='text-[14px] text-[#000000] font-[400] font-onest'>Locations</p>
         <p className='text-[14px] text-[#A1A1AA] font-[400] font-onest underline'>See all</p>
    </div>

    {/* card */}
<div className='grid grid-flow-row  grid-cols-2 gap-4 h-[500.5px] '>

   
{LocationPageData.map((data,i)=> (
   <Card key={i} {...data}/>
))}


    </div>

  </div>

  {/* Location section end */}
  <div className='border border-[#E4E4E7]'></div>
  
<ActivitiesDoc className='-z-50'/>

      </div>
     
   
     
     



      {/* map section */}
      <div className='w-[50%] h-[565px] m-5 space-y-5'>
            <p className='text-secondary text-[14px] font-[400] font-onest'>Incident Map</p>
            <img src="/map2L.png" alt="" />
            <p className='text-secondary text-[14px] font-[400] font-onest'>Start 19.1232, -118.233     End 19.3245, -119.2323</p>
      </div>

    </div>
        
    </>
  )
}

export default Locations