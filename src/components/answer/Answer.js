import React from 'react'
import { useDispatch } from 'react-redux'

import { setCurrentQuestion, setNumberOfCorrectAnswers } from '../../features/questions/questionsSlice'

import './answer.css'

const Answer = ({answer, correct}) => {

    const dispatch = useDispatch()

    const handleAnswerClick = () => {
        dispatch(setCurrentQuestion())
        correct && dispatch(setNumberOfCorrectAnswers())
    }

    return (
        <div onClick={handleAnswerClick} className='answer'>
            {answer}
        </div>
    )
}

export default Answer