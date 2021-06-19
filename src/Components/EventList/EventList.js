import React, { useState, useEffect } from 'react';

const EventList = () => {

    const [list, setList] = useState([])
// item
    const [tournamentEvent, setTournamentEvent] = useState("")

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

export default EventList