import { createContext, useState } from "react"
import * as userService from '../services/userService'
import { useNavigate } from "react-router-dom"
import usePersistedState from "../hooks/usePersistedState"

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [authState, setAuthState] = usePersistedState('auth', {})
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const registerHandler = async (registerState) => {
        const category = Object.entries(registerState).filter(x => x[1] == true).map(x => x[0]).join(', ')
        try {
            const data = await userService.register(registerState.email, registerState.password, registerState.username, category)
            setAuthState(data)
            localStorage.setItem('token', data.accessToken)
            navigate('/')

        } catch (error) {
            setErrors({serverError: error.message})
        }

    }

    const loginHandler = async (loginState) => {
        try {
            const data = await userService.login(loginState.email, loginState.password)
            setAuthState(data)
            localStorage.setItem('token', data.accessToken)
            navigate('/')
        } catch (error) {
           setErrors({serverError: error.message})
        }
    }

    const logoutHandler = async () => {
        setAuthState({})
        localStorage.removeItem('token')
    }

    const authContext = {
        registerHandler,
        loginHandler,
        logoutHandler,
        email: authState.email,
        username: authState.username,
        token: authState.accessToken,
        _id: authState._id,
        isAuthenticated: !!authState.email,
        errors
    }
    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    )
} 