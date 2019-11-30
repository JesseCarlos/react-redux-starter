import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducers = combineReducers({
  firestore: firestoreReducer
});

export default rootReducers;
