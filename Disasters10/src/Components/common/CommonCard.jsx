import React from 'react'

function Card() {
  return (
    <div className='w-[337px] h-[306px]'>
         <div className='w-[306px] h-[253px]'>
          <img src="/Card-1.png" alt="" />
         </div>
         <div className='w-[244px] h-[64px] leading-[30px]'>
              <h1 className='font-onest font-[400] text-[16px] text-primary'>Whitechapel Rd.</h1>  
              <p className='font-onest font-[400] text-[14px] text-secondary'>Tulare County,  Los Angles, CA 23415</p>
              <p className='font-bold text-[16px] text-primary'>$1,456,654.00</p>
         </div>
    </div>
  )
}

export default Card