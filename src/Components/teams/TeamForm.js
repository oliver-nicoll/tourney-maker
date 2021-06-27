import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addTeam } from '../../Redux/teamsSlice';

import "../teams/Teams.css"

const TeamForm = () => {
    const dispatch = useDispatch()

    const [teamName, setTeamName] = useState("")

    const teams = useSelector((state) => {
        return state.teams.all
    })



    const addToList = (e) => {
        e.preventDefault()
        if(teamName) {
            dispatch(addTeam({
                team_name: teamName
            }))
        //dispatch an action to backend/reducer
        //add to backend and store
            setTeamName("")
            
        } else {
            //alert you must fill out 
            alert("must fill out box")
        }
    }


    const handleOChange = (e) => {
        setTeamName(e.target.value)
    }

    console.log(teams)
    return (
        <div className="team-form">
            <form onSubmit={addToList}>
                <input type="text" value={teamName} onChange={handleOChange} />
                <input type="submit" value="Create New Team"/>
            </form>
        </div>
    )
}

export default TeamForm