import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center'>
            <p>Copyright &copy; {year} Naimur Rashid Rahib</p>
        </div>
    );
};

export default Footer;