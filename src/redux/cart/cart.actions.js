import { CartTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: CartTypes.REMOVE_ITEM,
    payload: item
})

export const incrementQuantity = (item) => ({
    type: CartTypes.INCREMENT_QUATITY,
    payload: item
})

export const decrementQuantity = (item) => ({
    type: CartTypes.DECREMENT_QUATITY,
    payload: item
})