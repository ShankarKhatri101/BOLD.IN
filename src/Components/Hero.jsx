import React from 'react'

function Hero() {
    return (
        <div className="Hero" >
            <img className="HeroImg" src="https://images-static.nykaa.com/uploads/b922ca2e-0fac-4d5e-983b-8859d8ff30cc.png?" alt="IT'S BETTER ON NIKE.IN" srcset="" loading="lazy" decoding="async"></img>
            <div className="HeroText">
                <h1 className="HeroHeading"> IT'S BETTER ON NIKE.IN</h1>
                <p>Move, Shop and Celebrate with the best of Nike.</p>
                <button className= "HeroButton">Sing Up</button>
            </div>

        </div>
    )
}

export default Hero