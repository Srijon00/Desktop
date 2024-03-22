// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbars';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <People/>
    </div>
  );
}

export default App;