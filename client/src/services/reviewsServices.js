import * as request from '../lib/requests'
const baseUrl = 'http://localhost:3030/jsonstore/reviews'

export const getAll = async () => {
    const result = await request.get(baseUrl)
    return Object.values(result)
}

export const createReview = async (data) => {
    return await request.post(baseUrl, data)
}