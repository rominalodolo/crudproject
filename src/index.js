import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/compat/app';

var config = {
  apiKey: "AIzaSyAH4CjXrXm51t8ZeaKUfAB1XYPpFxKpzOo",
  authDomain: "crudbeginningreact.firebaseapp.com",
  databaseURL: "https://crudbeginningreact-default-rtdb.firebaseio.com",
  projectId: "crudbeginningreact",
  storageBucket: "crudbeginningreact.appspot.com",
  messagingSenderId: "536739765095",
  appId: "1:536739765095:web:1f1a2b5128492fe9b8adc2",
  measurementId: "G-FCSG8N2B79"
  };

firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
