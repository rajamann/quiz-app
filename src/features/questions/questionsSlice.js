import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questionsList: [
    {
      id: 1,
      question: 'What is the capital of England?',
      answers: [
        {
          answer: 'New York',
          correct: false
        },
        {
          answer: 'London',
          correct: true
        },
        {
          answer: 'Paris',
          correct: false
        },
        {
          answer: 'Amsterdam',
          correct: false
        }
      ],
      attempted: false,
      correct: false
    },
    {
      id: 2,
      question: 'What is the capital of Canada?',
      answers: [
        {
          answer: 'Vancouver',
          correct: false
        },
        {
          answer: 'Toronto',
          correct: false
        },
        {
          answer: 'Alberta',
          correct: false
        },
        {
          answer: 'Ottawa',
          correct: true
        }
      ],
      attempted: false,
      correct: false
    },
    {
      id: 3,
      question: 'What is the capital of Australia?',
      answers: [
        {
          answer: 'Sydney',
          correct: false
        },
        {
          answer: 'Brisbane',
          correct: false
        },
        {
          answer: 'Canberra',
          correct: true
        },
        {
          answer: 'Adelaide',
          correct: false
        }
      ],
      attempted: false,
      correct: false
    }
  ],
  currentQuestion: 0
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setCurrentQuestion: (state) => {
      state.currentQuestion += 1
    }
  }
})

export const { setCurrentQuestion } = questionsSlice.actions

export default questionsSlice.reducer
