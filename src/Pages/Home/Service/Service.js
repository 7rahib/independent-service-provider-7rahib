import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, picture, price, about } = service;
    const navigate = useNavigate();

    const navigateToDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <Card className='m-5 shadow'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price: {price}tk per hour</Card.Text>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Button onClick={() => navigateToDetail(id)} variant="dark">Checkout</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;