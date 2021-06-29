import React  from 'react';
import TournamentForm from '../tournaments/TournamentForm'
import DesignGrid from '../tournaments/DesignGrid'

import "../tournaments/Tournaments.css"


const Tournaments = () => {


    return (
        <div className="main">
            <div className="tournament__form">
                <TournamentForm />
            </div><br></br>
            <div className="design__grid">
                <DesignGrid />
            </div>
        </div>
    )
}
export default Tournaments