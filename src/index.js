import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAH4CjXrXm51t8ZeaKUfAB1XYPpFxKpzOo",
  authDomain: "crudbeginningreact.firebaseapp.com",
  databaseURL: "https://crudbeginningreact-default-rtdb.firebaseio.com",
  projectId: "crudbeginningreact",
  storageBucket: "crudbeginningreact.appspot.com",
  messagingSenderId: "536739765095",
  appId: "1:536739765095:web:1f1a2b5128492fe9b8adc2",
  measurementId: "G-FCSG8N2B79"
};

const app = initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const analytics = getAnalytics(app);