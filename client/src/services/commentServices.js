import * as request from '../lib/requests'

const baseUrl = 'http://localhost:3030/data/comments'

export const createComment = async (comment, reviewId) => {
    try {
        const result = await request.post(baseUrl, {
            comment,
            reviewId
        })
        return result
    } catch (err) {
        console.log(err.message)
    }
}


export const getCommentsByReview = async(reviewId) => { 
    try {
        const query = new URLSearchParams({
            where: `reviewId="${reviewId}"`,
            load: `owner=_ownerId:users`
            //suzai mi pole owner v koeto vurni infoto za tozi user, koito go e suzdal 
        })
    
        const result = await request.get(`${baseUrl}?${query}`)
        return result
    } catch (error) {
        console.log(error)
    }
}