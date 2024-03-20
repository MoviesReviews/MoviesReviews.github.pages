import * as request from '../lib/requests'

const baseUrl = import.meta.env.VITE_API_URL + '/jsonstore/ratings'

export const rateMovie = async (reviewId, numberStars, userId) => {
    const result = await request.post(`${baseUrl}/${reviewId}`, {
        starRating : numberStars,
        ratingOwnerId : userId
    })
    return Object.values(result)
    // const previousRatings = await getRatingByReview(reviewId)
    // let votes 
    // let result
    // console.log(previousRatings);

    // if(previousRatings[0]){
    //     if(previousRatings[0][numberStars]){
    //         const query = new URLSearchParams({
    //             where: `reviewId="${reviewId}"`,
    //         })

    //         votes = {...previousRatings[0], [numberStars] : previousRatings[0][numberStars] + 1}
    //         result = await request.put(`${baseUrl}?${query}`, {
    //             votes
    //         })
    //     }
    //     console.log(result);
    // } else{
    //     votes = {
    //         'fiveStars' : 0,
    //         'fourStars' : 0,
    //         'threeStars' : 0,
    //         'twoStars' : 0,
    //         'oneStar' : 0
    //     }
    //     Object.entries(votes).map(([stars, votes]) => stars == numberStars ? votes + 1 : [stars,votes])
    //     result = await request.post(baseUrl, {
    //         reviewId,
    //         votes
    //     })
    // }
    
    // return result
}


export const getRatingByReview = async (reviewId) => {
    const result = await request.get(`${baseUrl}/${reviewId}`)
    return Object.values(result)
    // const query = new URLSearchParams({
    //     where: `reviewId="${reviewId}"`,
    // })

    // const result = await request.get(`${baseUrl}?${query}`)
    // return Object.values(result)
}