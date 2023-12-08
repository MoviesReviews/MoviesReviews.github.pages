import styles from'./Card.module.css' 
import { Link } from 'react-router-dom';

function Card({review}){
    const categoryNew = review.category

    return(
        <div className={styles['card-container']}>
            <p className={styles['img-container']}>
            <img className={`img' ${styles.img}`} src={review.img} alt="image" />
            </p>
            <p>Title: {review.title}</p>
            <p>Category: {categoryNew.join(', ')}</p>
            <Link  to={`/movie-reviews/${review._id}/details` } className={styles.btn}>Details</Link>
        </div>
    )
}

export default Card