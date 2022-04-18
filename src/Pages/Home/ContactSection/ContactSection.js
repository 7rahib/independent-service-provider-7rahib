import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './ContactSection.css'

const ContactSection = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <div className='container border border-2 p-3 mx-auto w-75'>
            <h1 className='text-dark text-center'>Connect with me</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='row'>
                    <div className='insta col col-lg-3 border d-flex justify-content-center align-items-center p-4 mx-2'>
                        <i className="fs-1 fa-brands fa-instagram"></i>
                    </div>
                    <div className='face col col-lg-3 border d-flex justify-content-center align-items-center p-4 mx-2'>
                        <i className="fs-1 fa-brands fa-facebook"></i>
                    </div>
                    <div className='youtube col col-lg-3 border d-flex justify-content-center align-items-center p-4 mx-2'>
                        <i className="text-danger fs-1 fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div className='m-4'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Full Name" />
                        </Col>
                    </Form.Group>
                    <fieldset className='d-lg-flex d-sm-block'>
                        <Form.Label className='me-1' column sm={2}>
                            Your Comment
                        </Form.Label>
                        <div className="input-group">

                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </fieldset>

                    <Form.Group as={Row} className="my-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Send</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default ContactSection;