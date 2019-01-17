import "bootstrap/dist/css/bootstrap.min.css";
//import $ from "jquery";
//import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./styles.css";
import reducer from "./redux/reducer";
import { Provider } from "react-redux";

import AppComponent from "./App";

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppComponent />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

