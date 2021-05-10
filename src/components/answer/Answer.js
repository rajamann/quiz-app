import React from 'react'

import './answer.css'

const Answer = ({answer}) => {

    const handleAnswerClick = (e) => {
    }

    return (
        <div onClick={handleAnswerClick} className='answer'>
            {answer}
        </div>
    )
}

export default Answer