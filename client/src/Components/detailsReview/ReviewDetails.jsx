import { useEffect, useState } from "react"
import * as reviewsSwervice from '../../services/reviewsServices'
import { useParams } from "react-router-dom"
import styles from './ReviewDetails.module.css'
import Comments from "./comments/Comments"

function ReviewDetails() {
    const [review, setReview] = useState({})
    const { id } = useParams()
    useEffect(() => {
        reviewsSwervice.getOne(id).then(data => {
            setReview(data)
        })
    }, [id])
    const categoryFormatted = review.category

    return (
        <section className='section-container'>
            <div className={`content-container ${styles['main-container']}`}>
                <div className="details-container-left">
                    <h1 className='heading'>Details about review: {review.title}</h1>
                    <label htmlFor="author">Wrote: {review.owner?.username}</label>
                    <p id="author">{ }</p>
                    <p>
                        <img className={`img ${styles.img}`} src={review.imgUrl} alt="image" />
                    </p>
                </div>

                <div className={styles['details-container-right']}>
                    <label htmlFor="description">Description:</label>
                    <p id="description" className={styles.description}>{review.description}</p>
                    <div className="category">
                        <label htmlFor="category">Category:</label>
                        <p id="category">{categoryFormatted?.join(', ')}</p>
                    </div>
                </div>

                {/* <Comments/> */}
            </div>
        </section>
    )
}

export default ReviewDetails