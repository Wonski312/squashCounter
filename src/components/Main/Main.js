import React from "react";

import { useSelector } from "react-redux";
import classes from "./Main.module.css";
import Player from "./Player";
import { useEffect } from "react";
const Main = () => {
	const player1title = useSelector(state => state.ui.P1name);
	
	const players = [
		{key: 1,
		title: player1title,
		id: 1
		},
		{key: 2,
			title: 'player 2',
			id:2
			}
	]


	
	return (
		<div className={classes.playersFields}>
			{players.map(player =>{
				return <Player key={player.key} title={player.title} id={player.id}></Player>
			})}
			{/* <Player key="1" title='player 1' id='1' />
			<Player key="2"  title='player 2' id='2' /> */}
		</div>
	);
};

export default Main;
