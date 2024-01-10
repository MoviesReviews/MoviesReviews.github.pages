import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import * as reviewsSwervice from '../../../services/reviewsServices'
import styles from '../ReviewDetails.module.css'


function DeleteModal() {
  const [show, setShow] = useState(false);
  const{id} = useParams()
  const navigate = useNavigate()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteHandler = async () => {
    await reviewsSwervice.deleteReview(id)
    navigate('/movie-reviews')
}

  return (
    <>
      <Button variant="primary" onClick={handleShow} className={styles.deleteBtn}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton >
          <Modal.Title>Delete review</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this review?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteHandler} className={styles.alert}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;