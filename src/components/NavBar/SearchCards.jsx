import {useContext} from 'react'
import ContextProvider ,{GlobalStore} from '../context/ContextProvider'

function SearchCards({ img, name, address }) {
    const globalObjContainer = useContext(GlobalStore)
    function addToFav(e) {
        console.log("Added to fav");
        globalObjContainer.setCartData([...globalObjContainer.cartData,{ img, name }]);
        // setCartData([...cartData, { img, name }]);
        
    }
    return (
        <div className="SearchCards">
            <img src={img} className="cardImg" />
            {/* <h5>{name}</h5> */}
            <p>{address}</p>
            <button className="favButton" onClick={addToFav}>
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="#111111" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
            </button>
        </div>
    );
}

export default SearchCards