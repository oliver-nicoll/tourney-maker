import React from 'react';
import "../scoreboard/ScoreBoard.css"

function Counter(props) {
    
        return (

            <div className="counter">
                <button className="counter__action decrement" onClick={() => props.onChange(-1)}>-</button>
                    <div className="counter__score">
                        {props.score}
                    </div>
                <button className="counter__action increment" onClick={() => props.onChange(1)}>+</button>
            </div>
        );
    
}

 
export default Counter;