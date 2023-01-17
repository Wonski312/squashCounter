import React from "react";  
import classes from './Main.module.css';
import Player from "./Player";
const Main = () =>{
return <div className={classes.playersFields}>
    <Player title='player 1' id='1'/>
    <Player title='player 2' id='2'/>
</div>
}

export default Main;