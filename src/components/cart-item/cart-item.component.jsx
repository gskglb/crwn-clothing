import React from 'react';

import  './cart-item.styles.scss';

const CartItem = ({cartItem : { imageUrl, name, price, quantity }}) => (
    <div>
        <img src={imageUrl} alt='item'/>
        <div>
            {name} - {price}
        </div>
    </div>
)

export default CartItem
