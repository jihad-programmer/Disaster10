import './App.css'
import DashBoard from './Components/DashBoard/NavbarAll/DashBoard'
import Incident from './Components/DashBoard/NavbarAll/Incident'
import Locations from './Components/DashBoard/NavbarAll/Locations'
import Nav from './Components/DashBoard/NavbarAll/Nav'
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
 

  return (
    <>
<BrowserRouter>
     <Routes>
 
     <Route path='' element={ <Nav/>}>
         <Route path='/' element={ <DashBoard/> }/>
          <Route path='/DashBoard' element={ <DashBoard/> }/>
         <Route path='/Incident' element={ <Incident/> }/>
         <Route path='/Locations' element={ <Locations/> }/>
      
          </Route>  
     </Routes>
 
   </BrowserRouter>


        
      </>
  )
}

export default App
