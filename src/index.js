import firebase from 'firebase/app';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import App from "./App";
import './config/firebaseConfig';
import "./index.css";
import store from "./redux/store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider 
            config={{useFirestoreForProfile: true}}
            firebase={firebase} 
            dispatch={store.dispatch} 
            createFirestoreInstance={createFirestoreInstance} >
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
