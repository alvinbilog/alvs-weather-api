import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";
import "./scss/App.css";
function App() {
  const [data, setData] = useState("");
  const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/25560_PC?apikey=MsMvoencLAxAXNewAJlt3cYTZ09xH7Ku`;

  //url call
  axios.get(url).then(response => {
    setData(response.data);
    // console.log(data);
  });

  //Getting current date
  // const current = new Date();
  // const date = `${current.getDate()}/${
  //   current.getMonth() + 1
  // }/${current.getFullYear()}`;

  //Days of the week
  // const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="App">
      <div className="container__weather">
        {data
          ? data.DailyForecasts.map(dailyWeather => (
              <Weather dailyWeather={dailyWeather} key={dailyWeather.Date} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default App;
