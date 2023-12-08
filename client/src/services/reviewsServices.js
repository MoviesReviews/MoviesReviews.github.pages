import * as request from '../lib/requests'
const baseUrl = 'http://localhost:3030/data/reviews'

export const getAll = async () => {

    const result = await request.get(baseUrl)
    return result
}

export const getOne = async (id) => {
    const query = new URLSearchParams({
        load: `owner=_ownerId:users`
        //suzai mi pole owner v koeto vurni infoto za tozi user, koito go e suzdal 
    })

    const result = await request.get(`${baseUrl}/${id}?${query}`)
    return result

}

export const createReview = async (data) => {
    return await request.post(baseUrl, data)
}

export const getLatest = async () => {
    const data = await request.get(`${baseUrl}?sortBy=_createdOn%20desc`)
    return data
}