import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter:0
    },
    reducers: {
        incrementCounter: (state) => {
            if (state.counter < 5) {
            state.counter = state.counter + 1;    
            } else {
                state.counter = state.counter
            }
            
        },
        decrementCounter: (state) => {
            if (state.counter > -5) {
              state.counter = state.counter - 1;
            } else {
              state.counter = state.counter;
            }
        },
        resetCounter: (state) => {
            state.counter = 0
        }

    }
})


export const {incrementCounter, decrementCounter, resetCounter} = counterSlice.actions
export default counterSlice.reducer