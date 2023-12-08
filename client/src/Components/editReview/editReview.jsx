import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useRef, useState } from 'react';
import * as reviewService from '../../services/reviewsServices'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditReview() {
    const formInitialState = {
        title: '',
        description: '',
        category: '',
        img: '',
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
    const { id } = useParams()

    useEffect(() => {
        titleRef.current.focus()
        reviewService.getOne(id).then((data) => {
            console.log(data)
            const categories = data.category.map(c => c.toLowerCase())
            const newData = {
                title: data.title,
                description: data.description,
                img: data.img,
                horror: false,
                thriller: false,
                romance: false,
                fiction: false,
                fantasy: false,
                comedy: false,
                other: false,
            }

            const entries = Object.entries(newData)
            for (let entry of entries) {
                for (let category of categories) {
                    if (entry[0] == category) {
                        entry[1] = true
                    }
                }
            }
            setFormState(Object.fromEntries(entries))
        })
    }, [id])


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

    const onEditHandler = (e) => {
        e.preventDefault()

        const category = Object.entries(formState).filter(r => r[1] == true).map(x => x[0])

        const data = {
            title: formState.title,
            description: formState.description,
            category,
            img: formState.img,
        }
        reviewService.editReview(data, id)
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
            setErrors(s => ({ ...s, img: 'Image must start with http://' }))
        } else {
            setErrors(s => ({ ...s, img: '' }))
        }
    }

    return (
        <section className='section-container'>
            <div className="content-container">
                <h1 className='heading'>Edit your review</h1>
                <Form onSubmit={onEditHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="title">* Title: </Form.Label>
                        <Form.Control className={errors.title && 'errorInput'} value={formState.title} onChange={changeHandler} ref={titleRef} onBlur={titleValidateHandler} name='title' id="title" />
                        {errors.title && <p className='errorMsg'>{errors.title}</p>}
                    </Form.Group>
                    <Form.Group className={`mb-3`}>
                        <Form.Label htmlFor="description">* Description: </Form.Label>
                        <textarea value={formState.description} onChange={changeHandler} onBlur={descriptionValidator} className={errors.description && 'errorInput'} name='description' id='description' />
                        {errors.description && <p className='errorMsg'>{errors.description}</p>}
                    </Form.Group>

                    <Form.Group className={`mb-3`}>
                        <Form.Label htmlFor="img">* Image: </Form.Label>
                        <input value={formState.img} onChange={changeHandler} className={errors.img && 'errorInput'} onBlur={imgValidatator} name='img' id='img' />
                        {errors.img && <p className='errorMsg'>{errors.img}</p>}
                    </Form.Group>

                    <Form.Group className={`mb-3`}>
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
                    </fieldset>
                </Form>
            </div>
        </section >
    )
}