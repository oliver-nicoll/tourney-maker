import React from 'react';
import Header from './Header.js'
import AddTeamForm from './AddTeamForm.js';
import TeamSB from './TeamSB.js';


class ScoreBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teamSB: [
                {
                    name: 'Team A',
                    score: 0,
                    game: 1
                },
                {
                    name: 'Team B',
                    score: 0,
                    game: 1
                }
            ]
        };
        this.onScoreChange = this.onScoreChange.bind(this)
        this.onTeamAdd = this.onTeamAdd.bind(this)
        // this.onTeamRemove = this.onTeamRemove.bind(this)
    }
            
    
    onScoreChange = (index, delta) => {
        this.state.teamSB[index].score += delta;
        this.setState(this.state);
    }
    
    onTeamAdd(name) {
        this.state.teamSB.push({name: name, score: 0, game: 1})
        this.setState(this.state)
    }
    
    onTeamRemove(e) {
        const target = e.target.value;
        console.log(target)
        // this.state.teamSB.splice(index, 1)
        // this.setState(this.state)
    }
    
    render() {
        return (
                <div className="scoreboard__main">
                   <Header teamSB={this.state.teamSB}/>
                   <div className="teams">
                       {this.state.teamSB.map(function (team, index) {
                           return (
                               <TeamSB 
                                name={team.name}
                                score={team.score}
                                game={team.game}
                                key={team.name}
                                onScoreChange={(delta) => this.onScoreChange(index, delta)}
                                onRemove={() => this.onTeamRemove}
                                />
                           );
                        }.bind(this)
                       )}
                   </div>
                   <AddTeamForm onAdd={this.onTeamAdd} />
                </div>
        )
    }
}

export default ScoreBoard