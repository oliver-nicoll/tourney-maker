import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTournaments, addTournament } from '../../Redux/tournamentSlice';
import Teams from '../teams/Teams'
import "../tournaments/Tournaments.css"

const Tournaments = () => {
    const dispatch = useDispatch()
    
    const [newEventName, setNewEventName] = useState("")
    const [newDate, setNewDate] = useState("")
    const [newDesc, setNewDesc] = useState("")
    const [newHost, setNewHost] = useState("")


    const tournaments = useSelector((state) => {
        return state.tournaments.all
    })
    
    useEffect(() => {
        console.log("mounting tournaments")
        dispatch(fetchTournaments())

        return () => {
            console.log("unmounting tournaments")
        }
    }, [])


    let handleSubmit = (e) => {
        e.preventDefault()
        if(newEventName) {
            dispatch(addTournament({
                tourney_name: newEventName
            }))
            setNewEventName("")
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

    // const handleTeamChange = (e) => {
    //     setNewEventTeam(e.target.value)
    // }
    // const handleOnChange = () => {
    //     setIsChecked(!isChecked);
    //   };


    return (
        <div className="main">
            <h3>Events:</h3>
            <ul>
                {tournaments.map((t, i) => <li key={i}>{t.tourney_name}</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                Tournament Name: <input type="text" value={newEventName} onChange={handleChange} />
                Tournament Date: <input type="text" value={newDate} onChange={handleDateChange} />
                Tournament Description: <input type="text" value={newDesc} onChange={handleDescChange} />                
                Tournament Host: <input type="text" value={newHost} onChange={handleHostChange} />                
                <br></br>
                <input type="submit" value="Add New Tournament" />
            </form>
        </div>
    )
}
export default Tournaments