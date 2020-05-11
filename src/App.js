import React, { useState, useEffect } from 'react';

const config = {
  key:"6c04d4949ac86db24eed44c22d2ebe75",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {

const [query, setQuery] = useState('');
const [weather, setWeather] = useState('');
const [advice, setAdvice] = useState({});

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

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.adviceslip.com/advice");
      res
        .json()
        .then(res => setAdvice(res))
        .catch(err => console.log(err));
    }

    fetchData();

  });

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

        <br></br>
        <br></br>

        <div className="cardApp">
          <div className="card">
            <h3 className="heading">{JSON.stringify(advice)}</h3>
          </div>
        </div>

        <br></br>
        <br></br>

    {(typeof weather.main != "undefined") ? (
     
      <div>
        <div className="location-box">
          <div className="location">{weather.name}, {weather.sys.country}</div>
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

      <div className="footer">
         <h1 className="footerText">Current time: {new Date().toLocaleTimeString()}</h1>    
      </div>  
    </div>
  );
    
}

export default App;