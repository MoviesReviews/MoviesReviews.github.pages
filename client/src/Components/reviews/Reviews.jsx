import { useEffect, useState } from "react"
import * as reviewService from '../../services/reviewsServices'
import styles from './Reviews.module.css'

function Reviews() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        reviewService.getAll().then(setReviews)
    }, [])

    console.log(reviews)

    return (
        <section className={styles.container}>
            <div className="content-container">
                <h1>All Reviews</h1>
                {reviews.map(r => (
                    <div key={r._id} >
                        <p>Title: {r.title}</p>
                        <p>IMAGE: !!!</p>
                        <p>Description: {r.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Reviews