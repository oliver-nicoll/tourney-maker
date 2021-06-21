import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import '../NavBar/NavBar.css';



const NavBar = () => {
    return (
        <div className="navbar">
            <img src='../logo/logomaker.svg' className="navbar-logo" alt="logo" />
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
                        
                    </span>
                    <span className="navbar-optionLineTwo">
                       About Us
                    </span>
                </div>

                <div className="navbar-option">
                    <span className="navbar-optionLineOne">
                        
                    </span>
                    <span className="navbar-optionLineTwo">
                        Tournaments & Events
                    </span>
                </div>

                <div className="navbar-option">
                    <span className="navbar-optionLineOne">
                       
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
