import React from 'react';
import CustomeButton from '../custome-button/custome-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem}/>
                )
                )
            }
        </div>
        <CustomeButton>Goto Checkout</CustomeButton>
    </div>
)

const mapStateToProps = (state) => ({
        cartItems:  state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);
