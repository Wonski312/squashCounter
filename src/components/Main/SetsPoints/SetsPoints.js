import { useSelector, useDispatch } from "react-redux"; 

import classes from './SetsPoints.module.css';

const SetsPoints = () =>{

const player1Sets = useSelector(state => state.counter.player1Sets)
const player2Sets = useSelector(state => state.counter.player2Sets)

    return <div className={classes.setsDetails}>
        <p className={classes.text}>Match Details: <span className={classes.setsPoints}>{player1Sets}</span>/<span className={classes.setsPoints}>{player2Sets}</span></p>
    </div>
}

export default SetsPoints;