import React from 'react';

const Game = ({numCorrect, numQuestions, checkIfTrue, checkIfFalse}) => {
  	const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
  	const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
	return(<div className="game">
		<h2>Mental Math</h2>
		<div className="equation">
			<p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
		</div>
		<button onClick={() => checkIfTrue(value1, value2, value3, proposedAnswer)}>True</button>
		<button onClick={() => checkIfFalse(value1, value2, value3, proposedAnswer)}>False</button>
		<p className="text">
			Your Score: {numCorrect}/{numQuestions}
		</p>
	</div>);
};

export default Game;