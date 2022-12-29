import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export const RequireAuth=({children})=>{
    const auth=useAuth()
    if(!auth.user && !auth.admin){
        return <Navigate to='/'/>
    }
    return children;
}