async function request(method, url, body){
    let options = {method}

    if(body){
        options = {
            method,
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(body)
        }
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