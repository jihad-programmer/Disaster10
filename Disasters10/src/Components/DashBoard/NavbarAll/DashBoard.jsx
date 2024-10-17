import React from 'react'
import DashContainer from '../../common/DashContainer'
import {CardData} from '../../../lib/Db/index'
import CommonCard from '../../common/CommonCard'
function DashBoard() {
  return (
    <section>
      <DashContainer className='py-10 px-5'>
        <div>
            <div className='flex items-center flex-row flex-wrap gap-8 overflow-hidden'>
                
               {CardData.map( (Data,i)=> (
                    <div className='w-full sm:w-[48%] md:w-[30%] lg:w-[23%] xl:w-[23%] bg-white rounded-lg shadow-sm overflow-hidden"'>
                   
                    <CommonCard key={i} {...Data} />
                    </div>
              ) )} 
            </div>
               
        </div>

<div className='ml-[1050px]'>
  <img src="/C-Logo.png" alt="" className='size-[48px]' />
</div>


      </DashContainer>
      <div>
        <img src="/C.Logo.png" alt="" />
      </div>
    </section>
  )
}

export default DashBoard