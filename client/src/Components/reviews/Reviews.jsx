import { useEffect, useState } from "react"
import * as reviewService from '../../services/reviewsServices'
import styles from './Reviews.module.css'
import Card from "./card/Card"

function Reviews() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        reviewService.getAll().then(setReviews)
    }, [])

    console.log(reviews)

    return (
        <div className="background">
            <section className={styles.section}>
                <div className={styles["content-container"]}>
                    <h1 className='heading'>All Reviews</h1>
                    <div className={styles['cards-container']}>
                        {reviews.map(r => {
                            return <Card key={r._id} review={r} />
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Reviews