import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from '../../hooks/useForm';
import styles from './Register.module.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { Link } from 'react-router-dom';

function Register() {
    const { registerHandler, errors } = useContext(AuthContext)
    const [ inputErrors, setInputErrors ] = useState({})
    const { formValues, onChange, onSubmit } = useForm(registerHandler, {
        username: '',
        email: '',
        password: '',
        rePass: '',
        horror: false,
        thriller: false,
        romance: false,
        fiction: false,
        fantasy: false,
        comedy: false,
        other: false,
    })

    const usuernameValidator = (e) => {
        if (e.target.value.length < 3) {
            setInputErrors(s => ({ ...s, username: 'Username must be at least 3 characters long' }))
        } else {
            setInputErrors(s => ({ ...s, username: '' }))
        }
    }

    const confirmPasswordValidator = () => {
        if(formValues.password !== formValues.rePass){
            setInputErrors(s => ({...s, rePass: 'Passwords should match'}))
        } else{
            setInputErrors(s => ({...s, rePass: ''}))
        }
    }

    const passwordValidator = (e) => {
        if (e.target.value.length < 6) {
            setInputErrors(s => ({ ...s, password: 'Password must be at least 6 characters long' }))
        } else {
            setInputErrors(s => ({ ...s, password: '' }))
        }
    }

    const emailValidator = (e) => {
        if (e.target.value.length == '') {
            setInputErrors(s => ({ ...s, email: 'Email must be valid' }))
        } else {
            setInputErrors(s => ({ ...s, email: '' }))
        }
    }

    return (
        <section className='section-container'>
            <div className="content-container">
                <h1 className='heading'>Register</h1>

                <Form onSubmit={onSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Username
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="username" placeholder="Username" name='username' id='username' value={formValues.username} onChange={onChange} onBlur={usuernameValidator} className={inputErrors.username && 'errorInput'} />
                            {inputErrors.username && <p className='errorMsg'>{inputErrors.username}</p>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" name='email' id='email' value={formValues.email} onChange={onChange} className={errors.serverError || inputErrors.email && 'errorInput'} onBlur={emailValidator}/>
                            {inputErrors?.email && <p className='errorMsg'>{inputErrors?.email}</p>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" name='password' id='password' value={formValues.password} onChange={onChange} onBlur={passwordValidator} className={inputErrors.password && 'errorInput'}/>
                            {inputErrors?.password && <p className='errorMsg'>{inputErrors?.password}</p>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                            Confirm Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Confirm Password" name='rePass' id='rePass' value={formValues.rePass} onChange={onChange} onBlur={confirmPasswordValidator} className={inputErrors.rePass && 'errorInput'}/>
                            {inputErrors?.rePass && <p className='errorMsg'>{inputErrors?.rePass}</p>}
                        </Col>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <div className={styles.categories}>
                            <label>Favourite categories: </label>
                            <Form.Check
                                type="checkbox"
                                id="horror"
                                name="horror"
                                label="Horror"
                                onChange={onChange}
                                checked={formValues.horror}
                            />
                            <Form.Check
                                type="checkbox"
                                id="thriller"
                                name="thriller"
                                label="Thriller"
                                onChange={onChange}
                                checked={formValues.thriller}
                            />
                            <Form.Check
                                type="checkbox"
                                id="romance"
                                name="romance"
                                label="Romance"
                                onChange={onChange}
                                checked={formValues.romance}
                            />
                            <Form.Check
                                type="checkbox"
                                id="fiction"
                                name="fiction"
                                label="Fiction"
                                onChange={onChange}
                                checked={formValues.fiction}
                            />
                            <Form.Check
                                type="checkbox"
                                id="fantasy"
                                name="fantasy"
                                label="Fantasy"
                                onChange={onChange}
                                checked={formValues.fantasy}
                            />
                            <Form.Check
                                type="checkbox"
                                id="comedy"
                                name="comedy"
                                label="Comedy"
                                onChange={onChange}
                                checked={formValues.comedy}
                            />
                            <Form.Check
                                type="checkbox"
                                id="other"
                                name="other"
                                label="Other"
                                onChange={onChange}
                                checked={formValues.other}
                            />
                        </div>
                    </Form.Group>

                    {errors.serverError && <p className={styles.errMsg}>Error: {errors.serverError}</p>}
                    <p className={styles.loginMsg}>Already have an account? <Link className={styles.login}>Login</Link></p>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </section>
    )
}

export default Register