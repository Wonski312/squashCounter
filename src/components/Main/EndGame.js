import { useDispatch, useSelector } from "react-redux";
import '../../App.css';
import { counterActions } from "../../store/store";
import classes from './EndGame.module.css'
const EndGame = (props) =>{

    const P1name = useSelector(state =>state.ui.P1name)
    const P2name = useSelector(state =>state.ui.P2name)
const P1setPoints = useSelector(state => state.counter.player1Sets)
const P2setPoints = useSelector(state => state.counter.player2Sets)
const P1Points = useSelector(state => state.counter.player2Sets)
const P2Points = useSelector(state => state.counter.player2Sets)

    const dispatch = useDispatch();

    const data ={
        player1: P1name,
player2: P2name,
P1Sets: P1setPoints,
P2Sets: P2setPoints,
P1Points: P1Points,
P2Points: P2Points
    } 

const playAgain = () =>{
    fetch('https://squashcounter-default-rtdb.europe-west1.firebasedatabase.app/games.json',{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(data)
    })
dispatch(counterActions.playAgain())
}

    return <div>
        <p className={classes.text}> You finished</p>
        <p className={classes.text}> Your Match the winner is: <span className={classes.player}> Player {props.winner}</span></p>
    <button className="btn" onClick={playAgain}>play again</button>
    </div>
}

export default EndGame;