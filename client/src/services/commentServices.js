import * as request from '../lib/requests'

const baseUrl = import.meta.env.VITE_API_URL + '/data/comments'

export const createComment = async (comment, reviewId) => {

    const result = await request.post(baseUrl, {
        comment,
        reviewId
    })
    return result
}


export const getCommentsByReview = async (reviewId) => {
    const query = new URLSearchParams({
        where: `reviewId="${reviewId}"`,
        load: `owner=_ownerId:users`
    })

    const result = await request.get(`${baseUrl}?${query}`)
    return result
}

export const deleteComment = async (commentId) => {
    return await request.del(`${baseUrl}/${commentId}`)
}