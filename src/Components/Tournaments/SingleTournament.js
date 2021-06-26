import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { addTeamToTournament } from '../../Redux/tournamentSlice';
//import Team from '../teams/Teams'
//import { getById } from '../../Redux/registrationSlice';

const SingleTournament = ( ) => {
//useSelector to find the tournament with that id from the store and render on page
//add team to tournament here - form 
   const dispatch = useDispatch()

    const { id } = useParams()

    const tournament = useSelector((state) => state.tournaments.all.find((tournament) => tournament.id == id))
//just to grab info from store
    const teams = useSelector((state) => state.teams.all)
   
    const [teamPick, setTeamPick] = useState("")

    const handleOnChange = (e) => {
        setTeamPick(e.target.value)
       
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTeamToTournament(tournament.id, teamPick))

        console.log(teamPick)
        setTeamPick("")
    }

    return(
        <div>
            {tournament ?
            <div className="tournament__container">
                <div className="tournament__name">
                    {tournament.tourney_name }
                </div>
                <div className="tournament__info">
                Date: {tournament.date}<br/><br/>Host:{tournament.host}<br/><br/>
                    Description: {tournament.description}
                </div>
                <div>
                <br/><br/>
                <br/><br/>
                <form onSubmit={handleSubmit}>
                    <input list="add__team" value={teamPick} onChange={handleOnChange} />
                    <datalist id="add__team">
                        {teams.map((t) => <option key={t.id} value={t.id}>{t.team_name}</option> )}
                    </datalist>
                    <input type="submit" value="Add Team"/>
                </form>
                </div>
            </div>
            : "Tournament not Found"}
        </div>
    )
}

export default SingleTournament