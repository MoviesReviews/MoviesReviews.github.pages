import styles from '../profile/Profile.module.css';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { getInformation } from '../../services/userService';

function Profile() {
    const { _id } = useContext(AuthContext)
    const [user, setUser] = useState({})

    useEffect(() => {
        getInformation(_id).then(u => {
            console.log(u);
            setUser(u)
        })
    }, [])

    return (
        <section className='section-container'>
            <div className={`content-container ${styles.container}`}>
                <p className={styles.heading}>Profile Information</p>
                <div className={styles.userContainer}>

                    {user.img && <p> <img src={user.img} /></p>}
                    {!user.img && <p className={styles.profilepic}> <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' /></p>}
                    <p>Username :</p>
                    <p style={{'font-weight': '900'}}>{user.username}</p>
                </div>
            </div>
        </section>
    )
}
export default Profile