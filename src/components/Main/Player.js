import classes from "./Player.module.css";
import {useSelector, useDispatch} from 'react-redux'
import { counterActions } from "../../store/store";

const Player = (props) => {
const dispatch = useDispatch();

	const counter = useSelector(state => state.points);
	const playerColors =
		props.id === "1"
			? `${classes.playerBox} ${classes.player1}`
			: `${classes.playerBox} ${classes.player2}`;

const clickHandler = () =>{
dispatch(counterActions.increment());
}

	return (
		<div className={playerColors} onClick={clickHandler}>
			<h2 className={classes.playerTitle}>{props.title}</h2>
			<div className={classes.playerPoints}>{counter}</div>
		</div>
	);
};

export default Player;
