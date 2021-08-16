import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import "./Bracket.css"
import bracket from "../Bracket/bracketbground.png"
import Teams from "../../teams/Teams"
const Bracket = () => {

    const tournament = useSelector((state) => state.tournaments.all.find((tournament) => tournament.id == id))

    
    const { id } = useParams()
    
    const tTName = tournament.teams.map((team) => team.team.team_name)
    
    function shuffleArray(arr) {
        let currentIndex = arr.length;
        let temporaryValue, randomIndex

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)

                currentIndex -= 1
            temporaryValue = arr[currentIndex]
            arr[currentIndex] = arr[randomIndex]
            arr[randomIndex] = temporaryValue
        }
        return arr
    }
    //each new game instance is each round, has opponent team and team
   
    return (
        <div className="bracket__container">
            <img src={ bracket } className="bracket__background" alt="bracket" />
                {console.log(shuffleArray(tTName))}
                <div className="bracket__teams__rnd__one">
                    <div className="bracket-options">
                        <span className="bracket-optionLineOne">
                            Team One
                        </span>
        
                        <span className="bracket-optionLineTwo" >
                            Team Two
                        </ span>
                    </div>
                    
                    <div className="bracket-options">
                        <span className="bracket-optionLineOne">
                            Team Three
                        </span>
        
                        <span className="bracket-optionLineTwo" >
                            Team Four
                        </ span>
                    </div>

                    <div className="bracket-options">
                        <span className="bracket-optionLineOne">
                            Team Five
                        </span>
        
                        <span className="bracket-optionLineTwo" >
                            Team Six
                        </ span>
                    </div>

                    <div className="bracket-options">
                        <span className="bracket-optionLineOne">
                            Team Seven
                        </span>
        
                        <span className="bracket-optionLineTwo" >
                            Team Eight
                        </ span>
                    </div>
                </div>

                <div className="bracket__teams__rnd__two">
                        <div className="bracket-options">
                            <span className="bracket-optionLineOne">
                                Team One
                            </span>
            
                            <span className="bracket-optionLineTwo" >
                                Team Two
                            </ span>
                        </div>

                        
                        <div className="bracket-options">
                            <span className="bracket-optionLineOne">
                                Team Three
                            </span>
            
                            <span className="bracket-optionLineTwo" >
                                Team Four
                            </ span>
                        </div>
                </div>

                    <div className="bracket__teams__semi__finals">
                        <div className="bracket-options">
                            <span className="bracket-optionLineOne">
                                Team One
                            </span>
            
                            <span className="bracket-optionLineTwo" >
                                Team Two
                            </ span>
                        </div>
                    </div>

                    <div className="bracket__teams__winner">
                        <div className="bracket-options">
                                <span className="bracket-optionLineOne">
                                    Winner:
                                </span>
                        </div>
                    </div>
        </div>
    )
}

export default Bracket