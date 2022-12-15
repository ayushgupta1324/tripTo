import './App.css';
import AllRoutes from "./Components/AllRoutes"
import LandingPage from './Components/LandingPage/LandingPage';
// import Navbar from './Components/Navbar';
// import Top from "./Components/LandingPage/Top"


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <LandingPage/>
      {/* <Top/> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
