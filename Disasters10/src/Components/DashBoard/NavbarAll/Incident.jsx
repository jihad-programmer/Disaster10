import React from 'react'
import NavTitle from './NavTitle'
import { CardData } from '../../../lib/Db'
import CommonCard from '../../common/CommonCard'
import DashContainer from '../../common/DashContainer'
import { useNavigate } from "react-router-dom";
import FirstPage from '../../Incidents/FirstPage'
function Incident() {

  const navigate = useNavigate();
  const handle = () =>(
    navigate("Incidents/FirstPage")
  )
  return (
   
    <div>
        <NavTitle P='Home - Incidents' H='Incidents' B='+New Incident' NextClick={handle}/>
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