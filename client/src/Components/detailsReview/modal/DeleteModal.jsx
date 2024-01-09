import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import * as reviewsSwervice from '../../../services/reviewsServices'

function DeleteModal() {
    const navigate = useNavigate()
    const { id } = useParams()

    // const deleteHandler = async () => {
    //     await reviewsSwervice.deleteReview(id)
    //     navigate('/movie-reviews')
    // }

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Review</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure you want to delete this?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    {/* <Button onClick={deleteHandler} variant="primary">Delete</Button> */}
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default DeleteModal;