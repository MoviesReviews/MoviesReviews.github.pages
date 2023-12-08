import { deleteComment } from '../../../../services/commentServices'
import styles from './CommentsCard.module.css'

export function CommentsCard({comment, owner, commentId, commentDeleted}){

    const deleteHandler = async () => {
        await deleteComment(commentId)
        commentDeleted(commentId)
    }
    return(
        <div className={styles['comment-container']}>
            <p>{typeof owner == 'string' ? owner : owner.username}: {comment}</p>
            <button onClick={deleteHandler} className={styles.deleteBtn}>Delete</button>
        </div>
    )
}