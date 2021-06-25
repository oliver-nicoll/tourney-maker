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
        // console.log("mounting tournaments")
        dispatch(fetchTournaments())

        // return () => {
        //     console.log("unmounting tournaments")
        // }
    }, [])

    const [newEventName, setNewEventName] = useState("")

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


    return (
        <div className="main">
            <h3>Events:</h3>
            <ul>
                {tournaments.map((t, i) => <li key={i}>{t.tourney_name}</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newEventName} onChange={handleChange} />
                <input type="submit" value="Add New Tournament" />
            </form>
        </div>
    )
}

export default Tournaments