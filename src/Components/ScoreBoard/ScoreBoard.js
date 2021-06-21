import React, { useState } from 'react';
import "../scoreboard/ScoreBoard.css"

const ScoreBoard = () => {
    const [total, setTotal] = useState(0)

    const addToTotal = (e) => {
        setTotal(prevTotal => prevTotal + parseInt(e.target.dataset.add))
    }

    const subtractFromTotal = (e) => {
        setTotal(prevTotal => prevTotal - parseInt(e.target.dataset.subtract))
    }

    return (
        <>
            <div className="score-board">
                <h4> Team Score: { total }</h4>
                <div>
                    <button onClick={addToTotal} data-add="1"> + 1</button>
                    <button onClick={subtractFromTotal} data-subtract="1"> - 1</button>
                </div>
            </div>
        </>
    )
} 

export default ScoreBoard