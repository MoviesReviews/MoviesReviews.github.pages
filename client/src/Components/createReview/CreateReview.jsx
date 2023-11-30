import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './CreateReview.module.css'
import { useState } from 'react';
import * as reviewService from '../../services/reviewsServices'
import { useNavigate } from 'react-router-dom'

function CreateReview() {
    const formInitialState = {
        title: '',
        description: '',
        category: '',
        imgUrl: '',
        horror: false,
        thriller: false,
        romance: false,
        fiction: false,
        fantasy: false,
        comedy: false,
        other: false,
    }
    const [formState, setFormState] = useState(formInitialState) //NO ZASHTO???
    const navigate = useNavigate()


    const changeHandler = (e) => {
        let value = e.target.value
        setFormState(state => (
            {
                ...state,
                [e.target.name]: value
            }
        ))
    }

    const checkboxChangeHandler = (e) => {
        let value = e.target.checked
        setFormState(state => (
            {
                ...state,
                [e.target.name]: value
            }
        ))
    }

    const onCreateHandler = (e) => {
        e.preventDefault()

        const category = Object.entries(formState).filter(r => r[1] == true).map(x => x[0])

        const data = {
            title: formState.title,
            description: formState.description,
            category,
            imgUrl: formState.imgUrl,
        }

        reviewService.createReview(data)
        navigate('/movie-reviews')
    }

    return (
        <section>
            <div className="content-container">
                <h1 className={styles.heading}>Write your own review</h1>

                <Form onSubmit={onCreateHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="title">Title: </Form.Label>
                        <Form.Control value={formState.title} onChange={changeHandler} name='title' id="title" placeholder="Write appropriate title.." />
                    </Form.Group>
                    <Form.Group className={`mb-3 ${styles['description-container']}`}>
                        <Form.Label htmlFor="description">Description: </Form.Label>
                        <textarea value={formState.description} onChange={changeHandler} name='description' id='description' placeholder='Describe your review..' />
                    </Form.Group>

                    <Form.Label htmlFor="imgUrl">Image: </Form.Label>
                    <Form.Group className={`mb-3 ${styles['description-container']}`}>
                        <input value={formState.imgUrl} onChange={changeHandler} name='imgUrl' id='imgUrl' placeholder='http://..' />
                    </Form.Group>

                    <Form.Group className={`mb-3 ${styles['checkbox-container']}`}>
                        <label>Category: </label>
                        <Form.Check
                            type="checkbox"
                            id="horror"
                            name="horror"
                            label="Horror"
                            onChange={checkboxChangeHandler}
                            checked={formState.horror}
                        />
                        <Form.Check
                            type="checkbox"
                            id="thriller"
                            name="thriller"
                            label="Thriller"
                            onChange={checkboxChangeHandler}
                            checked={formState.thriller}
                        />
                        <Form.Check
                            type="checkbox"
                            id="romance"
                            name="romance"
                            label="Romance"
                            onChange={checkboxChangeHandler}
                            checked={formState.romance}
                        />
                        <Form.Check
                            type="checkbox"
                            id="fiction"
                            name="fiction"
                            label="Fiction"
                            onChange={checkboxChangeHandler}
                            checked={formState.fiction}
                        />
                        <Form.Check
                            type="checkbox"
                            id="fantasy"
                            name="fantasy"
                            label="Fantasy"
                            onChange={checkboxChangeHandler}
                            checked={formState.fantasy}
                        />
                        <Form.Check
                            type="checkbox"
                            id="comedy"
                            name="comedy"
                            label="Comedy"
                            onChange={checkboxChangeHandler}
                            checked={formState.comedy}
                        />
                        <Form.Check
                            type="checkbox"
                            id="other"
                            name="other"
                            label="Other"
                            onChange={checkboxChangeHandler}
                            checked={formState.other}
                        />
                    </Form.Group>
                    <Button type="submit" className='button'>Submit</Button>
                </Form>
            </div>
        </section>
    )
}

export default CreateReview