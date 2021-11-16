// styles
import { useState } from 'react'
import './Display.css'

// hooks
import { useFetch } from './hooks/useFetch'

// components
import Search from './Search'

export default function Display() {
  const [searchUrl, setFetchUrl] = useState(`https://api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&APPID=${process.env.REACT_APP_OPENWEATHER_API_KEY}`)

  const { data, isPending, error} = useFetch(searchUrl)
  
  const handleSearch = (url) => {
    setFetchUrl(url)
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
          {error && <p className="error">{error}</p>}
          {isPending && <p className="loading">Loading...</p>}
          {data && 
        <div className="display">
          <div className="display-left">
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" />
            <h2>{data.name}, {data.sys.country}</h2>
            <h3>{data.weather[0].description}</h3>
            <h1 className="temp">{Math.round(data.main.temp)}°f</h1>
            <h3>Feels like: {Math.round(data.main.feels_like)}°f</h3>
          </div>
          <div className="display-right">
            <div className="high-low">
              <h2>High: {Math.round(data.main.temp_max)}°f</h2>
              <h2>Low: {Math.round(data.main.temp_min)}°f</h2>
            </div>
            <h2 className="wind-speed">Wind Speed: {Math.round(data.wind.speed)} mph</h2>
            <h2>Humidity: {data.main.humidity}%</h2>
          </div>
        </div>}
    </div>
  )
}
