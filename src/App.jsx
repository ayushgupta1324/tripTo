import logo from './logo.svg';
import './App.css';
import AllRoutes from "./Components/AllRoutes"
import tripTo from  "./TripTo.png"
import Navbar from './Components/Navbar';
import Top from "./Components/Top"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Top/>
      <AllRoutes/>
      <img src={tripTo} alt="logo"/>
    </div>
  );
}

export default App;
