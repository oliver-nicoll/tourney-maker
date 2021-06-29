import React from 'react';
import Counter from './counter.js'
// import picture from './score.png'
import "../scoreboard/ScoreBoard.css"

const ScoreBoard = () => {

    

    return (
        <>
            <div className="scoreboard__main">
                <div className="picture__scoreboard">
                    <div className="counter__scoreboard">
                        <Counter />
                    </div>
                    {/* <img src={picture} /> */}
                </div>
            </div>
        </>
    )
} 

export default ScoreBoard