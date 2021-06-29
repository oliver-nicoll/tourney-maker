import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { addTeamToTournament } from '../../Redux/tournamentSlice';
import { createRegistrations } from '../../Redux/registrationSlice';
import DisplayTeamTournaments from '../teams/DisplayTeamTournaments'


const SingleTournament = ({match}) => {
    //const { teamId } = match.params
//useSelector to find the tournament with that id from the store and render on page
//add team to tournament here - form 
   const dispatch = useDispatch()

    const { id } = useParams()

    //const team = useSelector(state => selectTeamById(state, teamId))

    const tournament = useSelector((state) => state.tournaments.all.find((tournament) => tournament.id == id))
//just to grab info from store
    const teams = useSelector((state) => state.teams.all)

   
    
    const [teamPick, setTeamPick] = useState("")


    const handleOnChange = (e) => {
        setTeamPick(e.target.value)  
        //console.log(teamPick)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(teamPick)
        if (teamPick, tournament) {
            createRegistration()
            // dispatch(createRegistration(tournament.id, teamPick))
            setTeamPick("")
        } else {
            alert('try again')
        }
    }

    const createRegistration = () => {
        fetch( `http://localhost:3000//api/v1/tournaments/${id}/registrations`,  {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    tournament_id: id,
                    team_id: teamPick
                }
            )
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        
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
                    <DisplayTeamTournaments />
                </div>

                <div className="form__container__team">
                    <br/><br/>
                    <br/><br/>
                    {tournament.teams.length <= 7 ?
                        <form onSubmit={handleSubmit}>
                            <input list="add__team" value={teamPick} onChange={handleOnChange} />
                                <datalist id="add__team">
                                        {teams.map((t, i) => 
                                            <option key={i} value={t.id}>{t.team_name}</option>)} 
                                </datalist>
                            <input type="submit" value="Add Team"/>
                        </form>   
                        : "Slots are filled"
                    } 
                </div>
            </div>
            : "Tournament not Found"}
        </div>
    )
}

export default SingleTournament