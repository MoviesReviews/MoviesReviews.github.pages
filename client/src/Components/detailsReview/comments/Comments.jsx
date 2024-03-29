import { Link, useNavigate } from "react-router-dom"
import { useForm } from "../../../hooks/useForm"
import { createComment, getCommentsByReview } from "../../../services/commentServices"
import { useContext, useEffect, useState } from "react"
import { CommentsCard } from "./commentsCard/CommentsCard"
import styles from './Comments.module.css'
import { AuthContext } from "../../../contexts/authContext"

export default function Comments({ reviewId }) {
    const [comments, setComments] = useState([])
    const authContext = useContext(AuthContext)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        getCommentsByReview(reviewId).then(setComments)
    }, [reviewId])

    const submitComment = async (values) => {
        try {
            if (values.comment == '') {
                setErrors(errors => ({ ...errors, emptyComment: true }))
                return
            } else {
                setErrors(errors => ({ ...errors, emptyComment: false }))
            }
            const newComment = await createComment(values.comment, reviewId)
            newComment.owner = authContext.username
            setComments(s => ([...s, newComment]))
        } catch (err) {
            setErrors(s => ({ ...s, serverError: err.message }))
        }
    }

    const { formValues, onSubmit, onChange } = useForm(submitComment, {
        comment: ''
    })

    const commentDeleted = (commentId) => {
        setComments(s => s.filter(c => c._id !== commentId))
    }

    return (
        <div className={styles.comments}>
            <div className={styles['comments-container']}>
                <h2>Comments: </h2>
                {comments.map(c => <CommentsCard key={c._id} comment={c.comment} owner={c.owner} commentId={c._id} commentDeleted={commentDeleted} />)}
                {comments.length == 0 && <p>No comments yet. Be the first one </p>}
                {!authContext.isAuthenticated && <p className={styles.authenticate}>If you want to write down a comment, please: <Link to='/login' className={styles.login}>Login</Link></p>}
            </div>

            {authContext.isAuthenticated &&
                <>
                    <form onSubmit={onSubmit} className={styles['write-container']}>
                        <h3>Write a comment: </h3>
                        <label htmlFor="comment"></label>
                        <input type="text" id="comment" name="comment" value={formValues.comment} onChange={onChange} className={errors.emptyComment == true && 'errorInput'} />
                        {errors.serverError && <p className="errorMsg">{errors.serverError}</p>}
                        <button className={`button ${styles.btn}`}>Post</button>
                    </form>
                </>
            }
        </div>
    )
}