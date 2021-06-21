import React, {useState} from 'react';
import "../teams/TeamForm.css"

const TeamForm = () => {
   const [teams, setTeams] = useState([])
   const [teamIndv, setTeamIndv] = useState("")

   let addToList = (e) => {
       e.preventDefault()
       if(teamIndv) {
           setTeams(prevTeams => [...prevTeams, teamIndv])
           setTeamIndv("")
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

export default TeamForm