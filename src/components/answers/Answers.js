import React from 'react'
import Answer from '../answer/Answer'

const Answers = () => {
    const answers = ['New York', 'London', 'Paris', 'Amsterdam']
    return <>{answers.map((answer, index) => <Answer key={index} answer={answer} />)}</>
}

export default Answers