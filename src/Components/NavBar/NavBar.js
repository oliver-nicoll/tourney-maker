import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import '../NavBar/NavBar.css'


const NavBar = () => {
    return (
        <div className="navbar">
            <img className="navbar-logo" src='../Design/TourneyMaker.svg' />
            <div className="navbar-search">
                <input className="navbar-searchInput" type="text" />
                <SearchIcon className="navbar-searchIcon" />
            </div>
            <div className="navbar-header">
                <div className="navbar-option">
                    <span className="navbar-optionLineOne">
                        Hello Guest
                    </span>
                    <span className="navbar-optionLineTwo">
                        Sign In
                    </span>
                </div>

                <div className="navbar-option">
                    <span className="navbar-optionLineOne">
                        About
                    </span>
                    <span className="navbar-optionLineTwo">
                        Us
                    </span>
                </div>

                <div className="navbar-option">
                    <span className="navbar-optionLineOne">
                        Tournaments
                    </span>
                    <span className="navbar-optionLineTwo">
                         Events
                    </span>
                </div>

                <div className="navbar-option">
                    <span className="navbar-optionLineOne">
                        Team
                    </span>
                    <span className="navbar-optionLineTwo">
                        Score-Board
                    </span>
                </div>
                
            </div>
        </div>
    )
}

export default NavBar
