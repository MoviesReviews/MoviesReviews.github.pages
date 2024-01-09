import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Navigate, Outlet, useParams } from "react-router-dom";

export default function IsAuthorizedGuard(){
    const {_id, isAuthenticated} = useContext(AuthContext)
    const {id} = useParams()

    if(!isAuthenticated || _id !== id){
        return <Navigate to='login'/>
    }

    return <Outlet />
}