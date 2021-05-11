import React from 'react'
import { useSelector } from 'react-redux'

import Stats from '../stats/Stats'
import Question from '../question/Question'
import Answers from '../answers/Answers'
import Result from '../result/Result'

const Quiz = () => {

    const { isQuizCompleted } = useSelector(state => state.questions)

    const renderQuiz = () => (
        <>
            <Stats />
            <Question />
            <Answers />
        </>
    )

    const renderResult = () => <Result />

    return(
        <>
        {!isQuizCompleted && renderQuiz()}
        {isQuizCompleted && renderResult()}
        </>
    )
}

export default Quiz