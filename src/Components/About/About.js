import React from 'react';
import picture from '../about/1.png'

import "../about/About.css"

function About() {
    return (
        <div className="about__container">
            <h1>About Us:</h1>
            <h4>This is an educational app that allows you to create 
                and view your tournaments/teams.<br></br> Here at Tourney Maker we strive at keeping the functionality 
                growing and imporving.<br></br> Stay tuned for future updates with the bracket maker
                for the volleyball event you create.
            </h4>
        </div>
    );
}
 
export default About;