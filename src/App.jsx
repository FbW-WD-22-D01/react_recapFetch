import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const APIKEY= ''

  async function handleClick(){
    const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=Berlin&limit=5&appid=${APIKEY}`)
    const result = await res.json()
    const lat = result[0].lat
    const lon = result[0].lon
    
    const resWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`)
    const resultWeather = await resWeather.json()
    
    
    console.log(resultWeather)
    const myObj = { temperatur: 15 }
  }


  

  return (
    <div className="App">
     <input onChange={(e) => setCity(e.target.value)} value={city}  />
     <button onClick={handleClick}>Such die Stadt</button>
    </div>
  )
}

export default App
