import './App.css';
import { Route, Switch } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar'
import Home from './Components/home/Home';
import Teams from './Components/teams/Teams';
import ScoreBoard from './Components/scoreboard/ScoreBoard';
import Tournaments from './Components/tournaments/Tournaments';
import About from './Components/about/About'

function App() {


  return (
    <div className="App" >
      <NavBar />
      <div className="app__image">
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/events">
            <Tournaments />
          </Route>
          <Route path="/scoreboard">
            <ScoreBoard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
       </div>
    </div>
  );
}

export default App;
