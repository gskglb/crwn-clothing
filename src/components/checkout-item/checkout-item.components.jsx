import React from 'react';

import  './checkout-item.styles.scss';

import { connect } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity } from '../../redux/cart/cart.actions';

const CheckOutItem = ({checkOutItem, removeAction, incQuantity, decQuantity }) => {
    const {name, imageUrl, quantity, price} = checkOutItem
    return (
    <div className="checkout-item">
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
        <div className="arrow" onClick={ () => decQuantity(checkOutItem)}> &#10094; </div>        
            <span className='value'>{quantity}</span>
        <div className="arrow"  onClick={ () => incQuantity(checkOutItem)}>&#10095;</div>        
        </span>
        <span className='price'>INR {price}</span>
        <div className='remove-button' onClick={ () => removeAction(checkOutItem)}> 
           &#10005;
        </div>
    </div>
)}

const mapDispatchToProps = (dispatch) => ({
    removeAction : item => dispatch(removeItem(item)),
    incQuantity : item => dispatch(incrementQuantity(item)),
    decQuantity : item => dispatch(decrementQuantity(item)),

})

export default connect(null, mapDispatchToProps)(CheckOutItem);