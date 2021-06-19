import TourneyMaker from './Design/TourneyMaker.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pages from './Components/Pages/Pages'
import Home from './Components/home/Home';
import TeamForm from './Components/teams/TeamForm';
import ScoreBoard from './Components/scoreboard/ScoreBoard';
import Tournaments from './Components/tournaments/Tournaments';
import About from './Components/about/About'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={TourneyMaker} className="App-logo" alt="logo" />
          <Router>
            <div>
              <Route exact path="/" component={ Home } />
              <Route exact path="/about" component={ About } />
              <Route exact path="/new-team" component={ TeamForm } />
              <Route exact path="/tournaments" component={ Tournaments } />
              <Route exact path="/scorekeeper" component={ ScoreBoard } />
            </div>
          </Router>
        < Pages />
      </header>
      
    </div>
  );
}

export default App;
