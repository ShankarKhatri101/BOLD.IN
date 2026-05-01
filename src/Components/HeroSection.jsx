import React from 'react';
import heroImage from '../assets/HeroImg2.png'; 

function HeroSection() {
    return (
        <div className="HeroSection">
            
            <img src={heroImage} alt="Nike Hero" />
            
            <div className="heroText">
                <h1>IT'S BETTER ON BOLD.IN</h1>
                <p>Move, Shop and Celebrate with the best of Bold.</p>
                <button className="shopButton">Sign Up</button>
            </div>
        </div>
    );
}

export default HeroSection;