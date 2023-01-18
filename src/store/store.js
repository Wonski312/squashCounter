import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
	name: "counter",
	initialState: {
		player1Points: 0,
		player2Points: 0,
		player1Sets: 0,
		player2Sets: 0,
	},
	reducers: {
		increment(state, action) {
			const playerId = action.payload;
			if (playerId === 1) {
				state.player1Points++;
			} else {
				state.player2Points++;
			}

			if (state.player1Points === 11) {
				state.player1Sets++;
                state.player1Points = 0;
			} else if(state.player2Points === 11){
                state.player2Sets++;
                state.player2Points = 0;
			}
		},
	},
    
});


const store = configureStore({
	reducer: {counter: counterSlice.reducer}
});

export const counterActions = counterSlice.actions;

export default store;
