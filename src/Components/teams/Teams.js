import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTeams, addTeam } from '../../Redux/teamsSlice';

import "../teams/Teams.css"

const Teams = (id: id) => {
    const dispatch = useDispatch()

    const teams = useSelector((state) => {
        return state.teams.all
    })
   
    useEffect(() => {
        // console.log("mounting teams")
        dispatch(fetchTeams())
        
       
     }, [])

   

   const [teamName, setTeamName] = useState("")

   let addToList = (e) => {
       e.preventDefault()
       if(teamName) {
          dispatch(addTeam({
              team_name: teamName
          }))
        //dispatch an action to backend/reducer
        //add to backend and store
           setTeamName("")
           
       } else {
           //alert you must fill out 
           alert("must fill out box")
       }
   }

//    const handleDeleteSubmit = (e) => {
//        e.preventDefault()
//        dispatch(deleteTeam({id: id}))
//    }


   const handleChange = (e) => {
       setTeamName(e.target.value)
   }

    return (
        <div className="team-form">
            <h3>Teams:</h3>
            <div className="team-card">
                {teams.map((t, i) => <div classname="indv-team"key={i}>{t.team_name} <button>Delete</button> <br /></div>)}
            </div>
            <form onSubmit={addToList}>
                <input type="text" value={teamName} onChange={handleChange} />
                <input type="submit" value="Create New Team"/>
            </form>
        </div>
    )
}
// key={team.id} onClick={handleDeleteSubmit}
export default Teams