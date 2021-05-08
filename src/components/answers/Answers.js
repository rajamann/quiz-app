import React from 'react'
import Answer from '../answer/Answer'

import './answers.css'

const Answers = () => {
    const answers = ['New York', 'London', 'Paris', 'Amsterdam']
    return (
        <div className='answers'>
            {answers.map((answer, index) => <Answer key={index} answer={answer} />)}
        </div>
    )
}

export default Answers