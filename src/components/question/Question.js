import React from 'react'
import './question.css'

const Question = ({question}) => {
    return (
        <div className='question'>
            <h1>{question}</h1>
        </div>
    )
}

export default Question