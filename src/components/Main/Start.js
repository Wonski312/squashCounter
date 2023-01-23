import { useSelector, useDispatch } from 'react-redux'
import { useRef } from 'react'

import { uiActions } from '../../store/ui-slice'


import Wrapper from '../UI/Wrapper'
import '../../App.css'
import classes from './Start.module.css'
const Start = () =>{

    const dispatch = useDispatch()
    const player1 = useRef('')
    const player2 = useRef('')


const startHandler = (event) =>{
event.preventDefault();
// console.log(player1.current.value);
// console.log(player2.current.value);
dispatch(uiActions.toogleStart({player1name: player1.value, player2name: player2.value }))
}


    return <Wrapper className={classes.startBox}>
<h1>Squash Points Counter
</h1>

<form onSubmit={startHandler} className={classes.form}>
<label htmlFor='P1name'>Player 1 Name</label>
<input id='P1name' type='text' className={classes.inputs} ref={player1}></input>
<label htmlFor='P2name'>Player 2 Name</label>
<input id='P2name' type='text' className={classes.inputs} ref={player2}></input>

<button className='btn' >Start</button>
</form>


    </Wrapper> 
}

export default Start;

