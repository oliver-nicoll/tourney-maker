import TourneyMaker from './Design/TourneyMaker.svg';
import './App.css';
import EventList from './Components/EventList';
import Mode from "./Components/Mode";
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={TourneyMaker} className="App-logo" alt="logo" />
      </header>
      < Mode />
      < ScoreBoard />
      < ScoreBoard />

      < EventList />
    </div>
  );
}

export default App;
