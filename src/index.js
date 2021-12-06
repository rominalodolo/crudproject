import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import * as firebase from 'firebase';

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


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
// const analytics= getAnalytics(app);

// firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
