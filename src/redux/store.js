import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers/rootReducers";
import firebaseConfig from "../config/firebase.config";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { compose } from "redux";

const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig)
    )
);

export default store;
