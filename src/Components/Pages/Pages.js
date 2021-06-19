import React, { useState } from 'react';
import About from '../about/About';
import Tournaments from '../tournaments/Tournaments';
import TeamForm from '../teams/TeamForm';
import ScoreBoard from '../scoreboard/ScoreBoard';
import Home from '../home/Home';

const Pages = () => {
    const [page, setPage] = useState("about")

    const renderPage = () => {
        switch (page) {
            case "about":
                
                return <About />;
            case "tournaments":
            
                return <Tournaments />;
            case "teams":
            
                return <TeamForm />;
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