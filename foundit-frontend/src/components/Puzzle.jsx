import React, { useState } from 'react';
import './css/puzzle.css';

const Puzzle = ({ id, question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="puzzle-card">
      <div className="question-section">
        <span className="question-label">Question:</span>
        <div className="question-text">{question}</div>
        <button className="show-answer-button" onClick={toggleAnswer}>
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>
      </div>
      {showAnswer && (
        <div className="answer-section">
          <span className="answer-label">Answer:</span>
          <div className="answer-text">{answer}</div>
        </div>
      )}
    </div>
  );
};

export default Puzzle;
