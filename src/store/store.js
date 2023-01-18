import {configureStore} from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name:'counter',
    initialState: {
 player1Points: 0, player2Points:0         
    },
    reducers:{
        increment(state, action) {
            const playerId = action.payload 
        if(playerId === 1){
            state.player1Points++
        }else{
            state.player2Points++
        }
        },
    }
    
})

const store = configureStore({
    reducer: counterSlice.reducer
})


export const counterActions = counterSlice.actions;

export default store;