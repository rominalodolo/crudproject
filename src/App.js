import "./App.css";
import * as firebase from "firebase";
import User from "./User";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={User} />
              <Route path="/*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

class NotFound extends Component {
  render() {
    return <div>Not Found</div>;
  }
}
