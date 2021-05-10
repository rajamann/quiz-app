import React from 'react'
import { useSelector } from 'react-redux'

import './question.css'

const Question = () => {

    const { currentQuestion = 0 } = useSelector(state => state.questions)
    const { question = '' } = useSelector(state => state.questions?.questionsList[currentQuestion])

    return (
        <div className='question'>
            <h1>{question}</h1>
        </div>
    )
}

export default Question