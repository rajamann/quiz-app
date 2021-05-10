import React from 'react'
import { useSelector } from 'react-redux'

import Question from '../question/Question'
import Answers from '../answers/Answers'
import Result from '../result/Result'

const Quiz = () => {

    const { isQuizCompleted } = useSelector(state => state.questions)

    return (
        !isQuizCompleted ?
        <>
            <div className='question-container'>
                <Question />
            </div>
            <Answers />
        </> : <Result />
    )
}

export default Quiz