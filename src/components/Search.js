import { useState } from 'react'

// styles
import './Search.css'

// hooks
// import fetchUrl from '../hooks/useFetch'

const api = {
  base: "https://api.openweathermap.org/data/2.5/"
}

export default function Search({handleSearch}) {
  const [searchInput, setSearchInput] = useState('')

  const handleKeyPress = (val) =>{
    if (val.key === "Enter") {
      handleSearch(`${api.base}weather?q=${searchInput}&units=imperial&APPID=${process.env.REACT_APP_OPENWEATHER_API_KEY}`)
      setSearchInput('')
    }
  }

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  )
}
