import React from 'react'

function SearchCards({img,name, address}) {
    const cartArry = [];
    function addToFav(e){
        console.log("Added to fav");
        cartArry.push({img,name,address});
        console.log(cartArry)
    }   
    return (
        <div className="SearchCards">
            <img src={img} className="cardImg"/>
            <h5>{name}</h5>
            <p>{address}</p>
            <button className="favButton" onClick={addToFav}><p>+</p></button>
        </div>
    );
}

export default SearchCards