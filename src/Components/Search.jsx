import React from 'react'
import SearchResult from './SearchResult'

function Search({ setTurn }) {
  return (

    <div className="Search">
      <div className="searchFirstyDiv">  <input type="text" placeholder="Search..." />
        <button onClick={() => { setTurn(false) }}>Cancel</button></div>
        <SearchResult/>
    </div>)
}

export default Search