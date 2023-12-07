import * as request from '../lib/requests'
const baseUrl = 'http://localhost:3030/data/reviews'

export const getAll = async () => {
    try {
        const result = await request.get(baseUrl)
        return result
        
    } catch (err) {
        console.log(err)
    }
}

export const getOne = async (id) => {
    const query = new URLSearchParams({
        load: `owner=_ownerId:users`
        //suzai mi pole owner v koeto vurni infoto za tozi user, koito go e suzdal 
    })
    try {
        const result = await request.get(`${baseUrl}/${id}?${query}`)
        return result
        
    } catch (err) {
        console.log(err);
    }
}

export const createReview = async (data) => {
    try {
        return await request.post(baseUrl, data)
        
    } catch (err) {
        console.log(err);
    }
}