import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='row'>
            <div className='col col-lg-6 col-sm-8 container w-25 mx-auto'>
                <h2 className='text-dark text-center m-3'>Login to your account</h2>
                <Form>
                    <Form.Group className="m-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="m-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
                        Login
                    </Button>
                </Form>
                <p className='text-center'>Don't have an account ? <Link to="/register" className='text-primary pe-auto text-decoration-none'>Register Now</Link> </p>
                <p className='text-center'><Link to="/register" className='text-primary pe-auto text-decoration-none'>Forget Password?</Link></p>
            </div>
        </div>
    );
};

export default Login;