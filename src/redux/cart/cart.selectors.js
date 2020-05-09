import { createSelector } from 'reselect';

const selectCart = (state) => state.cart 

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItemsCount) => {
        return(
            cartItemsCount.reduce(
                (totalCount, cartItem) => {
                    return(totalCount = totalCount + cartItem.quantity)
                }, 0
            )
        )
    }
)