import { useContext, useEffect, useState } from "react"
import * as reviewService from '../../services/reviewsServices'
import styles from './Reviews.module.css'
import Card from "./card/Card"
import CreatedAlert from "./createdReviewAlert/CreatedAlert"
import { CreatedAlertContext } from "../../contexts/alertContext"
import { LoadComponent } from "../loadComponent/LoadComponent"

function Reviews() {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { createdReview } = useContext(CreatedAlertContext)
    const [showCreatedAlert, setShowCreatedAlert] = useState(createdReview)

    useEffect(() => {
        setIsLoading(true)
        reviewService.getAll().then((data) => {
            setReviews(data)
            setIsLoading(false)
        })
    }, [])

    if(isLoading){
        return <LoadComponent/>
    }

    return (
        <div className={styles.background}>
            {showCreatedAlert && <CreatedAlert />}

            <section className={styles.section}>
                <div className={styles["content-container"]}>
                    <h1 className={`heading ${styles.heading}`}>All Reviews</h1>
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