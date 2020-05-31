import React from 'react';
import CustomeButton from '../custome-button/custome-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';


const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? 
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem}/>
                    ))
                :
                <span className='empty-message'>You have no items in the cart</span>        
            }
        </div>
        <CustomeButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>Goto Checkout</CustomeButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
        cartItems:  selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
