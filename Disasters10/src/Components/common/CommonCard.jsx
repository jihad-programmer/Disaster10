import React from 'react'

function Card({image,Title,Des,Money}) {
  return (
    <div className='w-fit h-[306px]'>
         <div className='w-[306px] h-[253px]'>
          <img src={image} alt="" />
         </div>
         <div className='w-[244px] h-[64px] leading-[30px]'>
              <h1 className='font-onest font-[400] text-[16px] text-primary'>{Title}</h1>  
              <p className='font-onest font-[400] text-[14px] text-secondary'>{Des}</p>
              <p className='font-bold text-[16px] text-primary'>{Money}</p>
         </div>
    </div>
  )
}

export default Card