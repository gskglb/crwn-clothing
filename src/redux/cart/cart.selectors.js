import { createSelector } from 'reselect';

const selectCart = (state) => state.cart 

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        return(
            cartItems.reduce(
                (totalCount, cartItem) => {
                    return(totalCount = totalCount + cartItem.quantity)
                }, 0
            )
        )
    }
)

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    (cartItems) => {
        return(
            cartItems.reduce(
                (totalPrice, cartItem) => {
                    return(totalPrice = totalPrice + cartItem.price * cartItem.quantity)
                },0
            )
        )
    }


)