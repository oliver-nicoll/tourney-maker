import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

const DisplayTeamTournaments = () => {

    const { id } = useParams()

    const tournament = useSelector((state) => state.tournaments.all.find((tournament) => tournament.id == id))
    // add another conditional around it, check out switch

    return (
        
        <div>
            {tournament.teams ? 
                <div className="tournamentteams__container">
                    Teams:
                        {tournament.teams.length <= 8 || tournament.teams.length >= 0 ?
                    
                            <div>
                                {tournament.teams.map((t, i) => <div key={t.id}> <br />{i + 1}. {t.team_name} </div>)} 
                            </div>
                        : "Teams aren't signed up yet - Join today!"}
                </div>
            : ""}
        </div>
    )
}

export default DisplayTeamTournaments