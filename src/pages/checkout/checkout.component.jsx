import React from 'react';

import './checkout.styles.scss';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors';

import CheckOutItem  from '../../components/checkout-item/checkout-item.components';

const CheckoutPage = ({cartItems, totalPrice}) => {
    return(
        <div className="checkout-page">
            <div className="checkout-header">
            <div className='checkout-block'>Product</div>
                <div className='checkout-block'>Description</div>
                <div className='checkout-block'>Quantity</div>
                <div className='checkout-block'>Price</div>
                <div className='checkout-block'>Remove</div>
            </div>
            {
                cartItems.map( (item) => <CheckOutItem key={item.id} checkOutItem = {item} />

                )
            }
            <div className='total'>INR {totalPrice}</div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage)