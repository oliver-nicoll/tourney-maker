import React from 'react';
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { getById } from '../../Redux/registrationSlice';

const DisplayTeamTournaments = () => {

    const { id } = useParams()
    //const state = useSelector(state =>  state.registration.teams.find((team) => team.id == id))

    return (
        <div>
            Teams: 
        </div>
    )
}

export default DisplayTeamTournaments