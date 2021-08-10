import React, {useState, useEffect} from 'react'
import Counter from '../scoreboard/counter'



const CounterLikes = (props) => {

    const [count, setCount] = useState(0)
    
    const handleClick = (e) => {
        setCount(prevState => parseInt(prevState) + parseInt(props.inputValue))
      }

    //   useEffect(() => {
    //       console.log(count)
    //       console.log(setCount)
    //       console.log(props.inputValue)
         
    //   }, [])

    return (
        <div>
            <button className="like__btn" onClick={handleClick}> ♥ <div>{count}</div> </button>
        </div>
    )
}

export default CounterLikes
