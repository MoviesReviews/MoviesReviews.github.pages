import { useEffect, useState } from "react"
import * as reviewsSwervice from '../../services/reviewsServices'
import { useParams } from "react-router-dom"

function ReviewDetails() {
    const [review, setReview] = useState({})
    const {id} = useParams()
    useEffect(() => {
        reviewsSwervice.getOne(id).then(data => {
            setReview(data)
        })
    }, [id])
    console.log(review)
    // const categoryFormatted = review.category.join(', ')

    return (
        <section>
            <div className="content-container">
                <h1 className='heading'>Details</h1>
                <div className="details">
                    <p>Title: {review.title}</p>
                    <p>
                        <img src={review.imgUrl} alt="image" />
                    </p>
                    <p>Description: {review.description}</p>
                    {/* <p>Category: {categoryFormatted}</p> */}
                </div>
            </div>
        </section>
    )
}

export default ReviewDetails