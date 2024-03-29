import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      if (state.value <= 0) {
        return
      }
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
      // ? action.payload is the value passed as an argument on the function call in Counter.js (in this case 5)
    },
    reset: (state) => {
      state.value = 0
    },
  },
})

export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions

export default counterSlice.reducer
