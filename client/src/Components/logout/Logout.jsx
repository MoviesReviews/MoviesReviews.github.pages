import { useEffect } from "react";
import { logout } from "../../services/userService";

export function Logout({logoutHandler}){
    useEffect(() => {
        logout().then(logoutHandler()).catch(err => console.log(err))
    }, [])
}