import thunk from "redux-thunk";
import { rootReducer } from "./reducer";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promise from "redux-promise-middleware";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, promise))
);

export default store;
