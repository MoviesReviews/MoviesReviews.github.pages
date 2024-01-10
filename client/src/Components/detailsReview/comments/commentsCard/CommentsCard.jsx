import { useContext } from 'react'
import { deleteComment } from '../../../../services/commentServices'
import styles from './CommentsCard.module.css'
import { AuthContext } from '../../../../contexts/authContext'

export function CommentsCard({comment, owner, commentId, commentDeleted}){
    const {username} = useContext(AuthContext)

    const deleteHandler = async () => {
        await deleteComment(commentId)
        commentDeleted(commentId)
    }
    const isOwner = () => {
        if(typeof owner == 'string'){
            return owner == username
        } else{
            return owner.username == username
        }
    }
    return(
        <div className={styles['comment-container']}>
            <p>{typeof owner == 'string' ? owner : owner.username}: {comment}</p>
            {isOwner() && <button onClick={deleteHandler} className={styles.deleteBtn}>Delete</button>}
        </div>
    )
}