import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='row'>
            <div className='col col-lg-6 col-sm-8 container w-25 mx-auto'>
                <h2 className='text-dark text-center m-3'>Login to your account</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="m-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="m-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
                        Login
                    </Button>
                </Form>
                {errorElement}
                <p className='text-center'>Don't have an account ? <Link to="/register" className='text-primary pe-auto text-decoration-none'>Register Now</Link> </p>
                <p className='text-center'><Link to="/register" className='text-primary pe-auto text-decoration-none'>Forget Password?</Link></p>
            </div>
        </div>
    );
};

export default Login;