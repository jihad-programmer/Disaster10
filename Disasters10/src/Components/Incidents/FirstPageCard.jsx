import React from 'react'

function FirstPageCard({img,title,des}) {
  return (
    <div>
         <div className='md:max-h-[269px] md:max-w-[235px] w-fit space-x-2  bg-[#F4F4F5] rounded-[1px] border border-1 border-[#E4E4E7] mx-2 space-y-[68px]'>
                  <div className='mx-3 my-5'>
                    <img src={img} alt="" />
                  </div>

                <div className='space-y-2 mx-2'>
                  <h1 className='font-onest font-bold text-[18px]md:text-[20px] w-[190px] h-[43px]py-10'>{title}</h1>
                     
                   <p className='font-onest font-[400] text-[14px]'>{des}</p>  
                   </div>
    </div>

    </div>
  )
}

export default FirstPageCard