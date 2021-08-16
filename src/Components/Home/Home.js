import React from 'react';
import picture from '../home/3.png'
import "../home/Home.css";


const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={picture} alt=""/>
            </div>
        </div>
    );
};

export default Home