import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTeams } from '../../Redux/teamsSlice';
import "../teams/Teams.css"

const Teams = () => {
//    const [teams, setTeams] = useState([])
   const [teamIndv, setTeamIndv] = useState("")

   const teams = useSelector((state) => state.teams.all)
   const dispatch = useDispatch()
   
   
   useEffect(() => {
       const fetchedTeams = dispatch(fetchTeams().then(() => {
           
       }))
    //    dispatch(fetchTeams())
    console.log(fetchedTeams)
     
    }, [])
    

   let addToList = (e) => {
       e.preventDefault()
       if(teamIndv) {
        //    setTeams(prevTeams => [...prevTeams, teamIndv])
        //    setTeamIndv("")
       }
   }

   const handleChange = (e) => {
       setTeamIndv(e.target.value)
   }

    return (
        <div className="team-form">
            <h3>Teams:</h3>
            <ul>
                {teams.map((teamIndv, i) => <li key={i}>{teamIndv}</li>)}
            </ul>
            <form onSubmit={addToList}>
                <input type="text" value={teamIndv} onChange={handleChange} />
                <input type="submit" value="Create New Team"/>
            </form>
        </div>
    )
}

export default Teams