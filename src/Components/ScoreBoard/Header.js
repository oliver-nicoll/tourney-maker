import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';


const Header = (props) => {

    return(
        <div className="header">
            <Stats teamSB={props.teamSB} />
            <h1>Scoreboard</h1>
            <Stopwatch />

        </div>
    ) 

}
export default Header;