import { useDispatch } from "react-redux";
import '../../App.css';
import { counterActions } from "../../store/store";
import classes from './EndGame.module.css'
const EndGame = (props) =>{

    const dispatch = useDispatch();
const playAgain = () =>{
dispatch(counterActions.playAgain())
}

    return <div>
        <p className={classes.text}> You finished</p>
        <p className={classes.text}> Your Match the winner is: <span className={classes.player}> Player {props.winner}</span></p>
    <button className="btn" onClick={playAgain}>play again</button>
    </div>
}

export default EndGame;