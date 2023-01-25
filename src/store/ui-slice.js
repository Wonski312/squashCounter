import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState:{
     startApp: true,
     P1name: 'Player 1',
     P2name: 'Player 2'
    },
    reducers:{

toogleStart(state, action){
    state.startApp = false;
    state.P1name = action.payload.player1name;
    state.P2name = action.payload.player2name;

    // console.log(uiSlice.initialState.P1name);
    // console.log(uiSlice.initialState.P2name);
    // console.log(uiSlice.initialState.startApp);
}
    }
})

// reducers
export const uiActions = uiSlice.actions;
export default uiSlice;