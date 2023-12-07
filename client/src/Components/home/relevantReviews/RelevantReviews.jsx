import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"
import * as  reviewsService from "../../../services/reviewsServices"
import styles from './RelevantReviews.module.css'

function RelevantReviews() {
  const [latest, setLatest] = useState([])

  useEffect(() => {
    reviewsService.getLatest().then(d => setLatest(d[0]))
  }, [])


  return (
    <div className="best-class-club">
      <div className="row best-class-sections-detail">
        <div className='col-lg-6 best-class-club-desc'>
          <div className="row">
            <div className="col-lg-4"></div>
            <div className={`col-lg-8 detail-col-club ${styles['info-container']}`}>
              <h2 className="club-section-title">
                The newest review
              </h2>
              <Link to={`movie-reviews/${latest._id}/details`}>
                <p>Movie : {latest.title}</p>
              </Link>
              <p>
                {latest.description}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 best-class-club-img"></div>
      </div>
    </div>
  )
}

export default RelevantReviews