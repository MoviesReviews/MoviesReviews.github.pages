import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../login/Login.module.css'
import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

function Login() {
    const { loginHandler } = useContext(AuthContext)
    const { formValues, onSubmit, onChange } = useForm(loginHandler, {
        email: '',
        password: ''
    })


    return (
        <section className='section-container'>
            <div className="content-container">
                <h1 className={`heading ${styles.heading}`}>Login</h1>

                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' id='email' value={formValues.email} onChange={onChange} />

                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' id='password' value={formValues.password} onChange={onChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </section>
    )
}

export default Login