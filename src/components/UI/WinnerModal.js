import { useSelector, useDispatch } from 'react-redux';

import classes from './WinnerModal.module.css'

const WinnerModal =()=>{
    return <div className={classes.modal}>
        <p className={classes.text}>Winner of this game is <span>{}</span></p>
        <button className={classes.button}>Next round</button>
    </div>
}

export default WinnerModal;