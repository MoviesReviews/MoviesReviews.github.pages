import * as request from '../lib/requests'
const baseUrl = 'http://localhost:3030/data/reviews'

export const getAll = async () => {
    const result = await request.get(baseUrl)
    return result
}

export const getOne = async (id) => {
    const result = await request.get(baseUrl + `/${id}`)
    return result
}

export const createReview = async (data) => {
    return await request.post(baseUrl, data)
}