import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: {
        
    },
    reducers: {
        addSearchItems: (state, action) => {
            Object.assign(state,action.payload)
        }
    }
})

export const {addSearchItems} = searchSlice.actions

export default searchSlice.reducer