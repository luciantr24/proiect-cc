import React, { useState } from 'react';

const config = {
  key:"6c04d4949ac86db24eed44c22d2ebe75",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {

const [query, setQuery] = useState('');

const [weather, setWeather] = useState('');

const search = event =>{
  if(event.key === "Enter"){
    fetch(`${config.base}weather?q=${query}&units=metric&APPID=${config.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      setQuery('');
    });
  }
}
const dateBuilder = (d) =>{

  let months = ["January", "February", "March", "April",
                "May", "June", "July", "August", "September",
                "Octomber", "November", "December"];

  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`

}

  return (
    <div className="app">
      <main>
       
        <div className="search-box">
          <input type = "text" 
             className="search-bar" 
             placeholder="Search..."
             onChange={e => setQuery(e.target.value)}
             value={query}
             onKeyPress={search}/>
        </div>
    {(typeof weather.main != "undefined") ? (
      <div>
        <div className="location-box">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>

        <div className="weather-box">
          <div className="temp">
          {Math.round(weather.main.temp)}°c
          </div>
          <div className="weather">{weather.weather[0].main}</div>
        </div>
        </div>
     ) : ('')}
      </main>
    </div>
  );
}

export default App;
