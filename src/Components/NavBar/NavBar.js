import React from 'react'
import logo from './TourneyMaker.svg'
import '../NavBar/NavBar.css';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <div className="navbar">
            <Link to="/">
                <img src={ logo } className="navbar-logo" alt="logo" />
            </Link>
            
            <div className="navbar-header">
                <div className="navbar-option">
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "black",
                        textDecoration: 'none'
                    }} 
                    to="/about" 
                    className="navbar-optionLineTwo" >
                       About Us
                    </NavLink>
                </div>
                

                <div className="navbar-option">
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "black",
                        textDecoration: 'none'
                    }} 
                    to="/events" 
                    className="navbar-optionLineTwo">
                        Tournaments
                    </NavLink>
                </div>

                <div className="navbar-option">
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "black",
                        textDecoration: 'none',
                        textSize: 1.2
                    }} 
                    to="/teams" 
                    className="navbar-optionLineTwo">
                        Teams
                    </NavLink >
                </div>
                

                <div className="navbar-option">
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "black",
                        textDecoration: 'none'
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
