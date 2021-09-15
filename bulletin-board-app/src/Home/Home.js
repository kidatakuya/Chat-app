
import logo from './../logo.svg';
// import './../sass/App.scss';
import './../sass/_ress.scss';
import './../sass/index.css';
import './../sass/Home.scss';
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import HomeNav from './HomeNav';
// import HomeFooter from './HomeFooter';

function App() {
  return (
    <div className="Home">
      <HomeHeader />
      <HomeNav />
      <HomeMain />
      
    </div>
  );
}

export default App;
