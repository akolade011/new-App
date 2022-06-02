import ReactDOM from "react-dom";
import "./styles/index.scss";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
