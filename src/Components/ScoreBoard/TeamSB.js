import React from 'react'
import Counter from './counter'

function TeamSB(props) {

    return (
        <div className="team">
            <div className="team__name">
                <button className="remove__team" onClick={(e) => props.onTeamRemove}>x</button>
                {props.name}
            </div>
            <div className="team__score">
                <Counter onChange={props.onScoreChange}
                    score={props.score} />
            </div>
        </div>
    )
}

export default TeamSB
