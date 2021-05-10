import { createSlice } from '@reduxjs/toolkit'

import questionsList from '../../config/questionsList.json'

const initialState = {
  questionsList,
  currentQuestion: 0,
  numberOfCorrectAnswers: 0,
  numberOfAttemptedQuestions: 0,
  isQuizCompleted: false
}

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setCurrentQuestion: (state) => {
        state.isQuizCompleted = state.currentQuestion === (state.questionsList?.length - 1)
        state.currentQuestion += 1
        state.numberOfAttemptedQuestions += 1
    },
    setNumberOfCorrectAnswers: (state) => {
      state.numberOfCorrectAnswers += 1
    },
    resetQuiz: (state) => {
      state.currentQuestion = 0
      state.numberOfCorrectAnswers = 0
      state.numberOfAttemptedQuestions = 0
      state.isQuizCompleted = false
    }
  }
})

export const { setCurrentQuestion, setNumberOfCorrectAnswers, resetQuiz } = questionsSlice.actions

export default questionsSlice.reducer
