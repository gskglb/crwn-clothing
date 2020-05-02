import React from 'react';
import CustomeButton from '../custome-button/custome-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>

        </div>
        <CustomeButton>Goto Checkout</CustomeButton>
    </div>
)

export default CartDropdown;
