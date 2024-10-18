import React, { useState } from 'react'
import DashContainer from '../../common/DashContainer'
import {CardData} from '../../../lib/Db/index'
import CommonCard from '../../common/CommonCard'
import { IoClose } from "react-icons/io5"
import NavTitle from './NavTitle'

function DashBoard() {

  const [chatOpen, setChatOpen] = useState(false);
  const handleChat = () =>(
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



            <button
        className="bg-orange text-white md:w-[77px] w-[57px] md:h-[77px] h-[57px] rounded-full inline-flex justify-center items-center bottom-4 right-4 fixed hover:cursor-pointer font-bold text-[55px] font-white font-onest z-[9999]"
        onClick={handleChat}>
      
        {chatOpen ? <IoClose /> : "C"}
      </button>

      <div className="fixed top-0 right-4">{chatOpen ? <ChatBox /> : null}</div>
    
</DashContainer>  
   
    </section>
  )
}

export default DashBoard