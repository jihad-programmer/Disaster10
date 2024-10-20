import React from 'react'

function Card({img,title,des,money}) {
  return (
    <>
    
    <div className='w-fit md:w-[214px] h-fit md:h-[241px] space-y-[14px]'>
              <div className='h-[177px]'>
                <img src={img} alt="" />
              </div>

              <div className='h-[50px] w-[209px]'>
                  <p className='text-[14px] text-primary font-bold font-onest'>{title}</p>
                  <p className='text-[12px] text-secondary font-[400] font-onest'>{des}</p>
                  <p className='text-[14px] text-primary font-bold font-onest'>{money}</p>
              </div>
          </div></>
  )
}

export default Card