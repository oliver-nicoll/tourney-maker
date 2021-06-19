import TourneyMaker from './Design/TourneyMaker.svg';
import './App.css';
import Pages from './Components/Pages/Pages'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={TourneyMaker} className="App-logo" alt="logo" />
        < Pages />
      </header>
      
    </div>
  );
}

export default App;
