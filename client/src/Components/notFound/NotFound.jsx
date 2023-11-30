import styles from './NotFound.module.css' 
import { Link } from 'react-router-dom';

function NotFound(){
    return(
        <div className={styles.container}>
            <p className={styles.heading}>PAGE NOT FOUND 404</p>
            <label htmlFor="homeLink" >Back to <Link  to='/' id='homeLink' className={styles.link}>Home</Link></label>
        </div>
    )
}

export default NotFound