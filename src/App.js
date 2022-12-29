
import './App.css';
import * as React from 'react';
import {Routes , Route,Navigate} from "react-router-dom"; 
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
import { AuthProvider } from './components/auth';
import { RequireAuth } from './components/RequireAuth';
const ProtectedRoute = ({ user, redirectPath = '/landing' }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  // return <Outlet />;
};
function App() {
  // const [user,setUser]=React.useState(false);

  return (
    <AuthProvider>
    <div className="App">
    
     <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/ContactUs" element={<ContactUs/>}/>
          <Route private exact path="user/:Userid/ContactUs" element={<ContactUs/>}/>
          <Route exact path="/Log-In" element={<LogIn/>}/>
          <Route exact path="/Sign-Up" element={<SignUp/>}/>
          <Route exact path="/car/:id" element={<CarInfo/>}/>
          <Route exact path="/admin" element={ <RequireAuth><AdminPage/> </RequireAuth>}/>
          <Route exact path="/admin/reports" element={<RequireAuth><Reports/></RequireAuth>}/>
          <Route exact path="/user/:Userid/car/:id" element={<RequireAuth><CarInfo/></RequireAuth>}/>
          <Route exact path="/admin/editcar/car/:id" element={<RequireAuth><EditCarInfo/></RequireAuth>}/>
          <Route private exact path="/user/:Userid" element={<RequireAuth>< LoginHome /></RequireAuth>}/>
          <Route exact path="/admin/AddCar" element={<RequireAuth><AddCar /></RequireAuth>}/>
          <Route exact path="/user/:Userid/car/:id/reserve" element={<RequireAuth><ReserveForm /></RequireAuth>}/>
          <Route exact path="/admin/search" element={<RequireAuth><AdminSearch /></RequireAuth>}/>
          <Route exact path="/admin/editCar" element={<RequireAuth><EditCarHome /></RequireAuth>}/>
        </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
