import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Checkbox from '../teams/checkbox.js'

import { fetchTeams, addTeam } from '../../Redux/teamsSlice';

import "../teams/Teams.css"

const Teams = () => {
    const dispatch = useDispatch()

    const teams = useSelector((state) => {
        return state.teams.all
    })

    useEffect(() => {
        // console.log("mounting teams")
        dispatch(fetchTeams())
        
        }, [])

    const [teamName, setTeamName] = useState("")

    const [checkedItems, setCheckedItems] = useState({})

    const handleChange = (event) => {
        // updating an object instead of a Map
        setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
    }
  
    useEffect(() => {
        console.log("checkedItems: ", checkedItems);
      }, [checkedItems]); 

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


//    const handleDeleteSubmit = (e) => {
//        e.preventDefault()
//        dispatch(deleteTeam({id: id}))
//    }


    const handleOChange = (e) => {
        setTeamName(e.target.value)
    }

    console.log(teams)
    return (
        <div className="team-form">
            <br/>
            <form onSubmit={addToList}>
                <input type="text" value={teamName} onChange={handleOChange} />

                <input type="submit" value="Create New Team"/>
            </form>
            <br />
            <div>
                {teams.map((t, i) => <label key={i}> {t.team_name} <Checkbox name={t.team_name} checked={checkedItems[t.team_name]} onChange={handleChange}/> </label>)}
            </div>
        </div>
    )
}

export default Teams