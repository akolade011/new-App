import ReactDOM from "react-dom";
import "./styles/index.scss";
import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <Login></Login>
        <a href={<Register></Register>}>
          {" "}
          <Button>Register</Button>
        </a>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
