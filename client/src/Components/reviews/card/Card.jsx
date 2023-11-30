import * as styles from'./Card.module.css' 

function Card({review}){
    return(
        <div className={styles['card-container']}>
            <p className={styles['img-container']}>
            <img className='img' src={review.imgUrl} alt="image" />
            </p>
            <p>{review.title}</p>
            <p>{review.description}</p>
        </div>
    )
}

export default Card