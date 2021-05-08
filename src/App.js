import React from 'react';
import './App.css';

import Question from './components/question/Question'
import Answers from './components/answers/Answers'

function App() {
  return (
    <div className='app-container'>
      <div className='quiz-container'>
        <div className='question-container'>
          <Question />
        </div>
        <Answers />
      </div>
    </div>
  )
}

export default App;
