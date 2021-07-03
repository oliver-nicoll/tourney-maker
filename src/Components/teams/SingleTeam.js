import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

const SingleTeam = ({match}) => {
//useSelector to find the tournament with that id from the store and render on page
//add team to tournament here - form 
    // const { teamId } = match.params
    const { id } = useParams()

    const team = useSelector((state) => state.teams.all.find((team) => team.id == id))
    
    

//just to grab info from store
    //const teams = useSelector((state) => state.teams.all)


    return(
        <div>
            {team ?
            <div className="team__container">
                <div className="team__name">
                    {team.team_name }
                </div>
                <div className="team__info">
                    Captain: {team.team_captain}<br/><br/>
                    
                    Players: {team.players}
                <br/><br/>
                    Ranked: {team.ranked}
                </div>
            </div>
            : "Team not Found"}
        </div>
    )
}

export default SingleTeam