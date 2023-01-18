import classes from "./Player.module.css";
import {useSelector, useDispatch} from 'react-redux'
import { counterActions } from "../../store/store";

const Player = (props) => {
const dispatch = useDispatch();

	const counterPlayer1 = useSelector(state => state.counter.player1Points);
	const counterPlayer2 = useSelector(state => state.counter.player2Points);
	const playerColors =
		props.id === 1
			? `${classes.playerBox} ${classes.player1}`
			: `${classes.playerBox} ${classes.player2}`;



const clickHandler = () =>{
dispatch(counterActions.increment(props.id));
}

	return (
		<div className={playerColors} onClick={clickHandler}>
			<h2 className={classes.playerTitle}>{props.title}</h2>
			{props.id === 1 ? <div className={classes.playerPoints}>{counterPlayer1}</div>: <div className={classes.playerPoints}>{counterPlayer2}</div>}
		</div>
	);
};

export default Player;
