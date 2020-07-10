import { Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import "./App.css";
import logo from "./logo.svg";

const collectionName = "";

function App() {
  useFirestoreConnect({collection: collectionName});
  useSelector(state => console.log(state.firestore.ordered[collectionName]))

  return (
    <div className="App">
      <Formik initialValues={{ name: "Dev" }}>
        {props => (
          <header className="App-header">
            <form onSubmit={props.handleSubmit}>
              <p style={{ color: "#61DAFB" }}>Hello {props.values.name}</p>
              <img src={logo} className="App-logo" alt="logo" />
              <div>Type your name.</div>
              <p>
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="name"
                />
              </p>
              <p>Look at the console and see the firestore instance.</p>
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}

              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </form>
          </header>
        )}
      </Formik>
    </div>
  );
}

export default App;
