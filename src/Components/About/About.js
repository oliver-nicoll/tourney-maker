import React from 'react';
import picture from '../about/1.png'

import "../about/About.css"

function About() {
    return (
        <div className="about__container">
            <div>
                <img className="about__image" src={picture} alt=""/>
            </div>
            
            About
        </div>
    );
}
 
export default About;