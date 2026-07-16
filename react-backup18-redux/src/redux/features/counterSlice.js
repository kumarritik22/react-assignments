import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "count",
    initialState: {
        value: 0
    },
    reducers:{
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1
            }  
        },
        increaseValueByUserInput: (state, action) => {
            console.log(action.payload)
            state.value += action.payload
        }
    }
})

export const {increment, decrement, increaseValueByUserInput} = counterSlice.actions
export default counterSlice.reducer