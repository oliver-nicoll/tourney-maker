import React from 'react'
import Counter from './counter'

class TeamSB extends React.Component {
   
    render() {
        return (
            <div className="team">
                <div className="team__name">
                    <button className="remove__team" onClick={this.props.onRemoveTeam}>✖</button>
                    {this.props.name}
                </div>
                <div className="team__score">
                    <Counter onChange={this.props.onScoreChange}
                        score={this.props.score} />
                </div>
            </div>
        )
    }
    
}

export default TeamSB
