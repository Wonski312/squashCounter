import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
	name: "counter",
	initialState: {
		player1Points: 0,
		player2Points: 0,
		player1Sets: 0,
		player2Sets: 0,
		modalVisible: false,
		addinfo: null,
		endGame: false,

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
				state.modalVisible = true;
				state.player1Points = 0;
				state.player2Points = 0;
				state.addinfo = {
					player: action.payload
				}
		
				
			} else if(state.player2Points === 11){
				state.player2Sets++;
				state.modalVisible = true;
                state.player2Points = 0;
                state.player1Points = 0;
				state.addinfo = {
					player: playerId
				}
			}

			if(state.player1Sets === 5 || state.player2Sets ===5 ){
				state.endGame = true;
				
			}
		},

		toggleModal(state){
			state.modalVisible = false
		},
		playAgain(state){
			state.player1Points = 0;
			state.player2Points = 0;
			state.player1Sets = 0;
			state.player2Sets = 0;
			state.endGame = false;
			state.modalVisible= false;
		}
		
	},
    
})

const winnerSlice = createSlice({
	name:'winnerModal',
	initialState: {showWinPlayer :false},
	reducers:{
		showWinner(state, action){
state.showWinPlayer = true;
		}
	}
})


const store = configureStore({
	reducer: {counter: counterSlice.reducer, winnerModal: winnerSlice.reducer}
});

export const modalActions = winnerSlice.reducer;

export const counterActions = counterSlice.actions;

export default store;
