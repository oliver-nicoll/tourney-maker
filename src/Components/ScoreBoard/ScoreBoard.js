import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectCount } from '../../Redux/counter';
import "../scoreboard/ScoreBoard.css"

const ScoreBoard = () => {

    const count = useSelector(selectCount)

    const dispatch = useDispatch()

    return (
        <>
            <div className="score-board">
                <span> Team Score: {count} </span><br/>
                <div>
                    <button onClick={() => dispatch(increment())} data-add="1"> + 1</button>
                    <button onClick={() => dispatch(decrement())} data-subtract="1"> - 1</button>
                </div><br></br>
            </div>
        </>
    )
} 

export default ScoreBoard