import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pages from './Components/Pages/Pages';
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/home/Home';
import TeamForm from './Components/teams/TeamForm';
import ScoreBoard from './Components/scoreboard/ScoreBoard';
import Tournaments from './Components/tournaments/Tournaments';
import About from './Components/about/About'

function App() {
  return (
    <div className="App">
       <Router>
            <div>
              <Route exact path="/about" component={ About } />
              <Route exact path="/teams" component={ TeamForm } />
              <Route exact path="/tournaments" component={ Tournaments } />
              <Route exact path="/scorekeeper" component={ ScoreBoard } />
            </div>
          </Router>
        <NavBar />
      <Home />
      <Pages />
    </div>
  );
}

export default App;
