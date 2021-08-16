import React from 'react';

const Stats = (props) => {
    const teamCount = props.teamSB.length

    const totalPoints = props.teamSB.reduce(function (total, teamSB) {
        return total + teamSB.score
    }, 0)

    const totalGames = props.teamSB.reduce(function (total, team) {
        return team.game
    }, 0)

    return(
        <table className="stats">
            <tbody>
                <tr>
                    <td>Teams:</td>
                    <td>{teamCount}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{totalPoints}</td>
                </tr>
                <tr>
                    <td>Game:</td>
                    <td>{totalGames}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Stats