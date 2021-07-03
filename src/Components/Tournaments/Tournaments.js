import React  from 'react';
import TournamentForm from '../tournaments/TournamentForm'
import TournamentGrid from './TournamentGrid'

import "../tournaments/Tournaments.css"


const Tournaments = () => {


    return (
        <div className="main">
            <br></br>
            <details>
                <summary> Create Tournament </summary>
                <div className="tournament__form">
                    <TournamentForm />
                </div>
            </details>
            <br></br>
            <div className="design__grid">
                <TournamentGrid />
            </div>
        </div>
    )
}
export default Tournaments