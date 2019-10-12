import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
      </div>
    );
  }
}

export default App;
