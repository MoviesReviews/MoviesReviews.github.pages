import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import styles from './CreatedAlert.module.css'

function CreatedAlert() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success" className={styles.alert}>
        <Alert.Heading>Review Created! </Alert.Heading>
        <p>
          You successfully created a review! Check it on Reviews page.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default CreatedAlert;