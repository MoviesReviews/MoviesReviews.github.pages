import styles from './ReviewCard.module.css'

export function ReviewCard(review){
    return (
        <div className={styles.card}>
            <p>Title: {review.title}</p>
            <p>IMAGE: !!!</p>
            <p>Description: {review.description}</p>
        </div>
    )
}