import { combineReducers } from 'redux';
import UserReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key : 'root',
    storage,
    whitelist: ['cart', 'directory']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: directoryReducer 
})

export default persistReducer(persistConfig, rootReducer)
