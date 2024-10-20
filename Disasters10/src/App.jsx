import './App.css'
import DashBoard from './Components/DashBoard/NavbarAll/DashBoard'
import Incident from './Components/DashBoard/NavbarAll/Incident'

import Nav from './Components/DashBoard/NavbarAll/Nav'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FirstPage from './Components/Incidents/FirstPage'
import SecondPage from './Components/Incidents/SecondPage'
import ThirdPage from './Components/Incidents/ThirdPage'
import LastPage from './Components/Incidents/LastPage'
import Locations from './Components/Locations/Locations'
import Activities from './Components/DashBoard/NavbarAll/Activities'
import Documents from './Components/DashBoard/NavbarAll/Documents'
import CypherAI from './Components/DashBoard/NavbarAll/CypherAI'
function App() {
 

  return (
    <>
<BrowserRouter>
    <Nav/>
     <Routes>

         <Route path='/' element={ <DashBoard/> }/>
          <Route path='/DashBoard' element={ <DashBoard/> }/>
         <Route path='/Incident' element={ <Incident/>} />
        
         <Route path='/FirstPage' element={ <FirstPage/> }/>
          
         <Route path='/SecondPage' element={ <SecondPage/> }/>
       
         <Route path='/ThirdPage' element={ <ThirdPage/> }/>

         <Route path='/LastPage' element={ <LastPage/> }/>

         <Route path='/Locations' element={ <Locations/> }/>

         <Route path='/Activities' element={ <Activities/> }/>
         
         <Route path='/Documents' element={ <Documents/> }/>

         <Route path='/CypherAI' element={ <CypherAI/> }/>
     </Routes>

     
 
   </BrowserRouter>

   


        
      </>
  )
}

export default App
