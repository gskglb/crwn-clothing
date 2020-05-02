export const addItemToCart = (cartItems, newItem) => {

    const cartItemAlreadyExists = cartItems.find(
        cartItem => cartItem.id === newItem.id
    )

    if(cartItemAlreadyExists){
        return cartItems.map((cartItem) => 
            cartItem.id === newItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem 
        )
    }

    return [...cartItems, {...newItem, quantity: 1}]
}