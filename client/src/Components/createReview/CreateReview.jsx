import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './CreateReview.module.css'
import { useState } from 'react';
import * as reviewService from '../../services/reviewsServices'
import {useNavigate} from 'react-router-dom'

function CreateReview() {
    const formInitialState = {
        title: '',
        description: ''
    }
    const [formState, setFormState] = useState(formInitialState) //NO ZASHTO???
    const navigate = useNavigate()

    
    const changeHandler = (e) => {
        let value = e.target.value
        setFormState(state => (
            {
                ...state, 
                [e.target.name] : value
            }
        ))
    }

    const onCreateHandler = (e) => {
        e.preventDefault()

        const body = {
            title : formState.title,
            description : formState.description
        }
        reviewService.createReview(body)
        navigate('/movie-reviews')
    }

    return (
        <section>
            <div className="content-container">
                <h1 className={styles.heading}>Write your own review</h1>

                <Form onSubmit={onCreateHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="title">Title: </Form.Label>
                        <Form.Control value={ formState.title } onChange={ changeHandler } name='title' id="title" placeholder="Write appropriate title.." />
                    </Form.Group>
                    <Form.Group className={`mb-3 ${styles['description-container']}`}>
                        <Form.Label htmlFor="description">Description: </Form.Label>
                        <textarea value={ formState.description } onChange={ changeHandler } name='description' id='description' placeholder='Describe your review..'></textarea>
                    </Form.Group>

                    {/* <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                id="disabledFieldsetCheck"
                                label="Can't check this"
                            />
                        </Form.Group> */}
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        </section>
    )
}

export default CreateReview