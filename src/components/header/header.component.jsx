import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import { auth } from '../../firebase/firebase.util';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <div className='logo-container'>
            <Link to='/'><Logo /></Link>
        </div>
        <div className='options'>
            <Link to='/shop' className='option'>Shop</Link>
            <Link to='/contact'className='option'>Contact</Link>
            {
                currentUser ? 
                <div className="option" onClick= {() => auth.signOut()}>SignOut</div>
                : 
                <Link to='/sign-in'className='option'>Sign In</Link>
            }
        </div>
    </div>
)

export default Header; 