
import './App.css';
import {Routes , Route} from "react-router-dom"; 
import Home from "./pages/Home"
import  ContactUs from "./pages/ContactUs"
import  Help from "./pages/Help"
import  SignUp from "./pages/SignUp"
import  LogIn from "./pages/LogIn"
import  CarInfo from "./pages/CarInfo"
import  LoginHome from "./pages/LoginHome"
import  ReserveCarInfo from "./pages/ReserveCarInfo"

function App() {
  return (
    <div className="App">
    
     {/* <Home /> */}
     <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/ContactUs" element={<ContactUs/>}/>
          <Route exact path="/Help" element={<Help/>}/>
          <Route exact path="/Log-In" element={<LogIn/>}/>
          <Route exact path="/Log-InAdmin" element={<LogIn/>}/>
          <Route exact path="/Sign-Up" element={<SignUp/>}/>
          <Route exact path="/car/:id" element={<CarInfo/>}/>
          <Route exact path="/user/:Userid/car/:id" element={<CarInfo/>}/>
          <Route exact path="/user/:Userid" element={<LoginHome />}/>
          <Route exact path="/reserve" element={<ReserveCarInfo />}/>
        </Routes>
    </div>
  );
}

export default App;
