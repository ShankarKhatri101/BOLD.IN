import React from 'react'

function Card({src}) {
    return (
        <div className="cards">
            <img src={src} className="Card" alt="CardImage" />
        </div>
    )
}

export default Card