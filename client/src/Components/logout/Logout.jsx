import { useContext, useEffect } from "react";
import { logout } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

export function Logout() {
    const { logoutHandler } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        logout()
            .then(() => {
                logoutHandler()
                navigate('/')
            })
            .catch(err => console.log(err))
    }, [])
}