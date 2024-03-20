import { useContext, useEffect, useState } from 'react'
import styles from './RatingComponent.module.css'
import { AuthContext } from '../../../contexts/authContext'
import { rateMovie, getRatingByReview } from '../../../services/rateServices'
import { useParams } from 'react-router-dom'

export default function RatingComponent({ ownerId }) {
    const { isAuthenticated, _id } = useContext(AuthContext)
    const [ratings, setRatings] = useState([])
    const [canVote, setCanVote] = useState(true)
    const { id } = useParams()
    let hasVoted = ratings.map(a => a.ratingOwnerId).includes(_id)

    useEffect(() => {
        getRatingByReview(id).then((data) => {
            setRatings(data)
            console.log(_id)
            console.log(data)
            console.log(!data.map(a => a.ratingOwnerId).includes(_id))
        })
    }, [id])

    const rateFiveStars = () => {
        rateMovie(id, 'fiveStars', _id)
        setRatings(data => ([...data, ({ reviewId: id, starRating: 'fiveStars', ratingOwnerId : _id })]))
        setCanVote(false)
    }

    const rateFourStars = () => {
        rateMovie(id, 'fourStars', _id)
        setRatings(data => ([...data, ({ reviewId: id, starRating: 'fourStars', ratingOwnerId : _id })]))
        setCanVote(false)
    }

    const rateThreeStars = () => {
        rateMovie(id, 'threeStars', _id)
        setRatings(data => ([...data, ({ reviewId: id, starRating: 'threeStars', ratingOwnerId : _id })]))
        setCanVote(false)
    }

    const rateTwoStars = () => {
        rateMovie(id, 'twoStars', _id)
        setRatings(data => ([...data, ({ reviewId: id, starRating: 'twoStars', ratingOwnerId : _id })]))
        setCanVote(false)
    }
    const rateOneStar = () => {
        rateMovie(id, 'oneStar',  _id)
        setRatings(data => ([...data, ({ reviewId: id, starRating: 'fiveStars', ratingOwnerId : _id })]))
        setCanVote(false)
    }

    return < div className={styles['rating-container']} >
        <div>
            <h2 className={styles['rating-title']}>Movie Rating</h2>
        </div>

        {isAuthenticated && canVote && ownerId !== _id && !hasVoted &&
            <div className={styles['rating-btns-container']}>
                <button className={styles['rating-btn']} onClick={rateFiveStars}>Rate</button>
                <button className={styles['rating-btn']} onClick={rateFourStars}>Rate</button>
                <button className={styles['rating-btn']} onClick={rateThreeStars}>Rate</button>
                <button className={styles['rating-btn']} onClick={rateTwoStars}>Rate</button>
                <button className={styles['rating-btn']} onClick={rateOneStar}>Rate</button>
            </div>
        }

        <div >
            <p>⭐⭐⭐⭐⭐</p>
            <p>⭐⭐⭐⭐</p>
            <p>⭐⭐⭐</p>
            <p>⭐⭐</p>
            <p>⭐</p>
        </div>
        <div className={styles.votes}>
            <p>{ratings.filter(r => r.starRating == 'fiveStars').length}  votes</p>
            <p>{ratings.filter(r => r.starRating == 'fourStars').length}  votes</p>
            <p>{ratings.filter(r => r.starRating == 'threeStars').length}  votes</p>
            <p>{ratings.filter(r => r.starRating == 'twoStars').length}  votes</p>
            <p>{ratings.filter(r => r.starRating == 'oneStar').length}  votes</p>
        </div>
        {hasVoted && <p style={{ "margin": '3em' }}>You already voted!</p>}
        
    </div >
}