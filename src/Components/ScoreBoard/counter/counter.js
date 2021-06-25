import React, {useState} from 'react';

function Counter() {
    const [total, setTotal] = useState(0)
  
    function addToTotal(e) {
        setTotal(prevTotal => prevTotal + parseInt(e.target.dataset.add))
    }

    function subToTal(e) {
        setTotal(prevTotal => prevTotal - parseInt(e.target.dataset.add))
    }

    // render() { 
        return (
            <>
                <p>Your total is: {total}</p>
                <div>
                    <button onClick={addToTotal} data-add="1">+ 1</button>
                    <button onClick={subToTal} data-add="1">- 1</button>
                </div>
            </>
        );
    // }
}
 
export default Counter;