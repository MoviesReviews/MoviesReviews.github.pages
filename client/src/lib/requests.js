async function request(method, url, body){
    let options = {method, headers: {}}
    const token = localStorage.getItem('token')

    if(body){
        options.headers['content-type'] = 'application/json'
        options.body = JSON.stringify(body)
    }

    if(token){
        options.headers['X-Authorization'] = token
    }

    try {
        const response = await fetch(url, options)
        if(!response.ok){
            throw new Error(response.error)
        }
        if(response.status == 204){
            return []
        }
        return await response.json()
    } catch (error) {
        console.log(error.message)
    }
}

export const get = request.bind(null, 'GET')
export const post = request.bind(null, 'POST')
export const put = request.bind(null, 'PUT')
export const del = request.bind(null, 'DELETE')