import {applyMiddleware, combineReducers, legacy_createStore} from "redux"

import thunk from "redux-thunk"
import { productReducer } from "./Products/reducer";


const rootReducer = combineReducers({

    products: productReducer,
    // cart: cartReducer,
    // order: orderReducer,
  });

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))