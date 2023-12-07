import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './CreateReview.module.css'
import { useEffect, useRef, useState } from 'react';
import * as reviewService from '../../services/reviewsServices'
import { useNavigate } from 'react-router-dom'
// import CreatedAlert from '../createReview/CreatedAlert';

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
    const [formState, setFormState] = useState(formInitialState) 
    const [errors, setErrors] = useState({})
    const titleRef = useRef()
    const submitBtn = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        titleRef.current.focus()
    }, [])


    const changeHandler = (e) => {
        let value = e.target.value
        setFormState(state => (
            {
                ...state,
                [e.target.name]: value,
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
        // <CreatedAlert />
        navigate('/movie-reviews')
    }

    const titleValidateHandler = (e) => {
        if (e.target.value.length < 2) {
            setErrors(s => ({ ...s, title: 'Title must be at least 2 characters long' }))
        } else {
            setErrors(s => ({ ...s, title: '' }))
        }
    }
    
    const descriptionValidator = (e) => {
        if (e.target.value.length < 10) {
            setErrors(s => ({ ...s, description: 'Descpription must be at least 10 characters long' }))
        } else {
            setErrors(s => ({ ...s, description: '' }))
        }
    }
    
    const imgValidatator = (e) => {
        if (!e.target.value.startsWith('http://')) {
            setErrors(s => ({ ...s, imgUrl: 'Image must start with http://' }))
        } else {
            setErrors(s => ({ ...s, imgUrl: '' }))
        }
    }

    return (
        <section className='section-container'>
            <div className="content-container">
                <h1 className='heading'>Write your own review</h1>
                {/* <CreatedAlert/> */}
                <Form onSubmit={onCreateHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="title">* Title: </Form.Label>
                        <Form.Control className={errors.title && styles.errorInput} value={formState.title} onChange={changeHandler} ref={titleRef} onBlur={titleValidateHandler} name='title' id="title" placeholder="Write appropriate title.." />
                        {errors.title && <p className={styles.errorMsg}>{errors.title}</p>}
                    </Form.Group>
                    <Form.Group className={`mb-3 ${styles['description-container']}`}>
                        <Form.Label htmlFor="description">* Description: </Form.Label>
                        <textarea value={formState.description} onChange={changeHandler} onBlur={descriptionValidator} className={errors.description && styles.errorInput} name='description' id='description' placeholder='Describe your review..' />
                        {errors.description && <p className={styles.errorMsg}>{errors.description}</p>}
                    </Form.Group>

                    <Form.Group className={`mb-3 ${styles['description-container']}`}>
                        <Form.Label htmlFor="imgUrl">* Image: </Form.Label>
                        <input value={formState.imgUrl} onChange={changeHandler} className={errors.imgUrl && styles.errorInput} onBlur={imgValidatator} name='imgUrl' id='imgUrl' placeholder='http://..' />
                        {errors.imgUrl && <p className={styles.errorMsg}>{errors.imgUrl}</p>}
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
                    <p> * - Required fields</p>
                    <fieldset disabled={Object.values(errors).some(v => v)}>
                        <Button ref={submitBtn} type="submit" className='button' disabled={Object.values(errors).some(v => v)} >Submit</Button>
                        {/* {submitBtn.current.disabled == true && submitBtn.current.className={`button ${styles.disabledBtn}`}} */}
                    </fieldset>
                </Form>
            </div>
        </section >
    )
}

export default CreateReview