import { useDispatch } from "react-redux";

const EndGame = (props) =>{

    const dispatch = useDispatch();
const playAgain = () =>{
dispatch()
}

    return <div>
        <p> You finished your Match the winner is: <span>{props.winner}</span></p>
    <button onClick={playAgain}>play again</button>
    </div>
}

export default EndGame;