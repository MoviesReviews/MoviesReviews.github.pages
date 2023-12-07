import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';

function Register({registerHandler}) {
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
                            <Form.Control type="username" placeholder="Username" name='username' id='username' value={formValues.username} onChange={onChange} />
                            {/* <input type="email" placeholder="Email" name='email' id='email' value={formValues.email} onChange={onChange} /> */}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" name='email' id='email' value={formValues.email} onChange={onChange} />
                            {/* <input type="email" placeholder="Email" name='email' id='email' value={formValues.email} onChange={onChange} /> */}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" name='password' id='password' value={formValues.password} onChange={onChange} />
                            {/* <input type="password" placeholder="Password" name='password' id='password' value={formValues.password} onChange={onChange} /> */}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm={2}>
                            Confirm Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Confirm Password" name='rePass' id='rePass' value={formValues.rePass} onChange={onChange} />
                            {/* <input type="password" placeholder="Confirm Password" name='rePass' id='rePass' value={formValues.rePass} onChange={onChange} /> */}
                        </Col>
                    </Form.Group>


                    {/* <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                            Preffered caregories:
                        </Form.Label>
                        <Col sm={10}>
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
                                onChange={onchange}
                                checked={formValues.fiction}
                            />
                            <Form.Check
                                type="checkbox"
                                id="fantasy"
                                name="fantasy"
                                label="Fantasy"
                                onChange={onchange}
                                checked={formValues.fantasy}
                            />
                            <Form.Check
                                type="checkbox"
                                id="comedy"
                                name="comedy"
                                label="Comedy"
                                onChange={onchange}
                                checked={formValues.comedy}
                            />
                            <Form.Check
                                type="checkbox"
                                id="other"
                                name="other"
                                label="Other"
                                onChange={onchange}
                                checked={formValues.other}
                            />
                        </Col>
                    </Form.Group> */}

                    <Form.Group className='mb-3'>
                        <label>Category: </label>
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
                    </Form.Group>

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