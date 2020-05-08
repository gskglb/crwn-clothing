import React from 'react';
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden }  from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';


const getCartItemsCount = (cartItems) => {
    let counter = 0
    console.log('calling compute')
    cartItems.map((item) => counter = counter + item.quantity)
    return counter
}

const CartIcon = ({toggleCartHidden, cartItemsCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingCart className='shopping-icon' />
        <span className='item-count'>{cartItemsCount}</span>
    </div>
)

const mapStateToProps = ((state)=>({
    cartItemsCount: getCartItemsCount(state.cart.cartItems)
    }
))

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
}) 

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);