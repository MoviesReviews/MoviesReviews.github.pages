import styles from'./Card.module.css' 
import { Link } from 'react-router-dom';

function Card({review}){
    return(
        <div className={styles['card-container']}>
            <p className={styles['img-container']}>
            <img className='img' src={review.imgUrl} alt="image" />
            </p>
            <p>Title: {review.title}</p>
            <Link to={`/movie-reviews/${review._id}/details`}>
            <button>Details</button>
            </Link>
        </div>
    )
}

export default Card