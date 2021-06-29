import React from 'react'
//import SearchIcon from '@material-ui/icons/Search';

//import logo from './logomaker.png'
import logo from './TourneyMaker.svg'
import '../NavBar/NavBar.css';
import { NavLink, Link } from 'react-router-dom';
// import { withRouter  } from 'react-router-dom';


const NavBar = (props) => {

    return (
        <div className="navbar">
            <Link to="/"><img src={ logo } className="navbar-logo" alt="logo" />
            </Link>
            
            <div className="navbar-header">
                <div className="navbar-option">
                    <span className="navbar-optionLineOne">
                        
                    </span>
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "black"
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
                        color: "black"
                    }} 
                    to="/events" 
                    className="navbar-optionLineTwo">
                        Tournaments
                    </NavLink>
                </div>

                <div className="navbar-option">
                    <span className="navbar-optionLineOne">
                       
                    </span>
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "black"
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
                        color: "black"
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

export default NavBar;
