import React from 'react';

const config = {
  key:"6c04d4949ac86db24eed44c22d2ebe75",
  base:"https://api.openweathermap.org/data/2.5"
}

function App() {

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
    <div className="App">
      <main>
       
        <div className="search-box">
          <input type = "text" className="search-bar" placeholder="Search..."/>
        </div>

        <div className="location-box">
          <div className="location">New York, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>


      </main>
    </div>
  );
}

export default App;
