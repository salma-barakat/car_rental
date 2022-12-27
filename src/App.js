
import './App.css';
import {Routes , Route} from "react-router-dom"; 
import Home from "./pages/Home"
import  ContactUs from "./pages/ContactUs"
import  SignUp from "./pages/SignUp"
import  LogIn from "./pages/LogIn"
import  CarInfo from "./pages/CarInfo"
import AdminPage from "./pages/AdminPage"
import Reports from "./pages/Reports"
import  LoginHome from "./pages/LoginHome"
import ReserveForm from "./pages/ReserveForm"
import AddCar from "./pages/AddCar" 
import AdminSearch from "./pages/AdminSearch"  
import EditCarHome from "./pages/EditCarHome" 
import EditCarInfo from "./pages/EditCarInfo" 

function App() {
  return (
    <div className="App">
    
     {/* <Home /> */}
     <Routes>
          <Route exact path="/" element={<Home/>}/>
          {/* <Route exact path="/home" element={<Home/>}/> */}
          <Route exact path="/ContactUs" element={<ContactUs/>}/>
          <Route exact path="/Log-In" element={<LogIn/>}/>
          <Route exact path="/Log-InAdmin" element={<LogIn/>}/>
          <Route exact path="/Sign-Up" element={<SignUp/>}/>
          <Route exact path="/car/:id" element={<CarInfo/>}/>
          <Route exact path="/admin" element={<AdminPage/>}/>
          <Route exact path="/admin/reports" element={<Reports/>}/>
          <Route exact path="/user/:Userid/car/:id" element={<CarInfo/>}/>
          <Route exact path="/admin/editcar/car/:id" element={<EditCarInfo/>}/>
          <Route exact path="/user/:Userid" element={<LoginHome />}/>
          <Route exact path="/admin/AddCar" element={<AddCar />}/>
          {/* <Route exact path="/reserve" element={<ReserveCarInfo />}/> */}
          <Route exact path="/user/:Userid/car/:id/reserve" element={<ReserveForm />}/>
          <Route exact path="/admin/search" element={<AdminSearch />}/>
          <Route exact path="/admin/editCar" element={<EditCarHome />}/>
        </Routes>
    </div>
  );
}

export default App;
