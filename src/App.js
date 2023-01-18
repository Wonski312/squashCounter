import './App.css';
import Wrapper from './components/UI/Wrapper';
import Main from './components/Main/Main';
import SetsPoints from './components/Main/SetsPoints/SetsPoints';
import WinnerModal from './components/UI/WinnerModal';

function App() {
  return <Wrapper className="mainPage">
    <SetsPoints />
    <Main></Main>
    <WinnerModal></WinnerModal>
  </Wrapper>;
}

export default App;
