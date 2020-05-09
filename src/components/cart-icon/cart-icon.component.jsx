import React from 'react';
import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden }  from '../../redux/cart/cart.actions';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, cartItemsCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingCart className='shopping-icon' />
        <span className='item-count'>{cartItemsCount}</span>
    </div>
)

const mapStateToProps = ((state)=>({
    cartItemsCount: selectCartItemsCount(state)
    }
))

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
}) 

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);