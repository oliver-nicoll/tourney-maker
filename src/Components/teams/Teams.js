import React from 'react';
import TeamForm from '../teams/TeamForm'
import TeamGrid from './TeamGrid';
import "../teams/Teams.css"

const Teams = () => {
  
    return (
        <div className="teams__container">
          <br></br>
            <details className="create__team__dropdown">
              <summary className="title__summary">Create Team</summary>
                <br></br>
                  <div className="team__form">
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