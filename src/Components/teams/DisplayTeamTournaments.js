import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

const DisplayTeamTournaments = () => {

    const { id } = useParams()

    const tournament = useSelector((state) => state.tournaments.all.find((tournament) => tournament.id == id))
    

    return (
        
        <div>
            {tournament.teams.length >= 1 ?
                <div className="tournamentteams__container">
                    Teams:
                        <div>
                            {tournament.teams.map((t, i) => <div key={i}> <br />{i + 1}. {t.team_name} </div>)} 
                        </div>
                </div>
            : "Teams aren't signed up yet - Join today!"}
        </div>
    )
}

export default DisplayTeamTournaments