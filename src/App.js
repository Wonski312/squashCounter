import './App.css';
import Wrapper from './components/UI/Wrapper';
import Main from './components/Main/Main';
import SetsPoints from './components/Main/SetsPoints/SetsPoints';
import WinnerModal from './components/UI/WinnerModal';

import { useSelector, useDispatch } from 'react-redux';
import classes from'./components/UI/Wrapper.module.css'

function App() {

  const modalVisible  = useSelector(state =>state.counter.modalVisible);
  const addInfo = useSelector(state => state.counter.addinfo)
  console.log(addInfo);
  return <Wrapper className={classes.mainPage}>
    <SetsPoints />
    <Main></Main>
    {modalVisible && <WinnerModal player={addInfo.player}></WinnerModal>}
  </Wrapper>;
}

export default App;
