import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='row'>
            <div className='col col-lg-6 col-sm-8 container w-25 mx-auto'>
                <h2 className='text-dark text-center m-3'>Create new account</h2>
                <Form>
                    <Form.Group className="m-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="m-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="m-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
                        Register
                    </Button>
                </Form>
                <p className='text-center'>Already have an account ? <Link to="/login" className='text-primary pe-auto text-decoration-none'>Login to your account</Link> </p>
            </div>
        </div>
    );
};

export default Register;