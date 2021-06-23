import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import '../NavBar/NavBar.css';
import { NavLink } from 'react-router-dom';
// import { withRouter  } from 'react-router-dom';


const NavBar = (props) => {


    console.log(props)

    
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
                    <NavLink 
                    activeStyle={{
                        fontWeight: "bold",
                        color: "white"
                    }} 
                    to="/login" 
                    className="navbar-optionLineTwo">
                        Sign In
                    </NavLink >
                </div>

                <div className="navbar-option">
                    <span className="navbar-optionLineOne">
                        
                    </span>
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "white"
                    }} 
                    to="/about" 
                    className="navbar-optionLineTwo" >
                       About Us
                    </NavLink>
                </div>

                <div className="navbar-option">
                    <span className="navbar-optionLineOne">
                        
                    </span>
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "white"
                    }} 
                    to="/events" 
                    className="navbar-optionLineTwo">
                        Tournaments & Events
                    </NavLink>
                </div>

                <div className="navbar-option">
                    <span className="navbar-optionLineOne">
                       
                    </span>
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "white"
                    }} 
                    to="/teams" 
                    className="navbar-optionLineTwo">
                        Teams
                    </NavLink >
                </div>

                <div className="navbar-option">
                    <span className="navbar-optionLineOne">
                       
                    </span>
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "white"
                    }} 
                    to="/scoreboard" 
                    className="navbar-optionLineTwo">
                        Score-Board
                    </NavLink >
                </div>
                
            </div>
        </div>
    )
}

// export default withRouter(NavBar);

export default NavBar;
