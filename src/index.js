import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBN9WlmRc3SedmC4agM1G-rYqezGR22iZE",
  authDomain: "crudproject-45834.firebase app.com",
  databaseURL: "https://crudproject-45834.firebaseio.com",
  projectId: "crudproject-45834",
  storageBucket: "crudproject-45834.appspot.com",
  messagingSenderId: "590481645308"
  appId: “…”
};

firebase.initializeApp(config);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);





reportWebVitals();
