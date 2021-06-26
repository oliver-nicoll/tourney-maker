import React  from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import TournamentForm from '../tournaments/TournamentForm'
import "../tournaments/Tournaments.css"

const Tournaments = () => {

    const tournaments = useSelector((state) => {
        return state.tournaments.all
    })


    return (
        <div className="main">
            <h3>Events:</h3>
            <ul>
                {tournaments.map((t, i) => <li className="event__list" key={i}><Link to={`/events/${t.id}`}>{t.tourney_name}</Link>
                </li>)}
            </ul>
            <TournamentForm />
        </div>
    )
}
export default Tournaments