import React from 'react'
import { cn } from '../../lib/utilis'
function DashContainer({children,className}) {
  return (
    <div className={cn('w-full max-w-screen-xl mx-auto px-2.5 h-[709px]' , className)}>
    {children}
    
    </div>
  )
}

export default DashContainer