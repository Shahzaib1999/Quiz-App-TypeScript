import React from 'react';

import './QuizCard.css';

export const QuizCard = () => {
  return (
    <div className="quizCardWrapper">
      <div className="questionWrapper">
        <div className="questionSubWrapper">
          <div className="questionNumber">
            <span className="questionNumberText">Qusetion 1 of 5</span>
          </div>
          <div className="question">
            <p className="questionText">
              According to the International System of Units, how many bytes
              are in a kilobyte of RAM?
            </p>
          </div>
        </div>
        <div className="answerWrapper">
          <p className="answerText">Answer</p>
          <div className="optionsWrapper">
            <div className="option">
              <div className="row">
                <div className="column">
                  <p className="optionsAlp">A)</p>
                  <p className="options">option</p>
                </div>
                <div className="column">
                  <p className="optionsAlp">A)</p>
                  <p className="options">option</p>
                </div>
                <div className="column">
                  <p className="optionsAlp">A)</p>
                  <p className="options">option</p>
                </div>
                <div className="column">
                  <p className="optionsAlp">A)</p>
                  <p className="options">option</p>
                </div>
              </div>
            </div>
          </div>
          <div className="submitWrapper">
            <button className="enterBtn">Enter</button>
          </div>
          <div className="scoreWrapper">
            <p className="score">Score: <b> 0</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}