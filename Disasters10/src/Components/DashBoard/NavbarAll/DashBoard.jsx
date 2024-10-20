import React, { useState } from 'react'
import DashContainer from '../../common/DashContainer'
import {CardData} from '../../../lib/Db/index'
import CommonCard from '../../common/CommonCard'
import { IoClose } from "react-icons/io5"
import NavTitle from './NavTitle'
import Button from '../../common/Button'
import ChatBox from './ChatBox'

function DashBoard() {

  const [chatOpen, setChatOpen] = useState(false);
  const handleClick = () =>(
    setChatOpen(!chatOpen)
  ) 
   

  return (
    
    <section>
      <NavTitle P='Welcome back' H='Dashboard' B='cypherAI'/>
      <DashContainer className=''>
      
        <div  className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 p-4 ">
       
                
               {CardData.map( (Data,i)=> (
                 
                   
                    <CommonCard key={i} {...Data} />
                    
              ) )} 
            
            </div>



            
    
</DashContainer>  

    </section>
  )
}

export default DashBoard