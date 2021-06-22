import './App.css';
import { useSelector, useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { actionCreators } from './State/index';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/home/Home';
import Teams from './Components/teams/Teams';
import ScoreBoard from './Components/scoreboard/ScoreBoard';
import Tournaments from './Components/tournaments/Tournaments';
import About from './Components/about/About'
//import {decrement, increment} from "./Redux/counter"

function App() {

  const state = useSelector((state) => state.counter);

  const dispatch = useDispatch()

  // const { addTeam, removeTeam, addEvent, removeEvent } = bindActionCreators(actionCreators, dispatch)

  
  console.log(state)

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
