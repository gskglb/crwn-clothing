import { CartTypes } from './cart.types';
import { addItemToCart, incrementQuantity, decrementQuantity } from './cart.util'


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartTypes.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden : !state.hidden
            } 
        case CartTypes.ADD_ITEM : 
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case CartTypes.REMOVE_ITEM :
            return {
                ...state,
                cartItems : state.cartItems.filter((item) => {
                    return item.id !== action.payload.id
                })
            }

        case CartTypes.INCREMENT_QUATITY: 
            return{
                ...state,
                cartItems: incrementQuantity(state.cartItems, action.payload)
            }

        case CartTypes.DECREMENT_QUATITY: 
            return{
                ...state,
                cartItems: decrementQuantity(state.cartItems, action.payload)
            }   

        default:
            return state    
    }
}

export default CartReducer