import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentQuestion, setNumberOfCorrectAnswers } from '../../features/questions/questionsSlice'

import './answers.css'

const Answers = () => {
    const { currentQuestion = 0 } = useSelector(state => state.questions)
    const { answers = [] } = useSelector(state => state.questions?.questionsList?.[currentQuestion])

    const [revealAnswer, setRevealAnswer] = useState(false)

    const dispatch = useDispatch()

    const handleAnswerClick = (correct) => {
        setRevealAnswer(true)
        correct && dispatch(setNumberOfCorrectAnswers())
    }

    const handleNextClick = () => {
        dispatch(setCurrentQuestion())
        setRevealAnswer(false)
    }

    const renderAnswer = ({answer, correct, index}) => {
        return (
            <button 
                onClick={() => handleAnswerClick(correct)} 
                className={`answer ${revealAnswer ? 'reveal' : ''} ${correct ? 'correct' : 'incorrect'}`}
                key={index}>
                {answer}
            </button>
        )
    }

    return (
        <div>
            <div className='answers'>
                {answers.map((answer, index) => renderAnswer({...answer, index}))}
            </div>
            <div className='actions'>
                <button onClick={handleNextClick} disabled={!revealAnswer}>&#8594;</button>
            </div>
        </div>
    )
}

export default Answers