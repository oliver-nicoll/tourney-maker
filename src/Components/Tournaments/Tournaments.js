import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTournaments, addTournament } from '../../Redux/tournamentSlice';

import "../tournaments/Tournaments.css"

const Tournaments = () => {

    const dispatch = useDispatch()

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

    const [newTournamentEvent, setNewTournamentEvent] = useState("")

    let addToList = (e) => {
        e.preventDefault()
        if(newTournamentEvent) {
           
            dispatch(addTournament({
                tourney_name: newTournamentEvent
            }))
            setNewTournamentEvent("")
        } else {
            alert("must fill out box")
        }
    }
    
    const handleChange = (e) => {
        setNewTournamentEvent(e.target.value)
    }


    return (
        <div className="main">
            <h3>Events:</h3>
            <ul>
                {tournaments.map((te, i) => <li key={i}>{te.tourney_name}</li>)}
            </ul>
            <form onSubmit={addToList}>
                <input type="text" value={newTournamentEvent} onChange={handleChange} />
                <input type="submit" value="Add New Tournament" />
            </form>

        </div>
    )
}

export default Tournaments