import { useContext, useEffect, useState } from "react"
import * as reviewsSwervice from '../../services/reviewsServices'
import { useParams } from "react-router-dom"
import styles from './ReviewDetails.module.css'
import Comments from "./comments/Comments"
import { AuthContext } from "../../contexts/authContext"
import { Link } from 'react-router-dom';
import DeleteModal from "./modal/DeleteModal"
import { LoadComponent } from "../loadComponent/LoadComponent"


function ReviewDetails() {
    const [review, setReview] = useState({})
    const { id } = useParams()
    const { _id } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        reviewsSwervice.getOne(id).then(data => {
            setReview(data)
            setIsLoading(false)
        })
    }, [id])
    const categoryFormatted = review.category?.map(c => c.charAt(0).toUpperCase() + c.slice(1))

    if (isLoading) {
        return <LoadComponent />
    }

    return (
        <section className='section-container'>
            <div className={`content-container ${styles['main-container']}`}>
                <div className="details-container-left">
                    <h1 className='heading'>Details about review: {review.title}</h1>
                    <label htmlFor="author">Wrote: {review.owner?.username}</label>
                    <p id="author">{ }</p>
                    <p className={styles.imgContainer}>
                        <img className={`img ${styles.img}`} src={review.img} alt="image" />
                    </p>
                    {review._ownerId == _id &&
                        <div className={styles['btn-container']}>
                            <Link to={`/movie-reviews/${id}/edit`}>
                                <button className={`button ${styles.editBtn}`}>Edit Review</button>
                            </Link>
                            <DeleteModal></DeleteModal>
                        </div>
                    }
                </div>

                <div className={styles['details-container-right']}>
                    <div className={styles['rating-container']}>
                        <div>
                            <h2 className={styles['rating-title']}>Rating</h2>
                        </div>
                        <div>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>⭐⭐⭐⭐</p>
                            <p>⭐⭐⭐</p>
                            <p>⭐⭐</p>
                            <p>⭐</p>
                        </div>

                    </div>
                    <label htmlFor="description">Description:</label>
                    <p id="description" className={styles.description}>{review.description}</p>
                    <div className="category">
                        <label htmlFor="category">Category:</label>
                        <p id="category">{categoryFormatted?.join(', ')}</p>
                    </div>
                    <Comments reviewId={id} />
                </div>
            </div>
        </section>
    )
}

export default ReviewDetails

