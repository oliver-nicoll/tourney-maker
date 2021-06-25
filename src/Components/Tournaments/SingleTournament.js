import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { getById } from '../../Redux/registrationSlice';

const SingleTournament = ( ) => {
//useSelector to find the tournament with that id from the store and render on page
//add team to tournament here - form 
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getById())
        return () => {
            console.log("unmounting")
        }
    }, [])

    //const findTournament = useSelector((state) => getById(state, id))
    console.log(useParams())
    return(
        <div>
            Single Tournament Page
        </div>
    )
}

export default SingleTournament