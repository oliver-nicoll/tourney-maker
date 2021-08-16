import React from 'react';

import "../about/About.css"

function About() {
    return (
        <div className="about__container">
            <h1 className="about__title">About Us:</h1>
            <h4 className="about__body">This is an educational app that allows you to create 
                and view your tournaments/teams.<br></br> Here at Tourney Maker we strive at keeping the functionality 
                growing and imporving.<br></br> Stay tuned for future updates with the bracket maker
                for the volleyball event you create.
            </h4>
        </div>
    );
}
 
export default About;