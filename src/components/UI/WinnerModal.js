import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../../store/store';

import classes from './WinnerModal.module.css'

const WinnerModal =(props)=>{
const dispatch = useDispatch()
const closeModal = () => dispatch(counterActions.toggleModal())

    return <div className={classes.modal}>
        <p className={classes.text}>Winner of this game is <span>{`Player ${props.player}`}</span></p>
        <button className={classes.button} onClick={closeModal}>Next round</button>
    </div>
}

export default WinnerModal;