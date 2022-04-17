import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import profile from '../../images/profile/profile.jpg';
const About = () => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center fs-2">Naimur Rashid Rahib</h5>
                    <p className="card-text">A student of Leading University, Sylhet. Currently studying BSc. in Computer Science and Engineering. With only two semesters remaining I want to finish my Bachelors with my heads high. I have enrolled in Programming Hero's Web Development Course to learn web Development and feed my eager for knowledge.</p>
                </div>
                <img src={profile} className="card-img-bottom" alt="..." />
            </div>
            <CardGroup className='m-5'>
                <Card className='p-2'>
                    <Card.Body>
                        <Card.Title>Aims</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='p-2'>
                    <Card.Body>
                        <Card.Title>Mission</Card.Title>
                        <Card.Text>My mission is to complete this course with good grades
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='p-2'>
                    <Card.Body>
                        <Card.Title>Goals</Card.Title>
                        <Card.Text>My goals are simple, I want to earn enough to lead a happy life with my loved ones in the Halal way.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default About;