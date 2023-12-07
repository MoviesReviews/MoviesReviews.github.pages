import * as requests from '../lib/requests' 

const baseUrl = 'http://localhost:3030/users'

export const register = async (email, password, username, category) => {
    try {
        const data = await requests.post(`${baseUrl}/register`, {
            email,
            password,
            username,
            category
        })
        return data
    } catch (err) {
        console.log(err)
    }
}

export const login = async (email, password) => {
    try {
        const data = await requests.post(`${baseUrl}/login`, {
            email,
            password
        })
        return data
    } catch (err) {
        console.log(err)
    }
}

export const logout = async () => {
    try {
        await requests.get(`${baseUrl}/logout`)
    } catch (err) {
        console.log(err)
    }
}