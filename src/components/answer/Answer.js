import React from 'react'

import { useDispatch } from 'react-redux'
import { setCurrentQuestion, setNumberOfCorrectAnswers, setNumberOfAttemptedQuestions } from '../../features/questions/questionsSlice'

import './answer.css'

const Answer = ({answer, correct}) => {

    const dispatch = useDispatch()

    const handleAnswerClick = (e) => {
        dispatch(setCurrentQuestion())
        dispatch(setNumberOfAttemptedQuestions(1))

        correct && dispatch(setNumberOfCorrectAnswers(1))
    }

    return (
        <div onClick={handleAnswerClick} className='answer'>
            {answer}
        </div>
    )
}

export default Answer