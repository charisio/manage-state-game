import React, { Component } from 'react';
import logo from './logo.svg';
import Game from './Game';
import './App.css';

class App extends Component {
  constructor(props) {
  	super(props);
    this.state = {
    	numQuestions: 0,
      	numCorrect: 0,
    };
  }
  
  checkIfTrue = (value1, value2, value3, proposedAnswer) => {
    if (value1 + value2 + value3 === proposedAnswer) {
    	this.setState((prevState) => ({
        	numCorrect: prevState.numCorrect + 1,
          	numQuestions: prevState.numQuestions + 1
        }));
    } else {
    	this.setState((prevState) => ({
        	numQuestions: prevState.numQuestions + 1
        }));
    }
  };

checkIfFalse = (value1, value2, value3, proposedAnswer) => {
    if (value1 + value2 + value3 !== proposedAnswer) {
    	this.setState((prevState) => ({
        	numCorrect: prevState.numCorrect + 1,
          	numQuestions: prevState.numQuestions + 1
        }));
    } else {
    	this.setState((prevState) => ({
        	numQuestions: prevState.numQuestions + 1
        }));
    }
  };
  
  render() {
    const {numQuestions, numCorrect} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<Game numCorrect={numCorrect} numQuestions={numQuestions} checkIfTrue={this.checkIfTrue} checkIfFalse={this.checkIfFalse}/>
      </div>
    );
  }
}

export default App;
