import "./App.css";
import * as firebase from "firebase";

import React, { Component } from "react";
import * as firebase from "firebase";
class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }
  render() {
    return (
      <div>
        <h1></h1>
      </div>
    );
  }
}
export default App;


// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
