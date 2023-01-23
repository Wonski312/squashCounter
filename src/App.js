import './App.css';
import Wrapper from './components/UI/Wrapper';
import Main from './components/Main/Main';
import SetsPoints from './components/Main/SetsPoints/SetsPoints';
import WinnerModal from './components/UI/WinnerModal';
import EndGame from './components/Main/EndGame';
import Start from './components/Main/Start';

import { useSelector, useDispatch } from 'react-redux';
import classes from'./components/UI/Wrapper.module.css'
import { Fragment } from 'react';

function App() {
  const endGame = useSelector(state => state.counter.endGame);

  const modalVisible  = useSelector(state =>state.counter.modalVisible);
  const addInfo = useSelector(state => state.counter.addinfo)
 
  return (
    
  <Wrapper className={classes.mainPage}>

    <Start></Start>
    {!endGame ?
    <Fragment>
<SetsPoints />
    <Main></Main>
    {modalVisible && <WinnerModal player={addInfo.player}></WinnerModal>}
    </Fragment>
     : <EndGame winner={addInfo.player}/>}
  </Wrapper>
  ) 
}

export default App;
