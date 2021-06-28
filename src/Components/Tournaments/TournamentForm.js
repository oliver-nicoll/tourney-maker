import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTournament } from '../../Redux/tournamentSlice';

import "../tournaments/Tournaments.css"


const TournamentForm = () => {
    const dispatch = useDispatch()

    const [newEventName, setNewEventName] = useState("")
    const [newDate, setNewDate] = useState("")
    const [newDesc, setNewDesc] = useState("")
    const [newHost, setNewHost] = useState("")


    let handleSubmit = (e) => {
        e.preventDefault()
        if(newEventName) {
            dispatch(addTournament({
                tourney_name: newEventName,
                date: newDate,
                description: newDesc,
                host: newHost
            }))
            setNewEventName("")
            setNewDate("")
            setNewDesc("")
            setNewHost("")
        } else {
            alert("must fill out box")
        }
    }
    
    const handleChange = (e) => {
        setNewEventName(e.target.value)
    }

    const handleDateChange = (e) => {
        setNewDate(e.target.value)
    }

    const handleDescChange = (e) => {
        setNewDesc(e.target.value)
    }

    const handleHostChange = (e) => {
        setNewHost(e.target.value)
    }


return (
    <div className="form__tournament">
       <strong><em>Create New Tournament:</em></strong>  
       <br></br>
       <br></br> 
       <form onSubmit={handleSubmit}>
            Tournament Name: <input type="text" value={newEventName} onChange={handleChange} /><br></br>
            Tournament Date: <input type="text" value={newDate} onChange={handleDateChange} /><br></br>
            Tournament Description: <input type="text" value={newDesc} onChange={handleDescChange} /> <br></br>               
            Tournament Host: <input type="text" value={newHost} onChange={handleHostChange} /> <br></br>               
            <br></br>
            <input type="submit" value="Add New Tournament" /><br></br>
        </form>
    </div>
)
}
export default TournamentForm