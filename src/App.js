import './App.css';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchTournaments } from './Redux/tournamentSlice';
import { fetchTeams } from './Redux/teamsSlice';
import {  useDispatch } from 'react-redux';

// import { FooterContainer } from './Containers/Footer'

import NavBar from './Components/NavBar/NavBar'
import Home from './Components/home/Home';
import Teams from './Components/teams/Teams';
import ScoreBoard from './Components/scoreboard/ScoreBoard';
import Tournaments from './Components/tournaments/Tournaments';
import About from './Components/about/About'
import SingleTournament from './Components/tournaments/SingleTournament';
import SingleTeam from './Components/teams/SingleTeam';
import Bracket from './Components/tournaments/Bracket/Bracket';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    // console.log("mounting teams")
    dispatch(fetchTeams())
    
    return () => {
      console.log("unmounting teams")
  }
  }, [])
  
  useEffect(() => {
      // console.log("mounting tournaments")
      dispatch(fetchTournaments())

      return () => {
          console.log("unmounting tournaments")
      }
  }, [])


  return (
    <div className="Body" >
      <NavBar />
      <div className="app__switch">
        <div>
          <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/teams">
                <Teams />
              </Route>
              <Route exact path="/teams/:id">
                <SingleTeam />
              </Route>
              <Route exact path="/events">
                <Tournaments />
              </Route>
              <Route exact path="/events/:id">
                <SingleTournament />
              </Route>
              <Route exact path="/scoreboard">
                <ScoreBoard  className="score__board"/>
              </Route>
              <Route exact path="/events/:id/bracket">
                <Bracket  className="bracket"/>
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
          </Switch>
        </div>
      </div>
      {/* <FooterContainer /> */}
    </div>
  );
}

export default App;
