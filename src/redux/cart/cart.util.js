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

export const incrementQuantity = (cartItems, payload) => {
    return cartItems.map((cartItem) => 
        cartItem.id === payload.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem 
    )
}

export const decrementQuantity = (cartItems, payload) => {
    
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === payload.id
    )

    if(existingCartItem.quantity === 1){
       return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id) 
    }    

    return cartItems.map((cartItem) => 
        cartItem.id === payload.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem 
    )

}