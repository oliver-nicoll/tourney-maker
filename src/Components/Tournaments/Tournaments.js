import React, { useState, useEffect } from 'react';
import "../tournaments/Tournaments.css"

const Tournaments = () => {

    const [list, setList] = useState([])
    
    const [tournamentEvent, setTournamentEvent] = useState("")


    useEffect(() => {
        setList(prevList => prevList )
    }, [])

    let addToList = (e) => {
        e.preventDefault()
        if(tournamentEvent) {
            setList(prevList => [...prevList, tournamentEvent])
            setTournamentEvent("")
        }
    }
    
    const handleChange = (e) => {
        setTournamentEvent(e.target.value)
    }


    return (
        <div className="main">
            <h3>Events:</h3>
            <ul>
                {list.map((tournamentEvent, i) => <li key={i}>{tournamentEvent}</li>)}
            </ul>
            <form onSubmit={addToList}>
                <input type="text" value={tournamentEvent} onChange={handleChange} />
                <input type="submit" value="Add New Tournament" />
            </form>

        </div>
    )
}

export default Tournaments