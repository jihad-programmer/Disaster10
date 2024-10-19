import React from 'react'

function SecondPageCard({img,text}) {
  return (
    <div>
        <div className='max-w-[753px] max-h-[389px] '>
                   <div className='w-[180px] h-[69px] rounded-[6px] border bg-[#E4E4E7] flex justify-center items-center gap-4 hover:bg-[#F26922]  hover:text-[#FAFAFA] text-secondary '>
                        <div className='hover:bg-white size-[25px]'>
                        <img src={img} alt={text}  />
                        </div>

                        <div>
                            <p className='font-[400] text-onest text-[14px]  '>{text}</p>
                        </div>
                    </div>

            </div>
    </div>
  )
}

export default SecondPageCard