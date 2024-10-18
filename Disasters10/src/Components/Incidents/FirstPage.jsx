import React from 'react'
import Button from '../common/Button'
import { FirstPageData } from '../../lib/Db'
import FirstPageCard from './FirstPageCard'
import { NavLink } from 'react-router-dom'
import SecondPage from './SecondPage'
function FirstPage() {
  return (
    <>
    
   <div className='max-w-[815px] max-h-[457px] space-y-[35px] mx-auto  my-10'>
     <div className='max-w-[613px] max-h-[92px] mx-auto'>
            <h1 className='font-onest font-bold text-primary text-[25px] md:text-[32px] text-center'>Let’s get started</h1>
            <p className='font-onest font-[400] text-secondary text-[16px] 
           text-center'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br /> dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
      </div>

        <div className='w-[450px] md:w-[609px] max-h-[29px] mx-auto'>
            <img src="/Step.png" alt="" />
        </div>

       <div className='grid grid-cols-3 gap-3 md:flex justify-around items-center py-10'>
       {FirstPageData.map( (Data,i)=> (
               
                <FirstPageCard key={i} {...Data}/>
           ))}
           </div>
             

        </div>   

  

   <div className='w-[100%] my-[100px] md:my-[140px]'>
    <NavLink to={'/SecondPage'}> <Button className='md:ms-[46%]'>Get started</Button>   </NavLink>         
    
                
        </div>
    
    </>
  )
}

export default FirstPage