import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
    name: "chat",
    initialState: {
        message:[]
    },
    reducers: {
        addItem: (state,action) => {
            state.message.unshift(action.payload)
            if (state.message.length > 10) {
                state.message.pop()
            }
        }
    }


})
export const {addItem} = ChatSlice.actions
    
export default ChatSlice.reducer