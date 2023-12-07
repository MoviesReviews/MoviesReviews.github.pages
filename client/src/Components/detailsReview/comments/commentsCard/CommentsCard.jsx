import styles from './CommentsCard.module.css'

export function CommentsCard({comment, owner}){
    
    return(
        <div className={styles['comment-container']}>
            <p>{typeof owner == 'string' ? owner : owner.username}: {comment}</p>
        </div>
    )
}