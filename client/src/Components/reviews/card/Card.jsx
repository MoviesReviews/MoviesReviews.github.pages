function Card({review}){
    return(
        <div>
            <img src={review.imgUrl} alt="image" />
            <p>{review.title}</p>
            <p>{review.description}</p>
        </div>
    )
}

export default Card