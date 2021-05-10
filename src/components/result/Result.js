import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { resetQuiz } from '../../features/questions/questionsSlice'

import './result.css'

const Result = () => {

    const dispatch = useDispatch()

    const { numberOfCorrectAnswers, numberOfAttemptedQuestions } = useSelector(state => state.questions)
    const incorrectAnswers = numberOfAttemptedQuestions - numberOfCorrectAnswers

    return (
        <div className='result'>
            <div className='correct-answers'>
                Correct answers: {numberOfCorrectAnswers}
            </div>
            <div className='incorrect-answers'>
                Incorrect answers: {incorrectAnswers}
            </div>
            <div>
                <button onClick={() => { dispatch(resetQuiz()) }} className='restart'>Restart</button>
            </div>
        </div>
    )
}

export default Result