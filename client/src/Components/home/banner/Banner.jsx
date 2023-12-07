import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/authContext';
import styles from './Banner.module.css'

function Banner() {
  const authContext = useContext(AuthContext)

  return (
    <div className="banner">
      <div className="banner-overlay" />
      <div className="inside-container banner-content">
        <div className="row">
          <div className="col-12 content-col">
            {authContext.isAuthenticated &&
              <div className={styles['welcome-container']}>
                <h1 className={styles.welcomeMsg}>Welcome, </h1>
                <p className={styles.username}>{authContext.username}</p>
              </div>
            }
            <h1 className="site-title">
              Read some great movie reviews and comment on each one!
            </h1>
            <p className="site-title-desc">
              Great place for making friends anf having fun while commenting movies you love.
            </p>
            {!authContext.isAuthenticated &&
              <Link to='/register' className='banner-btn'>Join us now</Link>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner