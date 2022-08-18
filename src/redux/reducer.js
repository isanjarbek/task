import { combineReducers } from "redux";
import { productReducer } from "./reducers/products";
import { paymentReducer } from "./reducers/payment";

export const rootReducer = combineReducers({
  product: productReducer,
  payment: paymentReducer,
});
