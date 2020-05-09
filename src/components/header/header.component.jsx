import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase.util';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header = ({ currentUser, cartHidden }) => (
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
            <CartIcon />
        </div>
        {
            cartHidden ?
            null
            :
            <CartDropdown />
        }
        
    </div>
)

// the createStructuredSelector takes care of passing state to selector
const  mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden 
})

export default connect(mapStateToProps)(Header); 