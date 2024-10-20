import React from 'react'

function ActivitiesDoc() {
  return (
    <>
     {/* Activities section start */}



  <div className='h-fit md:h-[256px] space-y-3 '>
    <div className='flex justify-between'>
    <p className='text-[14px] text-[#000000] font-[400] font-onest'>Activities</p>
         <p className='text-[14px] text-[#A1A1AA] font-[400] font-onest underline'>See all</p>
    </div>
  {/* activities card| */}
  <div className='h-fit md:h-[108px] bg-[#F4F4F5]'>
          <div className='flex gap-4 items-center'>
             <img src="/bgicon.png" alt="" />
             <div className=''>
             <h1 className='text-onest text-primary font-bold text-[16px]'>Activity name</h1>
             <p className='text-secondary font-[400] text-[14px] font-onest'>Location name
             16.12212, -122.1424</p>
             <p className='text-onest text-primary font-bold text-[16px]'>$1,456,654.00</p>
             </div>
             
          </div>
    </div>
    <div className='h-fit md:h-[108px] bg-[#F4F4F5]'>
          <div className='flex gap-4 items-center'>
             <img src="/bgicon.png" alt="" />
             <div className=''>
             <h1 className='text-onest text-primary font-bold text-[16px]'>Activity name</h1>
             <p className='text-secondary font-[400] text-[14px] font-onest'>Location name
             16.12212, -122.1424</p>
             <p className='text-onest text-primary font-bold text-[16px]'>$1,456,654.00</p>
             </div>
             
          </div>
    </div>
    </div>
      {/* Activities section end */}


      <div className='border border-[#E4E4E7]'></div>


{/* Documents section start */}
      <div className='h-fit md:h-[256px] space-y-3 '>
    <div className='flex justify-between'>
    <p className='text-[14px] text-[#000000] font-[400] font-onest'>Document</p>
         <p className='text-[14px] text-[#A1A1AA] font-[400] font-onest underline'>See all</p>
    </div>
  {/* Document card| */}
  <div className='h-fit md:h-[108px] bg-[#F4F4F5]'>
          <div className='flex gap-4 items-center'>
             <img src="/bgicon.png" alt="" />
             <div className=''>
             <h1 className='text-onest text-primary font-bold text-[16px]'>Document name</h1>
             <p className='text-secondary font-[400] text-[14px] font-onest'>Document name
             16.12212, -122.1424</p>
             <p className='text-onest text-primary font-bold text-[16px]'>$1,456,654.00</p>
             </div>
             
          </div>
    </div>
    <div className='h-fit md:h-[108px] bg-[#F4F4F5]'>
          <div className='flex gap-4 items-center'>
             <img src="/bgicon.png" alt="" />
             <div className=''>
             <h1 className='text-onest text-primary font-bold text-[16px]'>Document name</h1>
             <p className='text-secondary font-[400] text-[14px] font-onest'>Location name
             16.12212, -122.1424</p>
             <p className='text-onest text-primary font-bold text-[16px]'>$1,456,654.00</p>
             </div>
             
          </div>
    </div>
    </div>
      {/* Documents section end */}

    </>
  )
}

export default ActivitiesDoc