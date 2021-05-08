import React from 'react';
import './App.css';

import Question from './components/question/Question'
import Answers from './components/answers/Answers'
import Actions from './components/actions/Actions'

function App() {
  return (
    <div className='app-container'>
      <div className='question-container'>
        <Question />
      </div>
      <div className='answers-container'>
        <Answers />
      </div>
      <div className='actions-container'>
        <Actions />
      </div>
    </div>
  )
}

export default App;
