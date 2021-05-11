import { current } from 'immer'
import React from 'react'
import { useSelector } from 'react-redux'

import './stats.css'

const Stats = () => {

    const { totalQuestions, currentQuestion } = useSelector(state => state.questions)

    return (
        <div className='stats'>
            {currentQuestion + 1} of {totalQuestions}
        </div>
    )
}

export default Stats