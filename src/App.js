import './App.css';
import { Route, Switch } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar'
import Home from './Components/home/Home';
import Teams from './Components/teams/Teams';
import ScoreBoard from './Components/scoreboard/ScoreBoard';
import Tournaments from './Components/tournaments/Tournaments';
import About from './Components/about/About'
import SingleTournament from './Components/tournaments/SingleTournament';

function App() {


  return (
    <div className="App" >
      <NavBar />
      <div className="app__image">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/teams">
            <Teams />
          </Route>
          <Route exact path="/events">
            <Tournaments />
          </Route>
          <Route exact path="/events/:id">
            <SingleTournament />
          </Route>
          <Route exact path="/scoreboard">
            <ScoreBoard  className="team__one"/>
            <ScoreBoard className="team__two" />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
       </div>
    </div>
  );
}

export default App;
