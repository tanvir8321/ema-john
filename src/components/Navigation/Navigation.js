import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='main-nav'>
            <a href='/shop'>Shop</a>
            <a href='/order-review'>Oreder Review</a>
            <a href='manage-inventory'>Manage Inventory Here</a>
        </nav>
    );
};

export default Navigation;