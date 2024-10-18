import React from 'react'
import DashContainer from '../../common/DashContainer'
import Button from '../../common/Button'
function NavTitle({P,H,B}) {
  return (
    <div>
        <DashContainer className='font-onest grid justify-center place-items-center md:flex md:justify-between items-center px-5 bg-[#E4E4E780] '>
            <div className='w-[137px] h-[54px] space-y-0 leading-[16px]'>
                <p className='text-[12px] font-[400] text-primary'>{P}</p> <br />
                <h1 className='text-[26px] font-bold text-primary'>{H}</h1>
            </div>
            <div className='h-[42px] w-fit flex justify-center items-center gap-2'>
                <div className='flex items-center justify-center'>
                    <img src="/Search.png" alt="" />
                    <input type="text" placeholder='Search incident' className='text-[12px] text-primary bg-[#FAFAFA] p-3.5 rounded-[6px]' />
                </div>

                <div className='md:flex hidden'>
                    <p className='text-[12px] text-primary bg-[#FAFAFA]  p-2  rounded-[6px]'>Sort By: Date modified</p>
                </div>

                <Button>{B}</Button>
                
            </div>
        </DashContainer>
    </div>
  )
}

export default NavTitle