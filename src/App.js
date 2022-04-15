import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import axios from "axios";
import "./scss/App.css";
function App() {
  const [data, setData] = useState("");

  const getData = () => {
    const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/25560_PC?apikey=MsMvoencLAxAXNewAJlt3cYTZ09xH7Ku`;

    //url call
    axios.get(url).then(response => {
      setData(response.data);
      // console.log(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <ul className="container__weather">
        {data &&
          data.DailyForecasts.map((dailyWeather, index) => (
            <Weather dailyWeather={dailyWeather} index={index} key={index} />
          ))}
      </ul>
    </div>
  );
}

export default App;
