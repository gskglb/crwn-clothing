import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <div className='logo-container'>
            <Link to='/'><Logo /></Link>
        </div>
        <div className='options'>
            <Link to='/shop' className='option'>Shop</Link>
            <Link to='/sign-in'className='option'>Sign In</Link>
            <Link to='/contact'className='option'>Contact</Link>
        </div>
    </div>
)

export default Header; 