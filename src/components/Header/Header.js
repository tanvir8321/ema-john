import React from 'react';
import logo from '../../images/logo.png';
import Navigation from '../Navigation/Navigation';
import './Header.css';
const Header = () => {
    return (
        <div className='nav-logo'>
            <img src={logo} alt=""/>
            <Navigation></Navigation>
        </div>
    );
};

export default Header;