import React, {useState} from 'react';
import "../scoreboard/ScoreBoard.css"

const Counter = () => {

    const [countOne, setCountOne] = useState(0)

    const [countTwo, setCountTwo] = useState(0)

  
    const addToTotalO = (e) => {
        setCountOne(prevTotal => prevTotal + parseInt(e.target.dataset.add))
    }

    const subtractToTalO = (e) => {
        setCountOne(prevTotal => prevTotal - parseInt(e.target.dataset.subtract))
    }

    const addTototalT = (e) => {
        setCountTwo(prevTotal => prevTotal + parseInt(e.target.dataset.add))
    }

    const subtractTotalT = (e) => {
        setCountTwo(prevTotal => prevTotal - parseInt(e.target.dataset.subtract))
    }

    
        return (
            <div className="counter__main">
                <div className="Team__One__Score">
                    <h2 className="team__one__title">Score A: {countOne}</h2>
                    <div className="buttons__one">
                        <button onClick={addToTotalO} data-add="1">+ 1</button>
                        <button onClick={subtractToTalO} data-subtract="1">- 1</button>
                    </div>
                </div>

                <div className="Team__Two__Score">
                    <h2 className="team__two__title">Score B: {countTwo}</h2>
                    <div className="buttons__two">
                        <button onClick={addTototalT} data-add="1">+ 1</button>
                        <button onClick={subtractTotalT} data-subtract="1">- 1</button>
                    </div>
                </div>
            </div>
        );
    
}
 
export default Counter;