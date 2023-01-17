import classes from "./Player.module.css";

const Player = (props) => {
	const playerColors =
		props.id === "1"
			? `${classes.playerBox} ${classes.player1}`
			: `${classes.playerBox} ${classes.player2}`;

	return (
		<div className={playerColors}>
			<h2 className={classes.playerTitle}>{props.title}</h2>
			<div className={classes.playerPoints}>4</div>
		</div>
	);
};

export default Player;
