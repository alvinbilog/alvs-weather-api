import React from "react";
// import Temperature from "./Temperature";
import "./scss/weather.css";
const Weather = ({ dailyWeather, index }) => {
  var fullDate = dailyWeather.Date;
  //Need to slice to separate the number
  const day = fullDate.slice(8, 10);
  const month = fullDate.slice(5, 7);
  const year = fullDate.slice(0, 4);

  //change the format because the json is not in format
  var date = new Date(`${month}-${day}-${year}`);
  const dayOfTheWeek = date.getDay();

  //the getDay() functin returns a number so we need array
  const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  //This is for the icon number, if 1 digit needs to add 0 but if 2 digit no need to add, we will use .length function to count the length but need to convert first the number into string
  var stringNum = dailyWeather.Day.Icon + ""; //the "" is to convert into string
  const stringLen = stringNum.length;
  if (stringLen === 1) {
    stringNum = "0" + stringNum; //if 1 digit it adds 0
  } else {
    stringNum = dailyWeather.Day.Icon; //no changes
  }
  console.log(index);
  return (
    <div className="Weather">
      <li
        key={index}
        className="container"
        style={
          index === 0
            ? {
                background: "#f3f3f3",
              }
            : {}
        }
      >
        <div className="img-container">
          <h3>{days[dayOfTheWeek]}</h3>

          <img
            src={`https://developer.accuweather.com/sites/default/files/${stringNum}-s.png`}
            alt="weather"
          />
        </div>

        <div className="temperature">
          <h3 id="min">{dailyWeather.Temperature.Minimum.Value}°</h3>
          <h3>{dailyWeather.Temperature.Maximum.Value}°</h3>
        </div>
      </li>
    </div>
  );
};

export default Weather;
