import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
    proposedAnswer:
      Math.floor(Math.random() * 3) + Math.floor(Math.random() * 100) * 3,
    numQuestions: 0,
    numCorrect: 0,
  };

  checkTrue = () => {
    if (
      this.state.value1 + this.state.value2 + this.state.value3 ===
      this.state.proposedAnswer
    ) {
      this.setState((st) => ({
        value1: Math.floor(Math.random() * 100),
        value2: Math.floor(Math.random() * 100),
        value3: Math.floor(Math.random() * 100),
        proposedAnswer:
          Math.floor(Math.random() * 3) + Math.floor(Math.random() * 100) * 3,
        numCorrect: st.numCorrect + 1,
        numQuestions: st.numQuestions + 1,
      }));
    } else {
      this.setState((st) => ({
        value1: Math.floor(Math.random() * 100),
        value2: Math.floor(Math.random() * 100),
        value3: Math.floor(Math.random() * 100),
        proposedAnswer:
          Math.floor(Math.random() * 3) + Math.floor(Math.random() * 100) * 3,
        numQuestions: st.numQuestions + 1,
      }));
    }
  };

  checkFalse = () => {
    if (
      this.state.value1 + this.state.value2 + this.state.value3 !==
      this.state.proposedAnswer
    ) {
      this.setState((st) => ({
        value1: Math.floor(Math.random() * 100),
        value2: Math.floor(Math.random() * 100),
        value3: Math.floor(Math.random() * 100),
        proposedAnswer:
          Math.floor(Math.random() * 3) + Math.floor(Math.random() * 100) * 3,
        numCorrect: st.numCorrect + 1,
        numQuestions: st.numQuestions + 1,
      }));
    } else {
      this.setState((st) => ({
        value1: Math.floor(Math.random() * 100),
        value2: Math.floor(Math.random() * 100),
        value3: Math.floor(Math.random() * 100),
        proposedAnswer:
          Math.floor(Math.random() * 3) + Math.floor(Math.random() * 100) * 3,
        numQuestions: st.numQuestions + 1,
      }));
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.checkTrue}>True</button>
          <button onClick={this.checkFalse}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
