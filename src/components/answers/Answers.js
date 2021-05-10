import React from 'react'
import { useSelector } from 'react-redux'

import Answer from '../answer/Answer'

import './answers.css'

const Answers = () => {
    const { currentQuestion = 0 } = useSelector(state => state.questions)
    const { answers = [] } = useSelector(state => state.questions?.questionsList?.[currentQuestion])
    return (
        <div className='answers'>
            {answers.map((answer, index) => <Answer key={index} {...answer} />)}
        </div>
    )
}

export default Answers