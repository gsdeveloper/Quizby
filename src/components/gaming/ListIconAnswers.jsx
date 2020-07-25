import React from 'react';
import { useSelector } from 'react-redux';

export default function ListAnswers() {
  const { historicOfAnswers } = useSelector((d) => d.quizzesReducer);
  console.log(historicOfAnswers);
  return (
    <ul className="App__listiconanswers">
      {historicOfAnswers.map((answers) =>
        answers === 'correct' ? (
          <li className="App__listanswers--item">
            <img src="../../rightanswericon.svg" alt="correct" />
          </li>
        ) : (
          <li className="App__listanswers--item">
            <img src="../../wronganswericon.svg" alt="wrong" />
          </li>
        )
      )}
    </ul>
  );
}