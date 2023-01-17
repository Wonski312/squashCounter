import {configureStore} from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name:'counter',
    initialState: {
        points: 0,
    },
    reducers:{
        increment(state) {
            state.points++;
        },
    }
    
})

const store = configureStore({
    reducer: counterSlice.reducer
})


export const counterActions = counterSlice.actions;

export default store;