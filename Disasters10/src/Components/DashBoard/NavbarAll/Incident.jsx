import React from 'react'
import NavTitle from './NavTitle'
import { CardData } from '../../../lib/Db'
import CommonCard from '../../common/CommonCard'
import DashContainer from '../../common/DashContainer'
function Incident() {
  return (
    <div>
        <NavTitle P='Home - Incidents' H='Incidents' B='+New Incident'/>
        <DashContainer>
        <div  className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 p-4 ">
       
                
       {CardData.map( (Data,i)=> (
         
           
            <CommonCard key={i} {...Data} />
            
      ) )} 
    
    </div>
        </DashContainer>
        
    </div>
  )
}

export default Incident