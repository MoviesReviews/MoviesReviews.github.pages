import { useNavigate } from "react-router-dom"
import { useForm } from "../../../hooks/useForm"
import { createComment, getCommentsByReview } from "../../../services/commentServices"
import { useContext, useEffect, useState } from "react"
import { CommentsCard } from "./commentsCard/CommentsCard"
import styles from './Comments.module.css'
import { AuthContext } from "../../../contexts/authContext"

export default function Comments({ reviewId }) {
    const [comments, setComments] = useState([])
    const authContext = useContext(AuthContext)

    useEffect(() => {
        getCommentsByReview(reviewId).then(setComments)
    }, [reviewId])

    const submitComment = async (values) => {
        const newComment = await createComment(values.comment, reviewId)
        newComment.owner = authContext.username
        //ruchno slagam pole owner zashtoto survura ne vrushta takova kato se suzdade komentar
        setComments(s => ([...s, newComment]))
    }

    const { formValues, onSubmit, onChange } = useForm(submitComment, {
        comment: ''
    })

    return (
        <div className={styles.comments}>
            <div className={styles['comments-container']}>
                <h2>Comments: </h2>
                {comments.map(c => <CommentsCard key={c._id} comment={c.comment} owner={c.owner} />)}
            </div>

            {authContext.isAuthenticated &&
                <>
                    <h3>Write a comment: </h3>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="comment"></label>
                        <input type="text" id="comment" name="comment" value={formValues.comment} onChange={onChange} />
                        <button className={`button ${styles.btn}`}>Post</button>
                    </form>
                </>
            }
        </div>
    )
}