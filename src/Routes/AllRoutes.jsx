// import Navbar from './Navbar';
// import Top from './LandingPage/Top';
import {Routes,Route} from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import LandingPage from '../Components/LandingPage/LandingPage';
import PackagePage from "../Components/PackagePage";
import PaymentPage from "../Components/PaymentPage";
import PrivateRoute from "./PrivateRoute";

function AllRoutes()
{
return(
        <Routes>
            {/* <Route path="/Navbar" element={<Navbar/>}/>
            <Route path="/Top" element={<Top/>}/> */}
            <Route path = "/" element = {<LandingPage/>}/>
            <Route path="/Login" element={<Login/>} />
            <Route path="Signup" element={<Signup/>}/>

            <Route path="/PackagePage/:id" element={ <PrivateRoute><PackagePage/></PrivateRoute> }/>
            <Route path="/PaymentPage" element={<PrivateRoute><PaymentPage/></PrivateRoute>}/>
        </Routes>
)
}

export default AllRoutes;