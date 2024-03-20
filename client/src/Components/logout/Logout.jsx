import { useContext, useEffect, useState } from "react";
import { logout } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { LoadComponent } from "../loadComponent/LoadComponent";

export function Logout() {
    const { logoutHandler } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoading(true)
        logout()
            .then(() => {
                setIsLoading(true)
                logoutHandler()
                navigate('/')
            })
            .catch(err => console.log(err))
    }, []) 
    
    if(isLoading){
        return <LoadComponent/>
    }
}