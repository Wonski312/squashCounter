import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../../store/store';

import classes from './WinnerModal.module.css'

const WinnerModal =(props)=>{
    const P1name = useSelector(state => state.ui.P1name)
    const P2name = useSelector(state =>state.ui.P2name)

    let gameWinner = ''
    if(props.player === 1){
    gameWinner = P1name       
}else{
    gameWinner = P2name       
}
const dispatch = useDispatch()
const closeModal = () => dispatch(counterActions.toggleModal())

    return <div className={classes.modal}>
        <p className={classes.text}>Winner of this game is <span>{gameWinner}</span></p>
        <button className={classes.button} onClick={closeModal}>Next round</button>
    </div>
}

export default WinnerModal;