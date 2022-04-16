import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { id, name, picture } = service
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <Card className='m-5'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="dark">Checkout</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;