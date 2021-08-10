import React from 'react';
import TeamForm from '../teams/TeamForm'
import TeamGrid from './TeamGrid';
import "../teams/Teams.css"

const Teams = () => {
  
    return (
        <div className="team">
          <br></br>
            <details>
              <summary>Create Team</summary>
                <br></br>
                  <div className="team-form">
                      <TeamForm />
                  </div>
                <br></br>
            </details>

                <div className="team__card">
                    <TeamGrid />
                </div>
        </div>
    )
}

export default Teams