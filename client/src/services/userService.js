import * as requests from '../lib/requests'

const baseUrl = import.meta.env.VITE_API_URL + '/users'

export const register = async (email, password, username, category) => {

    const data = await requests.post(`${baseUrl}/register`, {
        email,
        password,
        username,
        category
    })
    return data
}

export const login = async (email, password) => {

    const data = await requests.post(`${baseUrl}/login`, {
        email,
        password
    })
    return data
}

export const logout = async () => {
    await requests.get(`${baseUrl}/logout`)
}