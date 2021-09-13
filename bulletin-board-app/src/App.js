import logo from './logo.svg';
// import './App.scss';
import Sign from './Sing/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Route exact path="/Sing" component={Sing} /> */}
      </header>
    </div>
  );
}

export default App;
