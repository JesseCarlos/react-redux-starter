import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducers = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducers;
