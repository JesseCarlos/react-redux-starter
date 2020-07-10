import { getFirebase } from "react-redux-firebase";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/rootReducers";

const middlewares = [
    thunk.withExtraArgument(getFirebase)
  ]

const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(...middlewares),
    )
);

export default store;
