import { useEffect, useState } from "react"
import * as reviewService from '../../services/reviewsServices'

function Reviews() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        reviewService.getAll().then(setReviews)
    }, [])

    console.log(reviews)
    
    return (
        <section>
            <div className="content-container">
                <h1>All Reviews</h1>

            </div>
        </section>
    )
}

export default Reviews