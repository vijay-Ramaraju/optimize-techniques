import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './searchSlice'
import counterReducer from './counterSlice'
import ChatReducer from './ChatSlice'

const store = configureStore({
  reducer: {
    search: searchReducer,
    counter: counterReducer,
    chat: ChatReducer,
  },
});

export default store