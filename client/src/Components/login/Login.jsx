import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../login/Login.module.css'
import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { Link } from 'react-router-dom';

function Login() {
    const { loginHandler, errors } = useContext(AuthContext)
    const { formValues, onSubmit, onChange } = useForm(loginHandler, {
        email: '',
        password: ''
    })


    return (
        <section className='section-container'>
            <div className={`content-container ${styles.container}`}>

                <Form onSubmit={onSubmit} className={styles.form}>
                    <h1 className={`heading ${styles.heading}`}>Login</h1>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className={styles.input} type="email" placeholder="Enter email" name='email' id='email' value={formValues.email} onChange={onChange} />

                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className={styles.input} type="password" placeholder="Password" name='password' id='password' value={formValues.password} onChange={onChange} />
                    </Form.Group>


                    {errors.loginErrorMsg && <p className={styles.msg}>Error: {errors.loginErrorMsg}</p>}
                    <p className={styles.registerMsg}>You already have an account? Go to <Link className={styles.register} to='/register'>Register</Link></p>
                    <Button variant="primary" type="submit" className='button'>
                        Submit
                    </Button>
                </Form>
            </div>
        </section>
    )
}
export default Login