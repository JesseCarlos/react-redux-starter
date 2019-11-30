import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Formik } from "formik";
import logo from "./logo.svg";
import "./App.css";

function App({ firestore }) {
  console.log(firestore);
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

export default compose(connect(), firestoreConnect([]))(App);
