
import logo from './../logo.svg';
// import './../sass/App.scss';
import './../sass/_ress.scss';
import './../sass/index.css';
import SignHeader from './SignHeader';
import SignMain from './SignMain';
import SignFooter from './SignFooter';

function App() {
  return (
    <div className="App">
      <SignHeader />
      <SignMain />
      <SignFooter />
    </div>
  );
}

export default App;
