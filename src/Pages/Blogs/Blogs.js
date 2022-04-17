import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Card className='m-5'>
                <Card.Header className='fw-bold'>Question 1: Difference between authorization and authentication.</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <span className='fw-bold'>Authorization</span>
                        <p>
                            Authorization determines whether you are authorized to access the resources. It is the process of verifying whether access is allowed or not. It determines what user can and cannot access. Authentication factors required for authorization may vary, depending on the security level. authorization so always comes first.	Authorization is done after successful authentication.
                        </p>
                        <span className='fw-bold'>Authentication</span>
                        <p>
                            Authentication confirms your identity to grant access to the system. It is the process of validating user credentials to gain user access. It determines whether user is what he claims to be. Authentication is the first step of authorization so always comes first. Authentication usually requires a username and a password.
                        </p>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card className='m-5'>
                <Card.Header className='fw-bold'>Question 2: Why are you using firebase? What other options do you have to implement authentication ?</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <span className='fw-bold'>Reason we are using Firebase</span>
                        <p>
                            The main reason we are using Firebase is the Firebase Authentication service. It is one of the headlining feature of Firebase. Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login.
                        </p>
                        <span className='fw-bold'>Other options for implementing Authentication</span>
                        <p>
                            <ul>
                                <li>1. Auth0</li>
                                <li>2. Okta</li>
                                <li>3. MongoDB</li>
                            </ul>
                        </p>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card className='m-5'>
                <Card.Header className='fw-bold'>Question 3: What other services does firebase provide other than authentication ?</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <span className='fw-bold'>Other Firebase Features</span>
                        <p>
                            <ul>
                                <li>1. Firebase Realtime Database</li>
                                <li>2. Cloud Storage</li>
                                <li>3. Hosting service</li>
                                <li>4. Cloud Functions</li>
                                <li>5. Google Analytics</li>
                                <li>6. Cloud Messaging</li>
                            </ul>
                        </p>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blogs;