import React from 'react'

import { useDispatch } from 'react-redux'
import { setCurrentQuestion } from '../../features/questions/questionsSlice'

import './answer.css'

const Answer = ({answer, correct}) => {

    const dispatch = useDispatch()

    const handleAnswerClick = (e) => {
        dispatch(setCurrentQuestion())
    }

    return (
        <div onClick={handleAnswerClick} className='answer'>
            {answer}
        </div>
    )
}

export default Answer