import styles from "./LoadComponent.module.css"
import Spinner from 'react-bootstrap/Spinner';

export function LoadComponent() {
    return <div className={styles.container}>
        <h1 className={styles.title}>Loading...</h1>
        <Spinner animation="grow" className={styles.spinner}/>;
    </div>
}