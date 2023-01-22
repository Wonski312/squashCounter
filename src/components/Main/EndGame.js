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
        <p className={classes.text}> You finished your Match the winner is: <span> Player {props.winner}</span></p>
    <button className="btn" onClick={playAgain}>play again</button>
    </div>
}

export default EndGame;