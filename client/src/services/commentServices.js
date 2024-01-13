import * as request from '../lib/requests'

const baseUrl = 'http://localhost:3030/data/comments'

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

// "comments": {
//     "0a272c58-b7ea-4e09-a000-7ec988248f66": {
//         "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
//         "comment": "Great review!",
//         "reviewId": "3987279d-0ad4-4afb-8ca9-5b256ae3b291",
//         "_createdOn": 1614260681375,
//         "_id": "0a272c58-b7ea-4e09-a000-7ec988248f66"
//     },
//     "0a272c58-b7ea-4e09-a000-7ec988248f67": {
//         "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
//         "comment": "Sounds interesting!",
//         "reviewId": "8f414b4f-ab39-4d36-bedb-2ad69da9c833",
//         "_createdOn": 1614260681385,
//         "_id": "0a272c58-b7ea-4e09-a000-7ec988248f76"
//     }
// },

// "8f414b4f-ab39-4d36-bedb-2ad69da9c833": {
//     "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
//     "title": "Openheimer",
//     "img": "https://images.unsplash.com/photo-1586796676789-f6fe8cc276f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8fDA%3D",
//     "description": "The movie tells the story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb. It is a great movie with fascinating actors.",
//     "category": [
//         "Drama",
//         "History"
//     ],
//     "_createdOn": 1613551344361
// }