import React from 'react';

const Game = ({calculateScore}) => {
  	const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
  	const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
	return(<div className="game">
		<h2>Mental Math</h2>
		<div className="equation">
			<p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
		</div>
		<button name="true" onClick={(e) => calculateScore(e, value1, value2, value3, proposedAnswer)}>True</button>
		<button name="false" onClick={(e) => calculateScore(e, value1, value2, value3, proposedAnswer)}>False</button>
	</div>);
};

export default Game;