import { combineReducers } from 'redux';
import UserReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import ShopdataReducer from './shopdata/shopdata.reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key : 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shopdata: ShopdataReducer 
})

export default persistReducer(persistConfig, rootReducer)
