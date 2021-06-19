import React, { useState } from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Tournaments from './Components/Tournaments/Tournaments';
import Teams from './Components/Teams/Teams';
import ScoreBoard from './Components/ScoreBoard/ScoreBoard'

const Pages = () => {
    const [page, setPage] = useState('about')

    const renderPage = () => {
        switch (page) {
            case "about":
                
                return <About />;
            case "tournaments":
            
                return <Tournaments />;
            case "teams":
            
                return <Teams />;
            case "scoreboard":
            
                return <ScoreBoard />;
        
            default:
                return <Home />;
        }
    }

    return (
        <div>
            <nav>
                <button onClick={() => setPage("about")}>About</button>
                <button onClick={() => setPage("tournaments")}>Tournaments</button>
                <button onClick={() => setPage("teams")}>Teams</button>
                <button onClick={() => setPage("scoreboard")}>Score Board</button>
            </nav>
            <div>
                {renderPage()}
            </div>
        </div>
    )
}

export default Pages