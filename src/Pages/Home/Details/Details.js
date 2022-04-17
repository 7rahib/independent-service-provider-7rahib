import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    const service = useParams();
    console.log(service)

    return (
        <div>
            <h2>Welcome to detail: {service.id}</h2>
            <div className='text-center'>{service.name}
                <Link to="/checkout">
                    <button className='btn btn-dark'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default Details;