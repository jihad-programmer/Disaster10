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


         
     </Routes>
 
   </BrowserRouter>

   


        
      </>
  )
}

export default App
