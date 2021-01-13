import React, { Component } from 'react';
import logo from './logo.svg';
import Game from './Game';
import Score from './Score';
import './App.css';

class App extends Component {
  constructor(props) {
  	super(props);
    this.state = {
    	numQuestions: 0,
      	numCorrect: 0,
    };
  }
  
  calculateScore = (event, value1, value2, value3, proposedAnswer) => {
    const total = value1 + value2 + value3;
    const buttonClicked = event.target.name;
    if ((total === proposedAnswer && buttonClicked === 'true') || (total !== proposedAnswer && buttonClicked === 'false')) {
    	this.setState(currState => ({
        	numCorrect: currState.numCorrect + 1,
      }));
    }
    
    this.setState((prevState) => ({
      numQuestions: prevState.numQuestions + 1
    }));
  };
  
  render() {
    const {numQuestions, numCorrect} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<Game calculateScore={this.calculateScore}/>
		<Score numCorrect={numCorrect} numQuestions={numQuestions}/>
      </div>
    );
  }
}

export default App;
