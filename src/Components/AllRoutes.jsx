import Navbar from './Navbar';
import Top from './LandingPage/Top';
import {Routes,Route} from "react-router-dom"


function AllRoutes()
{
return(
        <Routes>
            <Route path="/Navbar" element={<Navbar/>}/>
            <Route path="/Top" element={<Top/>}/>
        </Routes>
)
}

export default AllRoutes;