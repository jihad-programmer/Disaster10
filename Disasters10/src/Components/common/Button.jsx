import React, { Children } from 'react'
import { cn } from '../../lib/utilis/index'

function Button({children,className}) {
  return (
    <button className={cn('bg-orange-primary py-2 px-[25px] h-[42px] rounded-[6px] text-[#FAFAFA] font-bold text-[12px]',className)}>
      {children}
    </button>
  )
}

export default Button