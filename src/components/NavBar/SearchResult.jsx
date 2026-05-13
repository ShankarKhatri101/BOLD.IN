import { useState, useEffect } from 'react'
import SearchCards from './SearchCards'

function SearchResult() {

  const [data, setData] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    async function fetchDataFun() {
      const url = await fetch("https://fakestoreapi.com/products/")
      const respons = await url.json()
      const fetchData = respons
      setData(fetchData)

      console.log(fetchData)
      setData(fetchData)
    }
    fetchDataFun()
  }, [])


  return (
    <div id="SearchResult">
      {data.map((e) => {
        return <SearchCards
          key={e.id}
          img={e.image}
          name={e.title}

        />
      })}
    </div>
  )
}

export default SearchResult