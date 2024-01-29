async function request(method, url, body) {
    let options = { method, headers: {} }
    const token = localStorage.getItem('token')

    if (body) {
        options.headers['content-type'] = 'application/json'
        options.body = JSON.stringify(body)
    }

    if (token) {
        options.headers['X-Authorization'] = token
    }

    const response = await fetch(url, options)

    if (response.status == 204) {
        return []
    }

    const result = await response.json()

    if (response.status == 403) {
        return localStorage.removeItem('token')
    }

    if (response.ok == false) {
        throw new Error(result.message)
    }

    return result
}

export const get = request.bind(null, 'GET')
export const post = request.bind(null, 'POST')
export const put = request.bind(null, 'PUT')
export const del = request.bind(null, 'DELETE')